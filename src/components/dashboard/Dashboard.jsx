import React, { useContext } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { FaPlus, FaTasks } from "react-icons/fa";
import { AuthContext } from "../../globalState/AuthProvider";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user, task } = useContext(AuthContext);

  const taskStats = {
    total: task.length,
    completed: task.filter((t) => t.status === "completed").length,
    pending: task.filter((t) => t.status === "pending").length,
  };

  // Data for completed vs pending donut
  const completionData = [
    { name: "Completed", value: taskStats.completed },
    { name: "Pending", value: taskStats.pending },
  ];

  // Data for total tasks (single slice)
  const totalData = [{ name: "Total Tasks", value: taskStats.total }];

  // Colors for completed vs pending
  const completionColors = ["#22c55e", "#f97316"]; // green and orange
  // Color for total tasks circle
  const totalColors = ["#ff6767"]; // pinkish/red

  return (
    <div className="flex h-[calc(100vh-132px)] bg-gray-100 overflow-scroll scrollbar-hide">
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">
            Welcome Back <span className="text-[#ff6767]">{user.fullName}</span>
          </h2>
          <p className="text-center text-sm md:text-base font-semibold text-white bg-gradient-to-r from-[#ff6767] to-[#ff8c8c] px-5 py-2 rounded-full shadow-md inline-block">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </header>

        {/* Dashboard Cards */}
        <div className="flex gap-3 mb-8">
          <div className="w-2/3 bg-white p-6 shadow hover:shadow-md transition">
            <div className="flex justify-between items-center">
              <p className="flex gap-2 text-md items-center font-semibold">
                <FaTasks className="text-[#ff6767] text-2xl" />
                To-Do
              </p>
              <Link
                to="/addTask"
                className="text-[#ff6867] flex items-center gap-1"
              >
                <FaPlus />
                Add task
              </Link>
            </div>
          </div>
          <div className="w-1/3 bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Goals Achieved
            </h3>
            <p className="text-3xl font-bold text-[#22c55e]">
              {taskStats.completed}
            </p>
          </div>
        </div>

        {/* Two Circle Charts side by side */}
        <div className="flex gap-8 bg-white p-6 rounded-xl shadow">
          {/* Completed vs Pending Donut Chart */}
          <div className="w-1/2 h-72">
            <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
              Task Completion Overview
            </h3>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={completionData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  innerRadius={60} // donut shape
                  label
                >
                  {completionData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={completionColors[index % completionColors.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Total Tasks Circle Chart */}
          <div className="w-1/2 h-80">
            <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
              Total Tasks
            </h3>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={totalData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label={({ name, value }) => `${value}`}
                >
                  {totalData.map((entry, index) => (
                    <Cell
                      key={`cell-total-${index}`}
                      fill={totalColors[index % totalColors.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
