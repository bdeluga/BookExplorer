import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Book } from "../../types";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

interface TableProps {
  headers: string[];
  data?: Book[];
  error: object;
  isLoading: boolean;
  isWidescreen: boolean;
  setAuthor: (author: string) => void;
}

const Table = ({
  headers,
  data,
  isLoading,
  error,
  isWidescreen,
  setAuthor,
}: TableProps) => {
  if (error)
    return (
      <div className="shadow-2xl text-center flex-1 grid place-items-center md:block md:h-fit rounded-3xl p-10">
        <div>
          <p>You broke it. Nice...</p>
          <p className="text-sm text-gray-600">Refresh and try again.</p>
        </div>
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
    <div className="shadow-2xl rounded-3xl p-4 md:p-10">
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
            <tr key={row.work_id} onClick={() => setAuthor(row.authors[0])}>
              {isWidescreen && <td>{row.work_id}</td>}
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
