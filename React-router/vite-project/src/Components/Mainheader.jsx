import React from "react";
import { NavLink, useMatch } from "react-router-dom";
import Classes from "../sass/Mainheader.module.scss";

const Mainheader = () => {
  const isCartActive = useMatch("/carts");
  const isWelcomeActive = useMatch("/welcome");

  return (
    <nav className={Classes.header}>
      <ul>
        <li>
          <NavLink
            className={isWelcomeActive ? Classes.active : ""}
            to="/welcome"
          >
            Welcome
          </NavLink>
        </li>
        <li>
          <NavLink className={isCartActive ? Classes.active : ""} to="/carts">
            Carts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Mainheader;
