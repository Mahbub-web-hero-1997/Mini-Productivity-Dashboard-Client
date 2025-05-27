import React, { useContext } from "react";
import { AuthContext } from "../../globalState/AuthProvider";
import IncompleteTask from "./IncompleteTask";

const IncompleteTasks = () => {
  const { task } = useContext(AuthContext);
  const filteredTask = task.filter((task) => task.status === "pending");
  // console.log(filteredTask);
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTask.map((tsk, index) => (
              <IncompleteTask key={tsk._id} tsk={tsk} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default IncompleteTasks;
