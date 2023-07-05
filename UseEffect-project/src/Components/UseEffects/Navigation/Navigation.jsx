import React, { useState } from "react";
import "../Navigation/navbar.scss";
import Homepage from "../../Home/Homepage";

const Navigation = () => {
  const [disabledBtn, setDisabledBtn] = useState(false);

  function Logout() {
    setDisabledBtn(false);
  }

  return (
    <React.Fragment>
      <div className="navbar">
        <h1>A Typical page</h1>
        {disabledBtn && <button onClick={Logout}>Signout</button>}
      </div>
      <Homepage disabled={disabledBtn} setDisabled={setDisabledBtn}></Homepage>
    </React.Fragment>
  );
};

export default Navigation;
