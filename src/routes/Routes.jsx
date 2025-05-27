import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Login from "../components/login/Login";
import PrivateRoute from "../components/PrivateRoute";
import Register from "../components/register/Register";
import Dashboard from "../components/dashboard/Dashboard";
import AddTask from "../components/dashboard/AddTask";
import CompletedTasks from "../components/completedTask/CompletedTasks";
import IncompleteTask from "../components/incompleteTask/IncompleteTasks";
import AllTasks from "../components/allTasks/AllTasks";
import UpdateTask from "../components/updateTask/UpdateTask";
import ComingSoon from "../components/commingSoon/CommingSoon";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Root />{" "}
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/addTask",
        element: <AddTask />,
      },
      {
        path: "/myTask",
        element: <CompletedTasks />,
      },
      {
        path: "/myTask",
        element: <CompletedTasks />,
      },
      {
        path: "/incompleteTask",
        element: <IncompleteTask />,
      },
      {
        path: "/allTasks",
        element: <AllTasks />,
      },
      {
        path: "/update/:id",
        element: <UpdateTask />,
        loader: ({ params }) =>
          fetch(
            `https://simple-task-server-eight.vercel.app/api/v1/task/single/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <ComingSoon />,
  },
]);

export default router;
