import BreadCrumbs from "./components/BreadCrumbs";
import Header from "./components/Header";
import Table from "./components/Table";
import { useBooks } from "./hooks/useBooks";

export default function App() {
  const { data: books, isLoading } = useBooks();

  return (
    <div className="flex min-h-screen flex-col text-gray-100 font-['Inter'] bg-gray-900">
      <Header />
      <main className="flex-1 flex p-10 w-full ">
        <div className="basis-1/4 ">
          <ul className="bg-red-500">
            <li className="mr-auto">Siema</li>
            <li className="mr-auto">Siema</li>
            <li className="mr-auto">Siema</li>
            <li className="mr-auto">Siema</li>
          </ul>
        </div>
        <div className="basis-3/4">
          <BreadCrumbs path={["home", "category", "details"]} />
          <Table
            totalPages={books?.total_pages || 1}
            headers={["ID", "Title", "Authors", "Categories"]}
            data={books?.results || []}
          />
        </div>
      </main>
    </div>
  );
}
