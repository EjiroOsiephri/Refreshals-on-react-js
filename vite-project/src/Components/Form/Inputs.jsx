import React, { useState } from "react";

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
      </form>
    </React.Fragment>
  );
};

export default Inputs;
