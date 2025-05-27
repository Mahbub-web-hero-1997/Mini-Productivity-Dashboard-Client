import axios from "axios";
const axiosPublic = axios.create({
  baseURL: "https://simple-task-server-eight.vercel.app/api/v1",
  withCredentials: true,
});
const UseAxios = () => {
  return axiosPublic;
};

export default UseAxios;
