import { Book } from "../../types";

interface TableProps {
  headers: string[];
  data: Book[];
  totalPages: number;
}

const Table = ({ headers, data }: TableProps) => {
  return (
    <div>
      <table className="border-collapse table-auto w-full text-sm">
        <thead>
          <tr>
            {headers.map((heading) => (
              <th key={heading}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{row.title}</td>
              <td>{row.authors.join(", ") || "Not known"}</td>
              <td>{row.categories}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
