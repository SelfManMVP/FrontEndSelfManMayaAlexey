import React from "react";
import "./LoginSignUp.css";
import Login from "./Login/Login";
import { ReactComponent as Icons_x31 } from "../../icons/Icons_x31.svg";
import SignUp from "./SignUp/SignUp";

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
        <Icons_x31 className="login-icon-close"/>
        <Login/>
        {/* <SignUp/> */}
      </div>
      <div className="copy-right">© SelfMan 2024 Designed by Bolshakov Arthur</div>
    </div>
  );
};

export default LoginSignUp;
