import { useEmployees } from "../context/EmployeeContext";

const SearchFilter = () => {
  const {
    search,
    setSearch,

    department,
    setDepartment,

    status,
    setStatus,
  } = useEmployees();
  const { setPage } = useEmployees();

  return (
    <div
      className="
      flex
      gap-4
      mb-5
      flex-wrap
    "
    >
      <input
        type="text"
        placeholder="Search employee..."
        value={search}
        onChange={(e) => {
          setPage(1);
          setSearch(e.target.value);
        }}
        className="
        border
        p-2
        rounded
      "
      />

      <select
        value={department}
        onChange={(e) => {
          setPage(1);
          setDepartment(e.target.value);
        }}
        className="
        border
        p-2
        rounded
      "
      >
        <option value="">All Departments</option>

        <option value="IT">IT</option>

        <option value="HR">HR</option>

        <option value="Finance">Finance</option>

        <option value="Marketing">Marketing</option>
      </select>

      <select
        value={status}
        onChange={(e) => {
          setPage(1);
          setStatus(e.target.value);
        }}
        className="
        border
        p-2
        rounded
      "
      >
        <option value="">All Status</option>

        <option value="Active">Active</option>

        <option value="Inactive">Inactive</option>
      </select>
    </div>
  );
};

export default SearchFilter;
