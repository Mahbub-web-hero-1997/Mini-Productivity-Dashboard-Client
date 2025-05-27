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
      .post(
        "https://simple-task-server-eight.vercel.app/api/v1/user/register",
        data,
        { withCredentials: true }
      )
      .then((res) => {
        if (res) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "User Register Successful",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: error.response?.data?.message || "User Registration Failed",
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#fff] to-[#ffe5e5] px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-2xl p-10 rounded-xl w-full max-w-md flex flex-col gap-6"
      >
        <h2 className="text-3xl font-extrabold text-[#ff6767] text-center">
          Create Your Account
        </h2>

        <input
          {...register("fullName", { required: true })}
          placeholder="Full Name"
          className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#ff6767] transition"
        />

        <input
          {...register("email", { required: true, maxLength: 50 })}
          placeholder="Email Address"
          type="email"
          className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#ff6767] transition"
        />

        <input
          {...register("password", { required: true, minLength: 6 })}
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#ff6767] transition"
        />

        <input
          {...register("confirmPassword", {
            required: true,
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
          type="password"
          placeholder="Confirm Password"
          className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#ff6767] transition"
        />

        <input
          type="submit"
          value="Register"
          className="bg-[#ff6767] hover:bg-[#ff4d4d] text-white rounded-lg py-3 font-semibold cursor-pointer transition-transform hover:scale-105"
        />

        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#ff6767] font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
