import React from "react";
import "./SideRight.css";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideRight = () => {
  const currentMode = useSelector(
    (state: RootState) => state.lightDarkMode.currentLightDarkMode
  );
  const currentSizeBar = useSelector(
    (state: RootState) => state.sideBarMode.currentSideBarMode
  );
  const darkMode = currentMode ? "" : "dark";
  const sizeMode = currentSizeBar ? "" : "close";
  return (
    <div className={`menu-left-search ${darkMode} ${sizeMode}`}>
      <div className="top-side"></div>
      <div className="left-side"></div>
      <Link to={"/partner_base"}>
        <div className="right-side">
          <p className="right-side-text">
            Explore Our Partner Base: Unlock opportunities with verified
            factories and advanced filters.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default SideRight;
