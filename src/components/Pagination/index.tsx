interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
}

const Pagination = ({ page, totalPages, setPage }: PaginationProps) => {
  return (
    <ul className="inline-flex -space-x-px mt-4">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="pagination"
      >
        Previous
      </button>
      {page - 1 >= 1 && <button className="pagination">{page - 1}</button>}
      <button className="pagination bg-gray-600 pointer-events-none">
        {page}
      </button>
      <button className="pagination">
        {page + 1 < totalPages - 1 ? page + 1 : page - 1}
      </button>
      <button className="pagination">...</button>

      <button className="pagination">{totalPages}</button>

      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className="pagination"
      >
        Next
      </button>
    </ul>
  );
};

export default Pagination;
