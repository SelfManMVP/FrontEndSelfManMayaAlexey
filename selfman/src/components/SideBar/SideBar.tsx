import React from "react";
import "./SideBar.css";
import { ReactComponent as Icons_chevron_left20 } from "../../icons/Icons_chevron-left20.svg";
import { ReactComponent as Icons_layout_dashboard10 } from "../../icons/Icons_layout_dashboard10.svg";
import { ReactComponent as Icons_Factories_Icon24 } from "../../icons/Icons_Factories Icon24.svg";
import { ReactComponent as Icons_order14 } from "../../icons/Icons_order14.svg";
import { ReactComponent as Icons_Orders_Icon22 } from "../../icons/Icons_Orders Icon22.svg";
import { ReactComponent as Icons_Agents_Icon23 } from "../../icons/Icons_Agents Icon23.svg";
import { ReactComponent as Icons_settings02 } from "../../icons/Icons_settings02.svg";
import { ReactComponent as Icons_badge_info01 } from "../../icons/Icons_badge-info01.svg";
import { ReactComponent as Icons_book_user25 } from "../../icons/Icons_book-user25.svg";
import { ReactComponent as Icons_log_out13 } from "../../icons/Icons_log-out13.svg";
import { ReactComponent as Icons_moon05 } from "../../icons/Icons_moon05.svg";
import { ReactComponent as Icons_sun12 } from "../../icons/Icons_sun12.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { changeSideBarMode } from "../../redux/sideBarMode/sideBarModeSlice";
import { changeLightDarkMode } from "../../redux/lightDarkMode/lightDarkModeSlice";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const currentMode = useSelector(
    (state: RootState) => state.lightDarkMode.currentLightDarkMode
  );
  const currentSizeBar = useSelector(
    (state: RootState) => state.sideBarMode.currentSideBarMode
  );
  const dispatch = useDispatch();

  const setSizeBar = () =>
    currentSizeBar
      ? dispatch(changeSideBarMode(false))
      : dispatch(changeSideBarMode(true));

  const darkMode = currentMode ? "" : "dark";
  const sizeMode = currentSizeBar ? "" : "close";

  return (
    <div className={`menu ${darkMode} ${sizeMode}`}>
      <header className="header">
        <div className="logo-name">
          {currentSizeBar ? (
            <>
              <div className="logo"></div>
              <h2 className="name">SelfMan</h2>
            </>
          ) : (
            <>
              <div className="logo"></div>
            </>
          )}
        </div>
        <div className="close-button">
          <Icons_chevron_left20
            onClick={() => {
              setSizeBar();
            }}
          />
        </div>
      </header>
      <div className="menu-bar">
        <ul className="menu-links business-menu">
          <Link to={"/"}>
            <li className="nav-link">
              <a href="#">
                <Icons_layout_dashboard10 className="icon" />
                <h4 className="text nav-text">Dashboard</h4>
              </a>
            </li>
          </Link>
          <Link to={"/partner_base"}>
            <li className="nav-link">
              <a href="#">
                <Icons_Factories_Icon24 className="icon" />
                <h4 className="text nav-text">Factories</h4>
              </a>
            </li>
          </Link>
          <li className="nav-link">
            <a href="#">
              <Icons_order14 className="icon" />
              <h4 className="text nav-text">Business requests</h4>
              <h4 className="green-flag">15</h4>
            </a>
          </li>
          <li className="nav-link">
            <a href="#">
              <Icons_Orders_Icon22 className="icon" />
              <h4 className="text nav-text">Orders</h4>
              <h4 className="green-flag">127</h4>
            </a>
          </li>
          <li className="nav-link">
            <a href="#">
              <Icons_Agents_Icon23 className="icon" />
              <h4 className="text nav-text">Agents</h4>
            </a>
          </li>
        </ul>
        <ul className="menu-links support-menu">
          <li className="nav-link">
            <a href="#">
              <Icons_settings02 className="icon" />
              <h4 className="text nav-text">Settings</h4>
            </a>
          </li>
          <li className="nav-link">
            <a href="#">
              <Icons_badge_info01 className="icon" />
              <h4 className="text nav-text">Help</h4>
            </a>
          </li>
          <li className="nav-link">
            <a href="#">
              <Icons_book_user25 className="icon" />
              <h4 className="text nav-text">Contact us</h4>
              <h4 className="green-flag">1</h4>
            </a>
          </li>
        </ul>
      </div>
      <div className="user-data">
        <div className="user-photo"></div>
        <div className="user-personal-data">
          <h4 className="user-name nav-text">Alexander Mitchell</h4>
          <h6 className="user-position nav-text">SelfMan MVP</h6>
        </div>
      </div>
      <div className="log-out">
        <a href="#">
          <Icons_log_out13 className="icon" />
          <h4 className="text nav-text">Log out</h4>
        </a>
      </div>
      <div className="switcher">
        <Icons_sun12
          onClick={() => {
            dispatch(changeLightDarkMode(true));
          }}
          className="icon sun"
        />
        <Icons_moon05
          onClick={() => {
            dispatch(changeLightDarkMode(false));
          }}
          className="icon moon"
        />
      </div>
    </div>
  );
};

export default Sidebar;
