import React from "react";

const Buttons = () => {
  function addUser(e) {
    e.preventDefault();
  }
  return (
    <React.Fragment>
      <button onClick={addUser}>ADD USER</button>
    </React.Fragment>
  );
};

export default Buttons;
