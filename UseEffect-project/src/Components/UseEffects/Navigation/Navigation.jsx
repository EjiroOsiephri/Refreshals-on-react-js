import React from "react";
import "../Navigation/navbar.scss";
import Homepage from "../../Home/Homepage";

const Navigation = () => {
  return (
    <React.Fragment>
      <div className="navbar">
        <h1>A Typical page</h1>
      </div>
      <Homepage></Homepage>
    </React.Fragment>
  );
};

export default Navigation;
