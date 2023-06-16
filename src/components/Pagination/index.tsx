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
    <ul className="inline-flex -space-x-px mt-8 self-end mr-4">
      <button
        disabled={isLoading || page === 1}
        onClick={() => setPage(page - 1)}
        className="pagination"
      >
        Previous
      </button>
      {page - 1 >= 1 && <button className="pagination">{page - 1}</button>}
      <button className="pagination bg-gray-700 pointer-events-none">
        {page}
      </button>
      <button className="pagination" disabled={isLoading}>
        {page + 1 < totalPages - 1 ? page + 1 : page - 1}
      </button>
      <button className="pagination" disabled={isLoading}>
        ...
      </button>

      <button className="pagination" disabled={isLoading}>
        {totalPages}
      </button>

      <button
        disabled={isLoading || page === totalPages}
        onClick={() => setPage(page + 1)}
        className="pagination"
      >
        Next
      </button>
    </ul>
  );
};

export default Pagination;
