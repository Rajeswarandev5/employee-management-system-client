import { useState } from "react";
import SearchFilter from "../components/SearchFilter";
import EmployeeTable from "../components/EmployeeTable";
import Pagination from "../components/Pagination";
import EmployeeForm from "../components/EmployeeForm";
import { useEmployees } from "../context/EmployeeContext";
import { toast } from "react-toastify";

const Employees = () => {
  const {
    employees,
    updateEmployee,
    deleteEmployee,
  } = useEmployees();

  const [editingEmployee, setEditingEmployee] =
    useState(null);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete employee?"))
      return;

    await deleteEmployee(id);

    toast.success("Employee Deleted");
  };

  const handleUpdate = async (data) => {
    await updateEmployee(
      editingEmployee._id,
      data
    );

    toast.success("Employee Updated");

    setEditingEmployee(null);
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-5">
        Employees
      </h1>

      {editingEmployee && (
        <EmployeeForm
          onSubmit={handleUpdate}
          defaultValues={editingEmployee}
        />
      )}

      <SearchFilter />

      <EmployeeTable
        employees={employees}
        onEdit={setEditingEmployee}
        onDelete={handleDelete}
      />

      <Pagination />
    </>
  );
};

export default Employees;