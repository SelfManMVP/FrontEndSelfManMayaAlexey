import React from "react";
import "./Main.css";
import Sidebar from "../../components/SideBar/SideBar";
import SideRight from "../../components/SideRight/SideRight";
import PartnerBase from "../../components/PartnerBase/PartnerBase";
import { Route, Routes } from "react-router-dom";
import Login from "../../components/LoginSignUp/Login/Login";
import SignUp from "../../components/LoginSignUp/SignUp/SignUp";
import LoginSignUp from "../LoginSignUp/LoginSignUp";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginSignUp />}>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign_up" element={<SignUp />} />
      </Route>
      <Route path="/" element={<Sidebar />}>
        <Route index element={<SideRight />} />
        <Route path="/home" element={<SideRight />} />
        <Route path="/partner_base" element={<PartnerBase />} />
      </Route>
    </Routes>
  );
};

export default Main;
