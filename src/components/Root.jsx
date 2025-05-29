import React, { useContext, useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  MdDashboard,
  MdEventAvailable,
  MdLogout,
  MdSettings,
} from "react-icons/md";
import { BsFillPatchExclamationFill } from "react-icons/bs";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaEdit, FaHandsHelping } from "react-icons/fa";
import UseAxios from "../hook/UseAxios";
import Swal from "sweetalert2";
import { AuthContext } from "../globalState/AuthProvider";

const Root = () => {
  const useAxios = UseAxios();
  const { user, setUser } = useContext(AuthContext);
  const { fullName, email, profilePicture } = user || {};
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    useAxios.post("/user/logout").then((res) => {
      if (res) {
        setUser(res.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logout successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/login");
      }
    });
  };

  const items = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-white text-[#ff6867] rounded-xl p-3 flex items-center gap-2"
              : "text-white flex items-center gap-2 p-3"
          }
        >
          <MdDashboard className="text-2xl" /> Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allTasks"
          className={({ isActive }) =>
            isActive
              ? "bg-white text-[#ff6867] rounded-xl p-3 flex items-center gap-2"
              : "text-white flex items-center gap-2 p-3"
          }
        >
          <HiBars3BottomLeft className="text-2xl" /> All Tasks
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/incompleteTask"
          className={({ isActive }) =>
            isActive
              ? "bg-white text-[#ff6867] rounded-xl p-3 flex items-center gap-2"
              : "text-white flex items-center gap-2 p-3"
          }
        >
          <BsFillPatchExclamationFill className="text-2xl" /> Incomplete Tasks
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myTask"
          className={({ isActive }) =>
            isActive
              ? "bg-white text-[#ff6867] rounded-xl p-3 flex items-center gap-2"
              : "text-white flex items-center gap-2 p-3"
          }
        >
          <MdEventAvailable className="text-2xl" /> Completed Tasks
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive
              ? "bg-white text-[#ff6867] rounded-xl p-3 flex items-center gap-2"
              : "text-white flex items-center gap-2 p-3"
          }
        >
          <MdSettings className="text-2xl" />
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/help"
          className={({ isActive }) =>
            isActive
              ? "bg-white text-[#ff6867] rounded-xl p-3 flex items-center gap-2"
              : "text-white flex items-center gap-2 p-3"
          }
        >
          <FaHandsHelping className="text-2xl" /> Help
        </NavLink>
      </li>
      <li>
        <button
          onClick={handleLogout}
          className="text-white flex items-center gap-2 p-3 w-full text-left"
        >
          <MdLogout className="text-2xl" /> Logout
        </button>
      </li>
    </>
  );

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Mobile Top Bar */}
      <div className="md:hidden flex justify-between items-center bg-[#ff6767] px-4 py-3">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-white text-3xl"
        >
          <HiBars3BottomLeft />
        </button>
        <h2 className="text-white text-lg font-semibold">Task Manager</h2>
      </div>

      {/* Sidebar */}
      <div
        className={`bg-[#ff6767] w-full md:w-1/5 p-4 transition-all duration-300 ease-in-out z-10 ${
          sidebarOpen ? "block" : "hidden"
        } md:block`}
      >
        {user && (
          <div className="flex flex-col items-center mb-6">
            <div className="relative w-[100px] h-[100px] mb-2">
              <img
                src={profilePicture}
                alt="Profile"
                className="rounded-full w-full h-full object-cover border-4 border-white"
              />
              <Link
                to="/changePhoto"
                className="absolute bottom-0 right-0 bg-white text-[#ff6767] p-1 rounded-full"
                title="Edit"
              >
                <FaEdit />
              </Link>
            </div>
            <div className="text-center text-white">
              <div className="flex justify-center items-center gap-2">
                <h2 className="text-xl font-semibold">{fullName}</h2>
                <Link to="/changeName" title="Edit Name">
                  <FaEdit className="text-white" />
                </Link>
              </div>
              <div className="flex justify-center items-center gap-2 text-sm">
                <p>{email}</p>
                <Link to="/changeEmail" title="Edit Email">
                  <FaEdit className="text-white" />
                </Link>
              </div>
            </div>
          </div>
        )}
        <ul className="space-y-2">{items}</ul>
      </div>

      {/* Main Content */}
      <div className="w-full p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
