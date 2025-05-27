import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import UseAxios from "../../hook/UseAxios";

const completedTask = ({ tsk, index }) => {
  const useAxios = UseAxios();
  const [status, setStatus] = useState(tsk.status);

  const handleCompleteTask = async (id) => {
    try {
      useAxios
        .patch(
          `https://simple-task-server-eight.vercel.app/api/v1/task/status/${id}`,
          {
            status: "completed",
          }
        )
        .then((res) => {
          if (res.data) {
            window.location.reload();
          }
        });
    } catch (error) {
      console.error("Failed to update task status:", error);
    }
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

      <td className="flex gap-4 items-center text-xl">
        {status === "pending" && (
          <button
            onClick={() => handleCompleteTask(tsk._id)}
            className="text-blue-500 hover:underline"
          >
            Complete
          </button>
        )}
      </td>
    </tr>
  );
};

export default completedTask;
