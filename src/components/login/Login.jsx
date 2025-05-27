import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../globalState/AuthProvider";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    axios
      .post(
        "https://simple-task-server-eight.vercel.app/api/v1/user/login",
        data,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res) {
          setUser(res.data);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/");
      })
      .catch((error) => {
        console.error("Login Failed:", error.response?.data || error.message);
        alert(error.response?.data?.message || "Login failed");
      });
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Form Section */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:w-1/2 mx-auto flex flex-col gap-6 items-center justify-center px-6 md:px-20 bg-white shadow-xl z-10"
      >
        <h2 className="text-4xl font-extrabold text-[#ff6767] mb-4 text-center">
          Login First
        </h2>
        <p className="text-sm text-gray-500 mb-4 text-center">
          Login to manage your tasks and productivity
        </p>

        <input
          {...register("email", { required: true, maxLength: 50 })}
          className="border border-gray-300 rounded-lg p-3 w-full md:w-3/4 outline-none focus:ring-2 focus:ring-[#ff6767] transition shadow-sm"
          placeholder="example@gmail.com"
          type="email"
        />

        <input
          {...register("password", { required: true })}
          type="password"
          className="border border-gray-300 rounded-lg p-3 w-full md:w-3/4 outline-none focus:ring-2 focus:ring-[#ff6767] transition shadow-sm"
          placeholder="Password"
        />

        <input
          type="submit"
          value="Login"
          className="rounded-lg p-3 w-full md:w-3/4 cursor-pointer bg-[#ff6767] hover:bg-[#ff4d4d] text-white text-lg font-semibold transition-transform transform hover:scale-105"
        />

        <p className="text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-[#ff6767] font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
