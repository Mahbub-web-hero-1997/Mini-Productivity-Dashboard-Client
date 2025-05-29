import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import UseAxios from "../../hook/UseAxios";
import Swal from "sweetalert2";

const AddTask = () => {
  const { register, handleSubmit } = useForm();
  const useAxios = UseAxios();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    useAxios.post("task/post", data).then((res) => {
      if (res.data) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Task Added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    });
  };

  return (
    <div className="w-full flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:w-3/4 flex flex-col gap-6 items-center justify-center px-6 md:px-20 bg-white"
      >
        <h2 className="text-3xl font-bold text-[#ff6767] mb-4">Add A Task</h2>

        <input
          {...register("title", { required: true, maxLength: 50 })}
          className="border border-[#ff6767] rounded-md p-3 w-full md:w-3/4 outline-none focus:ring-2 focus:ring-[#ff6767] transition"
          placeholder="Title"
        />
        <textarea
          {...register("description", { required: true })}
          type="description"
          className="border border-[#ff6767] rounded-md p-3 w-full md:w-3/4 outline-none focus:ring-2 focus:ring-[#ff6767] transition"
          placeholder="Description"
        />

        {/* ✅ Category select added here */}
        <select
          {...register("category", { required: true })}
          className="border border-[#ff6767] rounded-md p-3 w-full md:w-3/4 outline-none focus:ring-2 focus:ring-[#ff6767] transition"
        >
          <option value="">-- Select a category --</option>
          <option value="work">Daily-Task</option>
          <option value="personal">Weekly-Task</option>
          <option value="learning">Monthly-Task</option>
        </select>

        <input
          type="submit"
          value="Add"
          className="rounded-md p-3 w-full md:w-3/4 cursor-pointer bg-[#ff6767] hover:bg-[#ff4d4d] text-white text-lg font-semibold transition-transform transform hover:scale-105"
        />
      </form>
    </div>
  );
};

export default AddTask;
