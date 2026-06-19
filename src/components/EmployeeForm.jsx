import {
  useForm,
} from "react-hook-form";

const EmployeeForm = ({
  onSubmit,
  defaultValues,
}) => {
  const {
    register,
    handleSubmit,
  } = useForm({
    defaultValues,
  });

  return (
    <form
      onSubmit={handleSubmit(
        onSubmit
      )}
      className="space-y-4"
    >
      <input
        placeholder="Name"
        {...register("name")}
        className="
        border
        w-full
        p-2
        rounded
      "
      />

      <input
        placeholder="Email"
        {...register("email")}
        className="
        border
        w-full
        p-2
        rounded
      "
      />

      <input
        placeholder="Department"
        {...register(
          "department"
        )}
        className="
        border
        w-full
        p-2
        rounded
      "
      />

      <input
        placeholder="Designation"
        {...register(
          "designation"
        )}
        className="
        border
        w-full
        p-2
        rounded
      "
      />

      <select
        {...register("status")}
        className="
        border
        w-full
        p-2
        rounded
      "
      >
        <option>
          Active
        </option>
        <option>
          Inactive
        </option>
      </select>

      <input
        type="date"
        {...register(
          "joiningDate"
        )}
        className="
        border
        w-full
        p-2
        rounded
      "
      />

      <button
        className="
        bg-blue-500
        text-white
        px-4
        py-2
        rounded
      "
      >
        Save Employee
      </button>
    </form>
  );
};

export default EmployeeForm;