import React, { useState } from "react";
import "./СonfirmEmail.css";

const СonfirmEmail = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const isNumberKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.key.charCodeAt(0) >= 48 && e.key.charCodeAt(0) <= 57
      ? setFirstNumber(e.key)
      : setFirstNumber("");
    console.log(firstNumber);
  };

  return (
    <div className="confirm-email">
      <h3 className="confirm-email-title">Confirmation</h3>
      <div className="confirm-email-form">
        <h4>We have sent a confirmation code to your email</h4>
        <div className="inputs">
          <h6>Code</h6>
          <div>
          <input
            disabled={false}
            type="text"
            onKeyDown={(e) => isNumberKey(e)}
          />
          <input type="text" onKeyDown={(e) => isNumberKey(e)} />
          <input type="text" onKeyDown={(e) => isNumberKey(e)} />
          <input type="text" onKeyDown={(e) => isNumberKey(e)} />
          <input type="text" onKeyDown={(e) => isNumberKey(e)} />
          <input type="text" onKeyDown={(e) => isNumberKey(e)} />
          </div>
        </div>
        <h5>Please enter the code: 4:58</h5>
        <button>Confirm</button>
        <div className="">{firstNumber}</div>
        <span>
          If you haven't received the code within this time,
          <a href="">click here</a>
        </span>
      </div>
    </div>
  );
};

export default СonfirmEmail;
// function isNumberKey(evt) {
//   var charCode = (evt.which) ? evt.which : event.keyCode;
//   if (charCode < 49 || charCode > 57 || charCode == 48) // 49 is ASCII code for '1' and 57 is for '9'
//       return false;
//   return true;
// }
