const EmployeeTable = ({
  employees,
  onEdit,
  onDelete,
}) => {
  return (
    <table
      className="
      w-full
      border
      mt-5
    "
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Designation</th>
          <th>Status</th>
          <th>Joining</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {employees.map(
          (employee) => (
            <tr
              key={
                employee._id
              }
              className="
              border-t
            "
            >
              <td>
                {
                  employee.name
                }
              </td>

              <td>
                {
                  employee.email
                }
              </td>

              <td>
                {
                  employee.department
                }
              </td>

              <td>
                {
                  employee.designation
                }
              </td>

              <td>
                {
                  employee.status
                }
              </td>

              <td>
                {new Date(
                  employee.joiningDate
                ).toLocaleDateString()}
              </td>

              <td>
                <button
                  onClick={() =>
                    onEdit(
                      employee
                    )
                  }
                  className="
                  text-blue-500
                  mr-2
                "
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    onDelete(
                      employee._id
                    )
                  }
                  className="
                  text-red-500
                "
                >
                  Delete
                </button>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default EmployeeTable;