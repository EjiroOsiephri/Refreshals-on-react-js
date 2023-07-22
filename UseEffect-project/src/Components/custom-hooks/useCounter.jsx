import { useState, useEffect } from "react";

const useCounter = (forward = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (forward) {
        setCounter((prevCount) => prevCount + 1);
      } else {
        setCounter((prevCount) => prevCount - 1);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [forward]);

  return counter;
};

export default useCounter;
