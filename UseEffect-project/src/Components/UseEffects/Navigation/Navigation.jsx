import React, { useContext } from "react";
import "../Navigation/navbar.scss";
import AuthContext from "../../../Store/Context";

const Navigation = () => {
  const ctx = useContext(AuthContext);

  function Logout() {
    ctx.isDisabled = true;
  }
  console.log(ctx.disabledBtn);

  return (
    <React.Fragment>
      <div className="navbar">
        <h1>A Typical page</h1>
        <button onClick={Logout}>Signout</button>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
