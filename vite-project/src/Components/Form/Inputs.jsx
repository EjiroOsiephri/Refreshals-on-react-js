import React, { useState } from "react";
import Buttons from "./Buttons";
import "../Sass/inputs.scss";

const Inputs = () => {
  const [userName, setUsername] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userData, setUserData] = useState();

  const userNameInputChange = (event) => {
    setUsername(event.target.value);
  };

  const userAgeInputChange = (event) => {
    setUserAge(event.target.value);
  };

  function buttonRenderer(data) {
    setUserData(data);
  }
  console.log(userData);

  return (
    <React.Fragment>
      <form className="form-container">
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
        <Buttons renderer={buttonRenderer}></Buttons>
      </form>
      <div className="inputPageValue">
        <h4>My Username is : {userName}</h4>
        <h4>I'm {userAge} Years old</h4>
      </div>
    </React.Fragment>
  );
};

export default Inputs;
