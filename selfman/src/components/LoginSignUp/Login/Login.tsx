import React, { useState } from "react";
import "./Login.css";
import { ReactComponent as Icons_eye_off33 } from "../../../icons/Icons_eye-off33.svg";
import { ReactComponent as Icons_eye34 } from "../../../icons/Icons_eye34.svg";
import { Link } from "react-router-dom";

const Login = () => {
  const [userType, setUserType] = useState("agent");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  console.log(userType);

  const handleLoginClick = () => {
    const userLoginData = {
      userType,
      userEmail,
      userPassword,
    };
    console.log(userLoginData);
  };

  const [showPassword, setShowPassword] = useState(false);
  const typeInput = showPassword ? "text" : "password";

  return (
    <div className="login">
      <div className="login-to">
        <h3 className="login-to-title">Log in to SelfMan</h3>
        <div className="login-to-inputs">
          <form className="choice-type-user">
            <label htmlFor="Agent">
              <input
                type="radio"
                id="agent"
                name="userType"
                value="agent"
                checked={userType === "agent" ? true : false}
                onChange={() => setUserType("agent")}
              />
              Agent
            </label>
            <label htmlFor="factory">
              <input
                type="radio"
                id="factory"
                name="userType"
                value="factory"
                checked={userType === "factory" ? true : false}
                onChange={() => setUserType("factory")}
              />
              Factory
            </label>
            <label htmlFor="Customer">
              <input
                type="radio"
                id="customer"
                name="userType"
                value="customer"
                checked={userType === "customer" ? true : false}
                onChange={() => setUserType("customer")}
              />
              Customer
            </label>
          </form>
          <input
            className="login-to-input-email"
            type="text"
            name=""
            id=""
            placeholder="Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <div className="login-to-input-password-div">
            <input
              className="login-to-input-password"
              type={typeInput}
              name=""
              id=""
              placeholder="Password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
            {showPassword ? (
              <Icons_eye_off33
                onClick={() => setShowPassword((prev) => !prev)}
                className="icon-visibility-password"
              />
            ) : (
              <Icons_eye34
                onClick={() => setShowPassword((prev) => !prev)}
                className="icon-visibility-password"
              />
            )}
          </div>
        </div>
        <Link to={'/home'}>
        <button className="login-button" onClick={() => handleLoginClick()}>
          Log in
        </button>
        </Link>
        <a href="">Do you need help? Forgot your login or password?</a>
      </div>
      <hr className="login-signup-line" />
      <div className="login-signup-link">
        <div className="login-to-link-signup-text">
          Don’t have a SelfMan account?
        </div>
        <Link to={"/sign_up"}>
        <button className="login-to-button-signup">Sign up</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
