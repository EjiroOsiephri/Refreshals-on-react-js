import React from "react";
import { Link } from "react-router-dom";

const Mainheader = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/welcome">Welcome</Link>
        </li>
        <li>
          <Link to="/carts">Carts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Mainheader;
