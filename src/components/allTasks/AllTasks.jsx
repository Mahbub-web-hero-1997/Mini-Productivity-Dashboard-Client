import React, { useContext } from "react";
import { AuthContext } from "../../globalState/AuthProvider";
import AllTask from "./AllTask";

const AllTasks = () => {
  const { task } = useContext(AuthContext);
  return (
    <>
      <div className="overflow-x-auto w-[90%] mx-auto">
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
            {task.map((tsk, index) => (
              <AllTask key={tsk._id} tsk={tsk} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllTasks;
