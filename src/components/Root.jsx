import React, { useContext } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
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
import Header from "./header/Header";

const Root = () => {
  const useAxios = UseAxios();
  const { user, setUser } = useContext(AuthContext);
  const { fullName, email, profilePicture } = user;
  console.log(fullName, email, profilePicture);
  const navigate = useNavigate();
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
      <li className="text-md font-semibold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#ff6867] bg-white w-[95%] px- block rounded-xl p-3 flex items-center gap-2"
              : "text-white flex items-center gap-2"
          }
        >
          <MdDashboard className="text-4xl" />
          Dashboard
        </NavLink>
      </li>
      <li className="text-md font-semibold mt-5">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#ff6867] bg-white w-[95%] px- block rounded-xl p-3 flex items-center gap-2"
              : "text-white flex items-center gap-2"
          }
          to="/allTasks"
        >
          <HiBars3BottomLeft className="text-4xl" />
          All-Tasks
        </NavLink>
      </li>
      <li className="text-md font-semibold mt-5">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#ff6867] bg-white w-[95%] px- block rounded-xl p-3 flex items-center gap-2"
              : "text-white flex items-center gap-2"
          }
          to="/incompleteTask"
        >
          <BsFillPatchExclamationFill className="text-4xl" />
          Incomplete-Task
        </NavLink>
      </li>
      <li className="text-md font-semibold mt-5">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#ff6867] bg-white w-[95%] px- block rounded-xl p-3 flex items-center gap-2"
              : "text-white flex items-center gap-2"
          }
          to="/myTask"
        >
          <MdEventAvailable className="text-4xl" />
          Completed-Task
        </NavLink>
      </li>

      <li className="text-md font-semibold mt-5">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#ff6867] bg-white w-[95%] px- block rounded-xl p-3 flex items-center gap-2"
              : "text-white flex items-center gap-2"
          }
          to="/settings"
        >
          <MdSettings className="text-4xl" />
          Settings
        </NavLink>
      </li>
      <li className="text-md font-semibold mt-5">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#ff6867] bg-white w-[95%] px- block rounded-xl p-3 flex items-center gap-2"
              : "text-white flex items-center gap-2"
          }
          to="/help"
        >
          <FaHandsHelping className="text-4xl" />
          Help
        </NavLink>
      </li>
      <li className="text-md font-semibold mt-5">
        <MdLogout
          onClick={() => handleLogout()}
          className="text-4xl cursor-pointer"
        />
      </li>
    </>
  );

  return (
    <>
      {/* <Header /> */}
      <div className="flex p-1 mt-15 ">
        <div className="w-full md:w-1/5 border bg-[#ff6767] p-4 h-[calc(100vh-130px)] relative">
          <div className="relative w-[120px] h-[120px] top-[-75px] mx-auto">
            <img
              className="rounded-full w-full h-full object-cover border-4 border-[#ff6767]"
              src={profilePicture}
              alt="Profile"
            />
            <button
              className="absolute bottom-0 right-0  p-1 rounded-full shadow-md cursor-pointer bg-[#ff6767] text-white transition border-2 border-[#ff6767]"
              title="Edit"
            >
              <FaEdit />
            </button>
          </div>

          <div className="flex items-center justify-center gap-1 -mt-18">
            <h2 className="text-2xl font-semibold text-white text-center">
              {fullName}
            </h2>
            <button
              className="text-white cursor-pointer transition"
              title="Edit Name"
            >
              <FaEdit />
            </button>
          </div>
          <div className="flex items-center justify-center gap-2 mb-5">
            <p className="text-xl text-white text-center">{email}</p>
            <button
              className="text-white cursor-pointer transition"
              title="Edit Email"
            >
              <FaEdit />
            </button>
          </div>
          <ul className="text-white ">{items}</ul>
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Root;
