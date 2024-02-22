import React from "react";
import "./LoginSignUp.css";
import Login from "./Login/Login";
import { ReactComponent as Icons_x31 } from "../../icons/Icons_x31.svg";
import SignUp from "./SignUp/SignUp";
import { Outlet, Route, Routes } from "react-router-dom";

const LoginSignUp = () => {
  return (
    <div className="login-sign-up">
      <header className="header">
        <div className="logo-name">
          <div className="logo"></div>
          <h2 className="name">SelfMan</h2>
        </div>
      </header>
      <div className="login-sign-up-form">
        <Icons_x31 className="login-icon-close" />
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign_up" element={<SignUp />} />
        </Routes>
      </div>
      <div className="copy-right">
        © SelfMan 2024 Designed by Bolshakov Arthur
      </div>
    </div>
  );
};

export default LoginSignUp;
