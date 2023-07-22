import React, { useEffect, useState } from "react";

const ForwardCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div>{counter}</div>;
};

export default ForwardCounter;
