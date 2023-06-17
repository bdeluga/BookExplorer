import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
  totalPages?: number;
  isLoading: boolean;
}

const Pagination = ({
  page,
  totalPages,
  setPage,
  isLoading,
}: PaginationProps) => {
  if (!totalPages) return null;

  return (
    <ul className="inline-flex -space-x-px md:mt-8 mt-4 mb-2 self-center lg:self-end md:mr-4">
      <button
        disabled={isLoading || page === 1}
        onClick={() => setPage(page - 1)}
        className="pagination"
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      {page - 1 >= 1 && <button className="pagination">{page - 1}</button>}
      <button className="pagination bg-gray-700 pointer-events-none">
        {page}
      </button>

      {page < totalPages - 1 && (
        <button className="pagination" disabled={isLoading}>
          ...
        </button>
      )}

      {page !== totalPages && (
        <button className="pagination" disabled={isLoading}>
          {totalPages}
        </button>
      )}

      <button
        disabled={isLoading || page === totalPages}
        onClick={() => setPage(page + 1)}
        className="pagination"
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </ul>
  );
};

export default Pagination;
