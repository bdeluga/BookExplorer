import { Book } from "../../types";

interface TableProps {
  headers: string[];
  data: Book[];
}

const Table = ({ headers, data }: TableProps) => {
  return (
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
          <tr>
            <td>{idx + 1}</td>
            <td>{row.title}</td>
            <td>{row.authors.join(", ")}</td>
            <td>{row.categories}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
