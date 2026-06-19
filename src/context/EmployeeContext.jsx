import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import useDebounce from "../hooks/useDebounce";
import api from "../api/axios";

const EmployeeContext = createContext();

export const EmployeeProvider = ({
  children,
}) => {
  const [employees, setEmployees] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState(null);

  const [search, setSearch] =
    useState("");

  const [department, setDepartment] =
    useState("");

  const [status, setStatus] =
    useState("");

  const [page, setPage] =
    useState(1);

  const [totalPages, setTotalPages] =
    useState(1);

  const debouncedSearch =
    useDebounce(search, 500);

  const fetchEmployees =
    async () => {
      try {
        setLoading(true);

        const { data } =
          await api.get(
            "/employees",
            {
              params: {
                page,
                limit: 5,
                search:
                  debouncedSearch,
                department,
                status,
              },
            }
          );

        setEmployees(
          data.employees
        );

        setTotalPages(
          data.totalPages
        );

        setError(null);
      } catch (error) {
        setError(
          error.response?.data
            ?.message
        );
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchEmployees();
  }, [
    page,
    debouncedSearch,
    department,
    status,
  ]);

  const createEmployee =
    async (employeeData) => {
      const { data } =
        await api.post(
          "/employees",
          employeeData
        );

      fetchEmployees();
    };

  const updateEmployee =
    async (
      id,
      employeeData
    ) => {
      await api.put(
        `/employees/${id}`,
        employeeData
      );

      fetchEmployees();
    };

  const deleteEmployee =
    async (id) => {
      await api.delete(
        `/employees/${id}`
      );

      fetchEmployees();
    };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        loading,
        error,

        search,
        setSearch,

        department,
        setDepartment,

        status,
        setStatus,

        page,
        setPage,

        totalPages,

        createEmployee,
        updateEmployee,
        deleteEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployees =
  () =>
    useContext(
      EmployeeContext
    );