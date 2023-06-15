import { useState } from "react";
import { Book } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface TableProps {
  headers: string[];
  data: Book[];
  itemsPerPage: number;
  totalPages: number;
}

const Table = ({ headers, data, itemsPerPage, totalPages }: TableProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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
          {currentItems.map((row, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{row.title}</td>
              <td>{row.authors.join(", ")}</td>
              <td>{row.categories}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul className="inline-flex -space-x-px">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="pagination"
        >
          Previous
        </button>
        <button className="pagination">
          {currentPage - 1 > 1 ? currentPage - 1 : currentPage}
        </button>
        <button className="pagination">{currentPage}</button>
        <button className="pagination">
          {currentPage + 1 < totalPages - 1 ? currentPage + 1 : currentPage - 1}
        </button>
        <button className="pagination">...</button>
        <button className="pagination">{totalPages}</button>

        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="pagination"
        >
          Next
        </button>
      </ul>
    </div>
  );
};

export default Table;
