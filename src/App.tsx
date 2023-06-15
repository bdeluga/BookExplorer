import BreadCrumbs from "./components/BreadCrumbs";
import Header from "./components/Header";
import Table from "./components/Table";
import { useBooks } from "./hooks/useBooks";

export default function App() {
  const { data: books, isLoading } = useBooks();

  return (
    <div className="flex min-h-screen flex-col text-gray-100 font-['Inter'] bg-gray-900">
      <Header />
      <main className="flex-1 flex flex-col p-10 w-full">
        <BreadCrumbs path={["home", "category", "details"]} />
        <div className="flex-1 overflow-hidden">
          <Table
            headers={["ID", "Title", "Authors", "Categories"]}
            data={books?.results || []}
          />
        </div>
      </main>
    </div>
  );
}
