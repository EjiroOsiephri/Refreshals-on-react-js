import React, { useState } from "react";
import { Link } from "react-router-dom";

const Carts = () => {
  const [number, setNumber] = useState(4);
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
        <li>
          <Link to={`/carts/p${number}`}>product {number}</Link>
        </li>
      </ul>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          return setNumber(e.target.value);
        }}
      />
    </div>
  );
};

export default Carts;
