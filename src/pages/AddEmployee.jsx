import EmployeeForm from "../components/EmployeeForm";

import { useEmployees }
from "../context/EmployeeContext";

import { toast }
from "react-toastify";

const AddEmployee = () => {

  const { createEmployee } =
    useEmployees();

  const handleSubmit = async (data) => {

      await createEmployee(data);

      toast.success(
        "Employee Added"
      );
  };

  return (
    <>
      <h1
        className="
        text-3xl
        font-bold
        mb-5
      "
      >
        Add Employee
      </h1>

      <EmployeeForm
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default AddEmployee;