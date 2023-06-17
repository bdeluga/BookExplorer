import { useState } from "react";
import Table from "./components/Table";
import { useBooks } from "./hooks/useBooks";
import Pagination from "./components/Pagination";

import Nav from "./components/Nav";
import BreadCrumbs from "./components/BreadCrumbs";
import { Kind } from "./types";
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

  const handleRowClick = (author_: string) => {
    //no more nesting
    if (author) return;
    setAuthor(author_);
    setCrumbs([...crumbs, author_]);
    setPage(1);
  };
  const clearBreadCrumbs = () => {
    setCrumbs([]);
    setPage(1);
    setAuthor("");
    setKinds(null);
  };

  return (
    <div className="flex flex-col text-gray-100 font-['Inter'] relative">
      <Hamburger
        open={open}
        setOpen={setOpen}
        setKind={changeKind}
        kind={kind}
      />
      <Header />
      <div className="flex min-h-screen w-full max-w-[100rem] mx-auto flex-col">
        <main className="flex-1 md:p-10 flex w-full flex-col lg:flex-row items-center lg:items-start">
          <div className="lg:basis-1/4 lg:sticky lg:top-10 h-full basis-full">
            <Nav kind={kind} setKind={changeKind} />
          </div>
          <div className="basis-3/4 px-4 md:px-10 flex flex-col">
            <BreadCrumbs path={crumbs} homeFn={clearBreadCrumbs} />
            <Table
              headers={
                width >= 500
                  ? ["ID", "Title", "Author(s)", "Kind(s)"]
                  : ["Title", "Author(s)", "Kind(s)"]
              }
              data={books?.results}
              error={error as object}
              isLoading={isLoading}
              isWidescreen={width >= 500}
              setAuthor={handleRowClick}
            />

            <Pagination
              page={page}
              setPage={setPage}
              totalPages={books?.total_pages}
              isLoading={isPreviousData}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
