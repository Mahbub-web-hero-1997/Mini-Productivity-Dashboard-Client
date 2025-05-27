import React from "react";

const AllTask = ({ tsk, index }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{tsk.title}</td>
      <td>{tsk.description}</td>
      <td
        className={`capitalize font-semibold ${
          tsk.status === "pending" ? "text-orange-500" : "text-green-600"
        }`}
      >
        {tsk.status}
      </td>
    </tr>
  );
};

export default AllTask;
