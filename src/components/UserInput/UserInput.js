import React from "react";

const userInput = (props) => {
   return (
      <div>
         <input type="text" onChange={props.changedInput}/>
      </div>
   );
}

export default userInput;