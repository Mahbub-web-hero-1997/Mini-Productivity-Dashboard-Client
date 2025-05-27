import React, { createContext, useEffect, useState } from "react";
import UseAxios from "../hook/UseAxios";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState([]);
  const useAxios = UseAxios();
  //   console.log(user);
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        // Fetch news
        const taskRes = await useAxios.get("/task/all");
        setTask(taskRes.data?.data|| []);      
        // Fetch User
        const userRes = await useAxios.get("/user/currentUser");
        setUser(userRes.data?.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchInitialData();
  }, []);
  const authInfo = {
    user,
    setUser,
    task,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
