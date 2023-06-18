import { useState } from "react";
import Table from "./components/Table";
import { useBooks } from "./hooks/useBooks";
import Pagination from "./components/Pagination";

import Nav from "./components/Nav";
import type { Book, Crumbs, ColumnHeader, Kind } from "./types";

import Header from "./components/Header";
import Hamburger from "./components/Hamburger";
import BreadCrumbs from "./components/BreadCrumbs";

export default function App() {
  const [page, setPage] = useState(1);
  const [kind, setKind] = useState<Kind>(null);
  const [author, setAuthor] = useState("");
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
        setKind(null);
        setCrumbs([crumbs[0]]);
      },
    },
  ]);
  const changeKind = (kind: Kind) => {
    setKind(kind);
    setAuthor("");
    setCrumbs([
      crumbs[0],
      {
        label: kind,
        returnFn: () => {
          //remove last element
          setAuthor("");
          setCrumbs((prev) => prev.slice(0, prev.length - 1));
        },
      },
    ]);
  };
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<Book>();

  const handleRowClick = (book: Book) => {
    setSelectedRow(book);
    if (author) return;
    setAuthor(book.authors[0]);
    setCrumbs([
      ...crumbs,
      {
        label: book.authors[0],
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
    <div className="flex flex-col text-gray-100 min-h-screen font-['Inter'] relative ">
      <Hamburger open={open} setOpen={setOpen} setKind={setKind} kind={kind} />
      <Header />
      <div className="flex flex-1 w-full h-full  max-w-[100rem] mx-auto md:p-10">
        <div className="lg:basis-1/4 lg:sticky lg:top-10 h-full hidden lg:block">
          <Nav kind={kind} setKind={changeKind} />
        </div>
        <div className="basis-3/4 px-4 mx-auto md:px-10 flex flex-col">
          <BreadCrumbs crumbs={crumbs} />
          <Table
            headers={headers}
            data={books?.results}
            isError={isError}
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
