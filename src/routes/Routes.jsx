import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Login from "../components/login/Login";
import PrivateRoute from "../components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Root />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
