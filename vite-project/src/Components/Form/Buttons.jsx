import React, { useState } from "react";

const Buttons = (props) => {
  const [user, setUser] = useState(false);

  function addUser(e) {
    e.preventDefault();
    setUser((prevValue) => !prevValue);
    props.renderer(user);
  }

  return (
    <React.Fragment>
      <button onClick={addUser}>ADD USER</button>
    </React.Fragment>
  );
};

export default Buttons;
