import { useState } from "react";
import Table from "./components/Table";
import { useBooks } from "./hooks/useBooks";
import Pagination from "./components/Pagination";

import Nav from "./components/Nav";
import BreadCrumbs from "./components/BreadCrumbs";
import { Category } from "./types";

export default function App() {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState<Category>();
  const {
    data: books,
    isPreviousData,
    error,
    isLoading,
  } = useBooks(category, page);
  const [crumbs, setCrumbs] = useState(["home"]);

  // const updateCrumbs = (crumb: string) => {};
  const changeCategory = (category: Category) => {
    setCategory(category);
    setPage(1);
  };

  return (
    <div className="flex min-h-screen max-w-[100rem] mx-auto flex-col text-gray-100 font-['Inter'] ">
      <main className="flex-1 flex p-10 w-full ">
        <div className="basis-1/4 sticky top-10 h-full">
          <Nav category={category} setCategory={changeCategory} />
          <BreadCrumbs path={crumbs} />
        </div>
        <div className="basis-full md:basis-3/4 px-20 flex flex-col ">
          <Table
            totalPages={books?.total_pages || 1}
            headers={["ISBN", "Title", "Author(s)", "Kind(s)"]}
            data={books?.results}
            error={error as object}
            isLoading={isLoading}
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
  );
}
