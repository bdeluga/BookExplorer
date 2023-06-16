import { useState } from "react";
import BreadCrumbs from "./components/BreadCrumbs";
import Header from "./components/Header";
import Table from "./components/Table";
import { useBooks } from "./hooks/useBooks";
import Pagination from "./components/Pagination";
import { Categories } from "./types";

export default function App() {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState<Categories | undefined>();
  const { data: books, isLoading } = useBooks(category, page);
  const [crumbs, setCrumbs] = useState(["home"]);

  return (
    <div className="flex min-h-screen flex-col text-gray-100 font-['Inter'] bg-gray-900">
      <Header />
      <main className="flex-1 flex p-10 w-full ">
        <div className="basis-1/4 sticky flex flex-col items-end pr-10 top-10 h-full">
          <BreadCrumbs path={crumbs} />
          <h2 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
            Categories
          </h2>
          <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
            <li>
              <button className="nav">Animals, Bugs & Pets</button>
            </li>
            <li>
              <button className="nav">Art, Creativity & Music</button>
            </li>
            <li>
              <button className="nav">General Literature</button>
            </li>
            <li>
              <button className="nav">Hobbies, Sports & Outdoors</button>
            </li>
            <li>
              <button className="nav">Science Fiction & Fantasy</button>
            </li>
            <li>
              <button className="nav">Real Life</button>
            </li>
            <li>
              <button className="nav">Science & Technology</button>
            </li>
            <li>
              <button className="nav">Mystery & Suspense</button>
            </li>
            <li>
              <button className="nav">Reference</button>
            </li>
          </ul>
        </div>
        <div className="basis-3/4">
          <Table
            totalPages={books?.total_pages || 1}
            headers={["ID", "Title", "Author(s)", "Kind(s)"]}
            data={books?.results || []}
          />
          <Pagination
            page={page}
            setPage={setPage}
            totalPages={books?.total_pages || 1}
          />
        </div>
      </main>
    </div>
  );
}
