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
import { FaHandsHelping } from "react-icons/fa";
import UseAxios from "../hook/UseAxios";
import Swal from "sweetalert2";
import { AuthContext } from "../globalState/AuthProvider";

const Root = () => {
  const useAxios = UseAxios();
  const { setUser } = useContext(AuthContext);
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
          to="/vitalTask"
        >
          <BsFillPatchExclamationFill className="text-4xl" />
          Vital Task
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
          My Task
        </NavLink>
      </li>
      <li className="text-md font-semibold mt-5">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#ff6867] bg-white w-[95%] px- block rounded-xl p-3 flex items-center gap-2"
              : "text-white flex items-center gap-2"
          }
          to="/category"
        >
          <HiBars3BottomLeft className="text-4xl" />
          Task Categories
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
      <div className="flex p-1 ">
        <div className="w-full md:w-1/5 border bg-[#ff6767] p-4 h-screen">
          <img src="#" alt="" />
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
