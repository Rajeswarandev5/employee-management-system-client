import {
  NavLink,
  useNavigate,
} from "react-router-dom";

import { useAuth }
from "../context/AuthContext";

const Sidebar = () => {
  const { logout } =
    useAuth();

  const navigate =
    useNavigate();

  const handleLogout = () => {
    logout();

    navigate("/", {
      replace: true,
    });
  };

  return (
    <div
      className="
      w-64
      bg-slate-600
      text-white
      p-5
    "
    >
      <h2
        className="
        text-2xl
        font-bold
        mb-10
      "
      >
        EMS
      </h2>

      <nav
        className="
        flex
        flex-col
        gap-4
      "
      >
        <NavLink to="/dashboard">
          Dashboard
        </NavLink>

        <NavLink
          to="/dashboard/employees"
        >
          Employees
        </NavLink>

        <NavLink
          to="/dashboard/add"
        >
          Add Employee
        </NavLink>

        <button
          onClick={handleLogout}
          className="
          mt-10
          bg-red-500
          p-2
          rounded
        "
        >
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;