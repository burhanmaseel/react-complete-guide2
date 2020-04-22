import React from "react";
import "./UserOutput.css";

const userOutput = (props) => {
   return (
      <p className="User-Output">
         {props.inputValue}
      </p>
   );
}

export default userOutput;