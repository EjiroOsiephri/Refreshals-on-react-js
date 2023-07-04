import React, { useState, useRef } from "react";
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

  //Refs, Reference practice in react js
  const [ageRef, setAgeRef] = useState();
  const [nameRef, setNameRef] = useState();

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  function refPractice(e) {
    e.preventDefault();
    setAgeRef(ageInputRef.current?.value);
    setNameRef(nameInputRef.current?.value);
  }
  console.log(ageRef);
  console.log(nameRef);

  return (
    <React.Fragment>
      <form className="form-container">
        <input
          type="text"
          onChange={userNameInputChange}
          placeholder="Enter Username"
          value={userName}
          ref={nameInputRef}
        />
        <input
          type="number"
          value={userAge}
          onChange={userAgeInputChange}
          placeholder="Enter a valid age"
          ref={ageInputRef}
        />
        <button onClick={refPractice}>Refs</button>
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
