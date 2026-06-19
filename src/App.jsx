import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";

import Overview from "./pages/Overview";
import Employees from "./pages/Employees";
import AddEmployee from "./pages/AddEmployee";

import DashboardLayout from "./layouts/DashboardLayout";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          element={<ProtectedRoute />}
        >
          <Route
            path="/dashboard"
            element={<DashboardLayout />}
          >
            {/* Analytics Page */}
            <Route
              index
              element={<Overview />}
            />

            {/* Employee List */}
            <Route
              path="employees"
              element={<Employees />}
            />

            {/* Add Employee */}
            <Route
              path="add"
              element={<AddEmployee />}
            />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;