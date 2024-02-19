import React from "react";
import "./Partner.css";
import style from "../../../css_modules/textStyles.module.css";
import { ReactComponent as Icon_star1 } from "../../../icons/Icon_star1.svg";
import { ReactComponent as Icon_star6 } from "../../../icons/Icon_star6.svg";

const Partner = () => {
  return (
    <div className="partner-base-item">
      <div className="partner-base-item-logo-button">
        <div className="partner-base-item-logo"></div>
        <button
          className={`partner-base-item-logo-button-save ${style.text40017140darkColor}`}
        >
          Save
        </button>
      </div>
      <div className="partner-base-item-info">
        <div className="partner-base-item-info-item">
          <h4>Electro-pawer in house</h4>
          <Icon_star6 className="icon-star6" />
        </div>
        <div className="partner-base-item-info-item">
          <Icon_star1 className="icon-star1" />
          <Icon_star1 className="icon-star1" />
          <Icon_star1 className="icon-star1" />
          <Icon_star1 className="icon-star1" />
          <Icon_star1 className="icon-star1" />
          <h5>(625)</h5>
        </div>
        <div className="partner-base-item-info-item">
          <h4>Success rate:</h4>
          <h5>90% & Up</h5>
        </div>
        <div className="partner-base-item-info-item">
          <h4>Availability:</h4>
          <h5>Now</h5>
        </div>
        <div className="partner-base-item-info-item">
          <h4>Location:</h4>
          <h5>USA, New York</h5>
        </div>
        <div className="partner-base-item-info-item">
          <h4>Industry:</h4>
          <h5>Consumer goods</h5>
        </div>
        <div className="partner-base-item-info-item">
          <h4>Keywords:</h4>
        </div>
        <div className="partner-base-item-keywords">
          <div className="partner-base-item-keyword">Home & garden</div>
          <div className="partner-base-item-keyword">Electronics</div>
          <div className="partner-base-item-keyword">Household appliances</div>
          <div className="partner-base-item-keyword">Business & industrial</div>
        </div>
        <button className="partner-base-item-button-connect">Connect</button>
      </div>
    </div>
  );
};

export default Partner;
