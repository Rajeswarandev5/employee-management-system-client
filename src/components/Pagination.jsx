import { useEmployees } from "../context/EmployeeContext";

const Pagination = () => {
  const {
    page,
    setPage,
    totalPages,
  } = useEmployees();

  return (
    <div
      className="
      flex
      justify-center
      gap-2
      mt-6
    "
    >

      <button
        disabled={page === 1}
        onClick={() =>
          setPage(
            page - 1
          )
        }
        className="
        px-4
        py-2
        border
        rounded
      "
      >
        Prev
      </button>

      <span>
        Page {page} of{" "}
        {totalPages}
      </span>

      <button
        disabled={
          page === totalPages
        }
        onClick={() =>
          setPage(
            page + 1
          )
        }
        className="
        px-4
        py-2
        border
        rounded
      "
      >
        Next
      </button>

    </div>
  );
};

export default Pagination;