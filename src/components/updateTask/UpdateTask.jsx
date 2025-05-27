import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../globalState/AuthProvider";
import UseAxios from "../../hook/UseAxios";
const UpdateTask = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const useAxios = UseAxios();
  const { data } = useLoaderData();
  console.log(data._id);

  const onSubmit = (formData) => {
    useAxios
      .patch(`task/update/${data._id}`, formData)
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
          navigate("/");
          setInterval(() => {
            window.location.reload();
          }, 1500);
        }
      })
      .catch((error) => {
        console.error("Login Failed:", error.response?.data || error.message);
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "Something went wrong while updating task",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div className=" w-full mx-auto h-screen">
      {/* Left Form Section */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:w-1/2 mx-auto flex flex-col gap-6 items-center justify-center px-6 md:px-20 bg-white"
      >
        <h2 className="text-3xl font-bold  mb-4">
          Update <span className="text-[#ff6767]">{data.title}</span>
        </h2>

        <input
          {...register("title", { required: true, maxLength: 50 })}
          className="border border-[#ff6767] rounded-md p-3 w-full md:w-3/4 outline-none focus:ring-2 focus:ring-[#ff6767] transition"
          placeholder={data.title || ""}
        />

        <textarea
          {...register("description", { required: true })}
          type="text"
          className="border border-[#ff6767] rounded-md p-3 w-full md:w-3/4 outline-none focus:ring-2 focus:ring-[#ff6767] transition"
          placeholder={data.description || ""}
        />

        <input
          type="submit"
          value="Update"
          className="rounded-md p-3 w-full md:w-3/4 cursor-pointer bg-[#ff6767] hover:bg-[#ff4d4d] text-white text-lg font-semibold transition-transform transform hover:scale-105"
        />
      </form>
    </div>
  );
};

export default UpdateTask;
