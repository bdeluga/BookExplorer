import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Book } from "../../types";
import { faBookOpen, faGrinWink } from "@fortawesome/free-solid-svg-icons";

interface TableProps {
  headers: string[];
  data?: Book[];
  totalPages: number;
  error: object;
  isLoading: boolean;
}

const Table = ({ headers, data, error, isLoading }: TableProps) => {
  if (error)
    return (
      <div className="shadow-2xl text-center rounded-3xl p-10">
        <p className="">You broke it. Nice...</p>
        <p className="text-sm text-gray-600">
          (Probably too many requests) <FontAwesomeIcon icon={faGrinWink} />
        </p>
      </div>
    );

  if (isLoading)
    return (
      <div className="shadow-2xl  rounded-3xl p-10 grid place-items-center">
        <FontAwesomeIcon
          icon={faBookOpen}
          className="animate-bounce text-2xl"
        />
        Fetching book data...
      </div>
    );

  return (
    <div className="shadow-2xl  rounded-3xl p-10">
      <table className="border-collapse table-auto w-full text-sm">
        <thead>
          <tr>
            {headers.map((heading) => (
              <th key={heading}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((row) => (
            <tr key={row.canonical_isbn}>
              <td>{row.canonical_isbn}</td>
              <td>{row.title}</td>
              <td>{row.authors.join(", ") || "Not known"}</td>
              <td>{row.categories.join(", ") || "Not known"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
