import { useState } from "react";

import { toast } from "react-toastify";

import EmployeeForm from "../components/EmployeeForm";

import EmployeeTable from "../components/EmployeeTable";

import { useEmployees } from "../context/EmployeeContext";

import { useAuth } from "../context/AuthContext";

import SearchFilter from "../components/SearchFilter";

import Pagination from "../components/Pagination";
import AnalyticsDashboard from "../components/AnalyticsDashboard";

const Dashboard = () => {
  const {
    employees,
    loading,
    error,
    createEmployee,
    updateEmployee,
    deleteEmployee,
  } = useEmployees();

  const { logout } =
    useAuth();

  const [editingEmployee,
    setEditingEmployee] =
    useState(null);

  const handleSubmit =
    async (data) => {
      try {

        if (
          editingEmployee
        ) {
          await updateEmployee(
            editingEmployee._id,
            data
          );

          toast.success(
            "Employee Updated"
          );

          setEditingEmployee(
            null
          );
        } else {
          await createEmployee(
            data
          );

          toast.success(
            "Employee Added"
          );
        }

      } catch {
        toast.error(
          "Operation Failed"
        );
      }
    };

  const handleDelete =
    async (id) => {

      const confirmDelete =
        window.confirm(
          "Delete employee?"
        );

      if (
        !confirmDelete
      )
        return;

      await deleteEmployee(id);

      toast.success(
        "Employee Deleted"
      );
    };

  return (
    <div className="p-8">

      <div
        className="
        flex
        justify-between
        mb-5
      "
      >
        <h1
          className="
          text-3xl
          font-bold
        "
        >
          Employee Dashboard
        </h1>

        <button
          onClick={logout}
          className="
          bg-red-500
          text-white
          px-4
          py-2
          rounded
        "
        >
          Logout
        </button>
      </div>

       <AnalyticsDashboard />

      <EmployeeForm
        onSubmit={
          handleSubmit
        }
        defaultValues={
          editingEmployee
        }
      />

      {loading && (
        <p>
          Loading...
        </p>
      )}

      {error && (
        <p
          className="
          text-red-500
        "
        >
          {error}
        </p>
      )}

      {!loading &&
        employees.length ===
          0 && (
          <p>
            No Employees Found
          </p>
        )}

        <SearchFilter />

      <EmployeeTable
        employees={
          employees
        }
        onEdit={
          setEditingEmployee
        }
        onDelete={
          handleDelete
        }
      />
      <Pagination />
    </div>
  );
};

export default Dashboard;