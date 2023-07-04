import React, { useState } from "react";

const Buttons = ({ renderer }) => {
  const [user, setUser] = useState(false);

  function addUser(e) {
    e.preventDefault();
    setUser((prevValue) => !prevValue);
    renderer(user);
  }

  return (
    <React.Fragment>
      <button onClick={addUser}>ADD USER</button>
    </React.Fragment>
  );
};

export default Buttons;
