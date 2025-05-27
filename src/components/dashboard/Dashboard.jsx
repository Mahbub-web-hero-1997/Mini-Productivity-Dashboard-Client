import React, { useContext } from "react";
import { BarChart2, User, CheckCircle, LogOut } from "lucide-react";
import { AuthContext } from "../../globalState/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">
            Welcome Back{" "}
            <span className=" text-[#ff6767]">{user.fullName}</span>
          </h2>{" "}
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Tasks Completed
            </h3>
            <p className="text-3xl font-bold text-[#ff6767]">24</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Goals Achieved
            </h3>
            <p className="text-3xl font-bold text-[#ff6767]">12</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Daily Streak
            </h3>
            <p className="text-3xl font-bold text-[#ff6767]">5 Days</p>
          </div>
        </div>

        {/* Placeholder for Charts or Tables */}
        <div className="bg-white p-6 rounded-xl shadow text-center text-gray-500">
          📈 Analytics and activity chart coming soon...
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
