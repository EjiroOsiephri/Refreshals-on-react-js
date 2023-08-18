import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Carts = () => {
  const [searchParams, setUseSearchParams] = useSearchParams({ n: 4 });
  const number = searchParams.get("n");
  return (
    <div>
      <h1>Welcome to cart page</h1>
      <ul>
        <li>
          <Link state="Welcome" to="/carts/p1">
            product 1
          </Link>
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
          return setUseSearchParams({ n: e.target.value });
        }}
      />
    </div>
  );
};

export default Carts;
