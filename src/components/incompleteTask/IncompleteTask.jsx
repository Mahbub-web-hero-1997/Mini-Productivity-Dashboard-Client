import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import UseAxios from "../../hook/UseAxios";
import Swal from "sweetalert2";
import { MdEditNote } from "react-icons/md";
const IncompleteTask = ({ tsk, index }) => {
  const useAxios = UseAxios();
  const [status, setStatus] = useState(tsk.status);
  // Status Change function
  const handleCompleteTask = async (id) => {
    try {
      useAxios
        .patch(`http://localhost:5000/api/v1/task/status/${id}`, {
          status: "completed",
        })
        .then((res) => {
          if (res.data) {
            window.location.reload();
          }
        });
    } catch (error) {
      console.error("Failed to update task status:", error);
    }
  };
  // Delete Function
  const handleDeleteTask = (id) => {
    try {
      useAxios
        .delete(`http://localhost:5000/api/v1/task/delete/${id}`, {
          status: "completed",
        })
        .then((res) => {
          if (res.data) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Task Deleted",
              showConfirmButton: false,
              timer: 1500,
            });
            window.location.reload();
          }
        });
    } catch (error) {
      console.error("Failed to update task status:", error);
    }
  };
  // Update Function
  const handleTaskUpdate = (id) => {
    console.log(id);
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{tsk.title}</td>
      <td>{tsk.description}</td>
      <td
        className={`capitalize font-semibold ${
          status === "pending" ? "text-orange-500" : "text-green-600"
        }`}
      >
        {status}
      </td>
      <td>
        <Link
          onClick={() => handleTaskUpdate(tsk._id)}
          className="cursor-pointer"
          to={`/update/${tsk._id}`}
        >
          <MdEditNote className="text-3xl text-green-700" />
        </Link>
      </td>
      <td className="flex gap-4 items-center text-md">
        {status === "pending" && (
          <button
            onClick={() => handleCompleteTask(tsk._id)}
            className="text-blue-500 hover:underline cursor-pointer "
          >
            Complete ||
          </button>
        )}
        <button
          onClick={() => handleDeleteTask(tsk._id)}
          className="text-red-600 hover:text-red-800 text-xl cursor-pointer"
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default IncompleteTask;
