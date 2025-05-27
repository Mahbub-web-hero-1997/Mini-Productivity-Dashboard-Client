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
        path: "/myTask/:id",
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
]);

export default router;
