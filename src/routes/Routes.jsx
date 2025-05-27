import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Login from "../components/login/Login";
import PrivateRoute from "../components/PrivateRoute";
import Register from "../components/register/Register";
import Dashboard from "../components/dashboard/Dashboard";

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
