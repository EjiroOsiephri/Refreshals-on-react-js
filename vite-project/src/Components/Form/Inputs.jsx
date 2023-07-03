import React, { useState } from "react";
import Buttons from "./Buttons";

const Inputs = () => {
  const [userName, setUsername] = useState("");
  const [userAge, setUserAge] = useState("");

  const userNameInputChange = (event) => {
    setUsername(event.target.value);
  };

  const userAgeInputChange = (event) => {
    setUserAge(event.target.value);
  };

  return (
    <React.Fragment>
      <form className="input-container">
        <input
          type="text"
          onChange={userNameInputChange}
          placeholder="Enter Username"
          value={userName}
        />
        <input
          type="number"
          value={userAge}
          onChange={userAgeInputChange}
          placeholder="Enter a valid age"
        />
        <Buttons></Buttons>
      </form>
      <div className="inputPageValue">
        <h4>My Username is : {userName}</h4>
        <h4>I'm {userAge} Years old</h4>
      </div>
    </React.Fragment>
  );
};

export default Inputs;
