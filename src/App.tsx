import BreadCrumbs from "./components/BreadCrumbs";
import Header from "./components/Header";
import Table from "./components/Table";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col text-gray-100 font-['Inter'] bg-gray-900">
      <Header />
      <main className="flex-1 flex-col justify-center flex items-center p-20">
        <div>
          <BreadCrumbs path={["home", "category", "details"]} />
          <Table category="Science Fiction & Fantasy" />
        </div>
      </main>
    </div>
  );
}
