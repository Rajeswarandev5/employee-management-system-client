import { useEffect, useState } from "react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  LineChart,
  Line,

} from "recharts";

import api from "../api/axios";

const AnalyticsDashboard = () => {
  const [analytics, setAnalytics] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics =
    async () => {
      try {
        setLoading(true);

        const { data } =
          await api.get(
            "/employees/analytics/summary"
          );

        setAnalytics(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

  if (loading)
    return (
      <p>Loading Analytics...</p>
    );

  if (!analytics) return null;

  const statusData = [
    {
      name: "Active",
      value:
        analytics.activeEmployees,
    },
    {
      name: "Inactive",
      value:
        analytics.inactiveEmployees,
    },
  ];

  const departmentData =
    analytics.departmentData.map(
      (item) => ({
        department: item._id,
        count: item.count,
      })
    );

  const monthlyData =
    analytics?.monthlyJoined?.map((item) => ({
      month: item._id.month,
      count: item.count,
    })) || [];

console.log("Analytics Response:", analytics);
console.log("Monthly Joined:", analytics?.monthlyJoined);
console.log("Monthly Data:", monthlyData);

  return (
    <div className="mb-8">
      {/* Cards */}

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-4
        mb-8
      "
      >
        <div
          className="
          bg-white
          shadow
          rounded
          p-5
        "
        >
          <h3 className="text-lg">Total Employees</h3>

          <p
            className="
            text-3xl
            font-bold
          "
          >
            {analytics.totalEmployees}
          </p>
        </div>

        <div
          className="
          bg-white
          shadow
          rounded
          p-5
        "
        >
          <h3 className="text-lg">Active Employees</h3>

          <p
            className="
            text-3xl
            font-bold
          "
          >
            {analytics.activeEmployees}
          </p>
        </div>

        <div
          className="
          bg-white
          shadow
          rounded
          p-5
        "
        >
          <h3 className="text-lg">Inactive Employees</h3>

          <p
            className="
            text-3xl
            font-bold
          "
          >
            {analytics.inactiveEmployees}
          </p>
        </div>
      </div>

      {/* Charts */}

      <div
        className="
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-6
      "
      >
        {/* Department Chart */}

        <div
          className="
          bg-white
          shadow
          rounded
          p-4
          h-[400px]
        "
        >
          <h2
            className="
            text-xl
            font-semibold
            mb-4
          "
          >
            Department Wise Count
          </h2>

          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={departmentData}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="department" />

              <YAxis />

              <Tooltip />

              <Legend />

              <Bar dataKey="count" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Status Chart */}

        <div
          className="
          bg-white
          shadow
          rounded
          p-4
          h-[400px]
        "
        >
          <h2
            className="
            text-xl
            font-semibold
            mb-4
          "
          >
            Employee Status
          </h2>

          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={statusData}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                label
              >
                {statusData.map((entry, index) => (
                  <Cell key={index} />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div
        className="
    bg-white
    shadow
    rounded
    p-4
    h-[400px]
    mt-6
  "
      >
        <h2 className="text-xl font-semibold mb-4">Monthly Joined Employees</h2>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Line type="monotone" dataKey="count" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;