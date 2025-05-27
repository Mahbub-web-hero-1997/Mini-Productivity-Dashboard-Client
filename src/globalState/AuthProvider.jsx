import React, { createContext, useEffect, useState } from "react";
import UseAxios from "../hook/UseAxios";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const axiosPublic = UseAxios();
  //   console.log(user);
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const userRes = await axiosPublic.get("/user/currentUser");

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
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
