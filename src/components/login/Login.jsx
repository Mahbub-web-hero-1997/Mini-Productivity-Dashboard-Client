import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/api/v1/user/login", data, {
        withCredentials: true,
      })
      .then((res) => {
        if (res) {
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
    <div className="flex h-screen">
      {/* Left Form Section */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:w-1/2 flex flex-col gap-6 items-center justify-center px-6 md:px-20 bg-white"
      >
        <h2 className="text-3xl font-bold text-[#ff6767] mb-4">
          Login First to continue
        </h2>

        <input
          {...register("email", { required: true, maxLength: 50 })}
          className="border border-[#ff6767] rounded-md p-3 w-full md:w-3/4 outline-none focus:ring-2 focus:ring-[#ff6767] transition"
          placeholder="example@gmail.com"
        />

        <input
          {...register("password", { required: true })}
          type="password"
          className="border border-[#ff6767] rounded-md p-3 w-full md:w-3/4 outline-none focus:ring-2 focus:ring-[#ff6767] transition"
          placeholder="Password"
        />

        <input
          type="submit"
          value="Login"
          className="rounded-md p-3 w-full md:w-3/4 cursor-pointer bg-[#ff6767] hover:bg-[#ff4d4d] text-white text-lg font-semibold transition-transform transform hover:scale-105"
        />

        <p className="text-sm text-gray-500">
          Don't have an account?{" "}
          <a href="#" className="text-[#ff6767] font-medium">
            Sign up
          </a>
        </p>
      </form>

      {/* Right Side Decoration */}
      <div className="hidden md:block w-1/2 h-full rounded-tl-full rounded-bl-full bg-[#ff6767] flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold px-10 text-center leading-snug">
          Your Productivity Starts <br /> With a Great Login!
        </h1>
      </div>
    </div>
  );
};

export default Login;
