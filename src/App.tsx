import { useState } from "react";
import Table from "./components/Table";
import { useBooks } from "./hooks/useBooks";
import Pagination from "./components/Pagination";

import Nav from "./components/Nav";
import BreadCrumbs from "./components/BreadCrumbs";
import { Book, ColumnHeader, Kind } from "./types";
import { useViewport } from "./hooks/useViewport";
import Header from "./components/Header";
import Hamburger from "./components/Hamburger";

export default function App() {
  const [page, setPage] = useState(1);
  const [kind, setKinds] = useState<Kind>(null);
  const [author, setAuthor] = useState("");
  const {
    data: books,
    isPreviousData,
    error,
    isLoading,
  } = useBooks(kind, page, author);
  const [crumbs, setCrumbs] = useState<string[]>([]);
  const width = useViewport();
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<Book>();

  // const updateCrumbs = (crumb: string) => {};
  const changeKind = (kind: Kind) => {
    setKinds(kind);
    setPage(1);
    setAuthor("");
    //if there are more crumbs, e.g kind -> author, we remove author and set new kind
    if (crumbs.length > 1) {
      return setCrumbs(!kind ? [] : [kind as string]);
    }
    //author or kind, either way new kind overwrites current kind
    setCrumbs(!kind ? [] : [kind as string]);
  };

  const handleRowClick = (book: Book) => {
    //no more nesting
    setSelectedRow(book);
    if (author) return;
    setAuthor(book.authors[0]);
    setCrumbs([...crumbs, book.authors[0]]);
    setPage(1);
  };
  const clearBreadCrumbs = () => {
    setCrumbs([]);
    setPage(1);
    setAuthor("");
    setKinds(null);
  };

  const headers: ColumnHeader[] = [
    {
      label: "Id",
      key: "work_id",
      minWidth: 500,
    },
    {
      label: "Title",
      key: "title",
      minWidth: 0,
    },
    {
      label: "Author(s)",
      key: "authors",
    },
    {
      label: "Kind(s)",
      key: "categories",
    },
    {
      label: "ISBN",
      key: "canonical_isbn",
      minWidth: 800,
    },
  ];

  return (
    <div className="flex flex-col text-gray-100 min-h-screen font-['Inter'] relative">
      <Hamburger
        open={open}
        setOpen={setOpen}
        setKind={changeKind}
        kind={kind}
      />
      <Header />
      <div className="lg:flex flex-1 w-full h-full  max-w-[100rem] mx-auto md:p-10">
        <div className="lg:basis-1/4 lg:sticky lg:top-10 h-full  basis-full">
          <Nav kind={kind} setKind={changeKind} />
        </div>
        <div className="basis-3/4 px-4 mx-auto md:px-10 flex flex-col">
          <BreadCrumbs path={crumbs} homeFn={clearBreadCrumbs} />
          <Table
            headers={headers}
            data={books?.results}
            error={error as Error}
            isLoading={isLoading}
            rowClick={handleRowClick}
            selectedRow={selectedRow}
          />

          <Pagination
            page={page}
            setPage={setPage}
            totalPages={books?.total_pages}
            isLoading={isPreviousData}
          />
        </div>
      </div>
    </div>
  );
}
