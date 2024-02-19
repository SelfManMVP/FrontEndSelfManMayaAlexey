import React from "react";
import style from "../../css_modules/textStyles.module.css";
import "./PartnerBase.css";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { ReactComponent as Icons_arrow4 } from "../../icons/Icons_arrow4.svg";
import { ReactComponent as Icons_arrow_up_down27 } from "../../icons/Icons_arrow-up-down27.svg";
import { ReactComponent as Icons_chevron_right21 } from "../../icons/Icons_chevron-right21.svg";
import { ReactComponent as Icons_search03 } from "../../icons/Icons_search03.svg";
import Partner from "./Partner/Partner";

const PartnerBase = () => {
  const currentMode = useSelector(
    (state: RootState) => state.lightDarkMode.currentLightDarkMode
  );
  const currentSizeBar = useSelector(
    (state: RootState) => state.sideBarMode.currentSideBarMode
  );
  const darkMode = currentMode ? "" : "dark";
  const sizeMode = currentSizeBar ? "" : "close";
  return (
    <div className={`side-right ${darkMode} ${sizeMode}`}>
      <div className="filter">
        <div className="return">
          <Icons_arrow4 className="" />
        </div>
        <h2 className="partner-base-text">Partner base</h2>
        <div className="all-saved">
          <div className="all">All</div>
          <Icons_arrow_up_down27 className="icon-arrow-right-left" />
          <div className="saved">Saved</div>
        </div>
        <div className="filter-by">
          <h3 className="filter-by-text">Filter by</h3>
          <ul className="filter-by-items">
            <li className="filter-by-item">
              <h4 className="filter-by-item-text">Basic information</h4>
              <Icons_chevron_right21 className="icon-search" />
            </li>
            <li className="filter-by-item">
              <h4 className="filter-by-item-text">Manufacturing & Shipping</h4>
              <Icons_chevron_right21 className="icon-search" />
            </li>
            <li className="filter-by-item">
              <h4 className="filter-by-item-text">Financial Details</h4>
              <Icons_chevron_right21 className="icon-search" />
            </li>
            <li className="filter-by-item">
              <h4 className="filter-by-item-text">Reputation & Quality</h4>
              <Icons_chevron_right21 className="icon-search" />
            </li>
            <li className="filter-by-item">
              <h4 className="filter-by-item-text">Customization</h4>
              <Icons_chevron_right21 className="icon-search" />
            </li>
            <li className="filter-by-item">
              <h4 className="filter-by-item-text">Clear All</h4>
            </li>
          </ul>
        </div>
      </div>
      <div className="partner-base">
        <div className="search">
          <input
            className="search-input"
            type="text"
            placeholder="Search by product, industry or keywords"
          />
          <button className="input-search-button">
            <Icons_search03 className="icon-search-input" />
          </button>
        </div>
        <div className="search-buttons">
          <h3 className="search-buttons-title">Popular:</h3>
          <button className="search-button">Men’s Fashion</button>
          <button className="search-button">Manufacturing</button>
          <button className="search-button">Technology</button>
          <button className="search-button">Energy</button>
          <button className="search-button">Engineering</button>
        </div>
      </div>
      <div className="partner-base-items">
        <div className="sort-by-area">
          <div className="sort-by">
            <h4>Sort by</h4>
            <Icons_chevron_right21 />
          </div>
        </div>
        <Partner />
        <Partner />
        <Partner />
        <div className="factories-per-page-area">
          <h4 className={`factories-per-page-numbers ${style.text40017140darkColor}`}>1 2 3 4 5 6 ... 727</h4>
          <div className="factories-per-page">
            <h4 className={style.text50017140darkColor}>Factories per page</h4>
            <Icons_chevron_right21 />
          </div>
        </div>
      </div>
      <div className="copy-right">© SelfMan 2024 Designed by Bolshakov Arthur</div>
    </div>
  );
};

export default PartnerBase;
