import React from "react";
import useCounter from "./useCounter";

const ForwardCounter = () => {
  const counter = useCounter();

  return <div>{counter}</div>;
};

export default ForwardCounter;
