import React from "react";
import { useParams } from "react-router";

const CartDetail = () => {
  const params = useParams();
  return (
    <div>
      <h1>Welcome to cartDetail page</h1>
      <h2>{params.productId}</h2>
    </div>
  );
};

export default CartDetail;
