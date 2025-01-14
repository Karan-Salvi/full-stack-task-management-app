import React from "react";
import { Outlet } from "react-router-dom";
import "./AuthCustom.css";

const AuthLayout = () => {
  return (
    <div className="w-full auth-height flex flex-col justify-center items-center">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
