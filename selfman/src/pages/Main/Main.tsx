import React, { useState } from "react";
import Sidebar from "../../components/SideBar/SideBar";
import SideRight from "../../components/SideRight/SideRight";
import PartnerBase from "../../components/PartnerBase/PartnerBase";
import { Route, Routes } from "react-router-dom";
import LoginSignUp from "../../components/LoginSignUp/LoginSignUp";

const Main = () => {
  return (
    <div>
      <LoginSignUp/>
      {/* <Sidebar />
      <Routes>
        <Route index element={<SideRight />} />
        <Route path="/" element={<SideRight />} />
        <Route path="/partner_base" element={<PartnerBase />} />
      </Routes> */}
    </div>
  );
};

export default Main;
