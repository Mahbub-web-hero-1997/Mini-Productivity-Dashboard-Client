import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const { register, handleSubmit, watch } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/api/v1/user/register", data, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        if (res) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "User Register Successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/");
      })
      .catch((error) => {
        console.error("Login Failed:", error.response?.data || error.message);
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${error.response?.data?.message}||"User Registration Failed"`,
          showConfirmButton: false,
          timer: 1500,
        });
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
          Register to continue
        </h2>

        {/* Full Name */}
        <input
          {...register("fullName", { required: true })}
          className="border border-[#ff6767] rounded-md p-3 w-full md:w-3/4 outline-none focus:ring-2 focus:ring-[#ff6767] transition"
          placeholder="Full Name"
        />

        {/* Email */}
        <input
          {...register("email", { required: true, maxLength: 50 })}
          className="border border-[#ff6767] rounded-md p-3 w-full md:w-3/4 outline-none focus:ring-2 focus:ring-[#ff6767] transition"
          placeholder="example@gmail.com"
        />

        {/* Password */}
        <input
          {...register("password", { required: true, minLength: 6 })}
          type="password"
          className="border border-[#ff6767] rounded-md p-3 w-full md:w-3/4 outline-none focus:ring-2 focus:ring-[#ff6767] transition"
          placeholder="Password"
        />

        {/* Confirm Password */}
        <input
          {...register("confirmPassword", {
            required: true,
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
          type="password"
          className="border border-[#ff6767] rounded-md p-3 w-full md:w-3/4 outline-none focus:ring-2 focus:ring-[#ff6767] transition"
          placeholder="Confirm Password"
        />

        <input
          type="submit"
          value="Register"
          className="rounded-md p-3 w-full md:w-3/4 cursor-pointer bg-[#ff6767] hover:bg-[#ff4d4d] text-white text-lg font-semibold transition-transform transform hover:scale-105"
        />

        <p className="text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-[#ff6767] font-medium">
            Login
          </Link>
        </p>
      </form>

      {/* Right Side Decoration */}
      <div className="hidden md:block w-1/2 h-full rounded-tl-full rounded-bl-full bg-[#ff6767] flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold px-10 text-center leading-snug">
          Empower Your Productivity <br /> With a Strong Start!
        </h1>
      </div>
    </div>
  );
};

export default Register;
