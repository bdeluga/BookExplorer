import { useState } from "react";
import Table from "./components/Table";
import { useBooks } from "./hooks/useBooks";
import Pagination from "./components/Pagination";
import Nav from "./components/Nav";
import Header from "./components/Header";
import BreadCrumbs from "./components/BreadCrumbs";
import type { Crumbs, ColumnHeader, Kind, TBook } from "./types";

export default function App() {
  const [page, setPage] = useState(1);
  const [kind, setKind] = useState<Kind>("General Literature");
  const [author, setAuthor] = useState("");
  const [selectedRow, setSelectedRow] = useState<TBook | null>(null);

  const {
    data: books,
    isPreviousData,
    isError,
    isLoading,
  } = useBooks(kind, page, author);
  const [crumbs, setCrumbs] = useState<Crumbs[]>([
    {
      label: "Home",
      //reset state
      returnFn: () => {
        setPage(1);
        setAuthor("");
        setKind("General Literature");
        setCrumbs([crumbs[0]]);
        setSelectedRow(null);
      },
    },
  ]);
  const changeKind = (kind: Kind) => {
    setKind(kind);
    setAuthor("");
    setPage(1);
    //don't set crumbs it's default
    if (kind === "General Literature") return setCrumbs([crumbs[0]]);
    setCrumbs([
      crumbs[0],
      {
        label: kind,
        returnFn: () => {
          //remove last element
          setAuthor("");
          setPage(1);
          setCrumbs((prev) => prev.slice(0, prev.length - 1));
        },
      },
    ]);
  };

  const handleRowClick = (book: TBook) => {
    setSelectedRow(book);
    if (author) return;
    setAuthor(book.authors);
    setCrumbs([
      ...crumbs,
      {
        label: book.authors,
      },
    ]);
    setPage(1);
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
    <div className="flex flex-col text-gray-100 min-h-screen font-['Inter'] relative overflow-hidden">
      <Header />
      <div className="flex flex-1 w-full h-full  max-w-[100rem] mx-auto md:p-10 ">
        <div className="lg:basis-1/4 lg:sticky lg:top-10 top-0 left-0 absolute lg:h-full">
          <Nav kind={kind} setKind={changeKind} />
        </div>
        <div className="basis-full lg:basis-3/4 px-4 mx-auto md:px-10 flex flex-col">
          <BreadCrumbs crumbs={crumbs} />
          <Table
            headers={headers}
            data={books?.results}
            isError={isError}
            isLoading={isLoading}
            rowClick={handleRowClick}
            selectedRow={selectedRow}
            isFetching={isPreviousData}
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
