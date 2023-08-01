import React from "react";
import { Link } from "react-router-dom";

const Carts = () => {
  return (
    <div>
      <h1>Welcome to cart page</h1>
      <ul>
        <li>
          <Link to="/carts/p1">product 1</Link>
        </li>
        <li>
          <Link to="/carts/p2">product 2</Link>
        </li>
        <li>
          <Link to="/carts/p3">product 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Carts;
