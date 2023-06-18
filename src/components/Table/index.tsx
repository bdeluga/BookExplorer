import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Book, ColumnHeader } from "../../types";
import {
  faBookOpen,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { useMemo } from "react";
import { useViewport } from "../../hooks/useViewport";

interface TableProps {
  headers: ColumnHeader[];
  data?: Book[];
  isError: boolean;
  isLoading: boolean;
  rowClick: (book: Book) => void;
  selectedRow: Book | null;
}

const Table = ({
  headers,
  data,
  isLoading,
  isError,
  rowClick,
  selectedRow,
}: TableProps) => {
  const width = useViewport();
  const visibleHeaders = useMemo(() => {
    return headers.filter(
      (header) => !header.minWidth || width >= header.minWidth
    );
  }, [width, headers]);

  if (isError)
    return (
      <div className="h-full p-10 grid place-items-center">
        <div className="flex flex-col justify-center items-center">
          <FontAwesomeIcon icon={faTriangleExclamation} className=" text-2xl" />
          <p className="mt-1">Error fetching books...</p>
          <p className="text-xs text-gray-600">Refresh and try again.</p>
        </div>
      </div>
    );

  if (isLoading)
    return (
      <div className="h-full p-10 grid place-items-center">
        <div className="flex flex-col gap-2">
          <FontAwesomeIcon
            icon={faBookOpen}
            className="animate-bounce text-2xl"
          />
          Fetching book data...
        </div>
      </div>
    );

  return (
    <div className="shadow-2xl rounded-3xl p-4 md:p-10">
      <table className="border-collapse table-auto w-full text-sm">
        <thead>
          <tr>
            {visibleHeaders.map((header) => (
              <th key={header.label}>{header.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((row) => (
            <tr
              onClick={() => rowClick(row)}
              key={row.work_id}
              className={`${
                row.work_id === selectedRow?.work_id && "bg-gray-600"
              }`}
            >
              {visibleHeaders.map((header) => (
                <td key={row[header.key] as string}>{row[header.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
