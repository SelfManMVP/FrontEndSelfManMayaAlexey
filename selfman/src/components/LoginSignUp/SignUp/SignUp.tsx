import React, { useEffect, useState } from "react";
import "./SignUp.css";
import { ReactComponent as Icons_eye_off33 } from "../../../icons/Icons_eye-off33.svg";
import { ReactComponent as Icons_eye34 } from "../../../icons/Icons_eye34.svg";
import { Link, useNavigate } from "react-router-dom";
import { setCreateUserData } from "../../../redux/createUser/createUserDataSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { fetchCreateUserDataAnswer } from "../../../redux/createUser/createUserDataAnswerSlice";

const SignUp = () => {
  const createUserData = useAppSelector(
    (state) => state.createUserData
  );
  const createUserDataAnswer = useAppSelector(
    (state) => state.createUserDataAnswer
  );

  const dispatch = useAppDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const typeInput = showPassword ? "text" : "password";

  const [showPasswordConf, setShowPasswordConf] = useState(false);
  const typeInputConf = showPasswordConf ? "text" : "password";

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordConfirm, setUserPasswordConfirm] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if(createUserData.email) {
    dispatch(fetchCreateUserDataAnswer(createUserData));
    }
}, [createUserData]);

  return (
    <div className="sign-up">
      <h3 className="sign-up-title">Sign up</h3>
      <div className="sign-up-form">
        <div className="sign-up-form-inputs">
          <input
            type="email"
            placeholder="Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        <div className="sign-up-form-inputs">
          <input
            type={typeInput}
            placeholder="Password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          {showPassword ? (
            <Icons_eye_off33 onClick={() => setShowPassword((prev) => !prev)} />
          ) : (
            <Icons_eye34 onClick={() => setShowPassword((prev) => !prev)} />
          )}
        </div>
        <div className="sign-up-form-inputs">
          <input
            type={typeInputConf}
            placeholder="Confirmation password"
            value={userPasswordConfirm}
            onChange={(e) => setUserPasswordConfirm(e.target.value)}
          />
          {showPasswordConf ? (
            <Icons_eye_off33
              onClick={() => setShowPasswordConf((prev) => !prev)}
            />
          ) : (
            <Icons_eye34 onClick={() => setShowPasswordConf((prev) => !prev)} />
          )}
        </div>
        <button className="sign-up-button" onClick={() => {
          dispatch(setCreateUserData({ email: userEmail, password: userPassword }));
          }}>
          Agree & Join
        </button>
        <h6>
          By clicking on the button you agree to the processing of personal data
          and privacy policy
        </h6>
      </div>
      <hr />
      <div className="sign-up-to-login">
        <h5>Already have a SelfMan account?</h5>
        <Link to={"/login"}>
          <button>Log in</button>
        </Link>
      </div>
      <h2>{`${createUserDataAnswer.answer.id}`}</h2>
      <h2>{`${createUserDataAnswer.answer.confirmed}`}</h2>
      <h2>{`${createUserDataAnswer.answer.roles[0].name}`}</h2>
    </div>
  );
};

export default SignUp;
