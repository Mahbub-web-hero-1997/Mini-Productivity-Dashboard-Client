import React, { useContext } from "react";
import { AuthContext } from "../../globalState/AuthProvider";
import MyTask from "./CompletedTask";

const CompletedTasks = () => {
  const { task } = useContext(AuthContext);
  const filteredTask = task.filter((t) => t.status === "completed");

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
            </tr>
          </thead>
          <tbody>
            {filteredTask.map((tsk, index) => (
              <MyTask key={tsk._id} tsk={tsk} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CompletedTasks;
