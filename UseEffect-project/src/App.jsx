import Navigation from "./Components/UseEffects/Navigation/Navigation";
import AuthContext from "./Store/Context";
import React, { useState, useCallback } from "react";
import Homepage from "./Components/Home/Homepage";
import DemoOutput from "../Behind-the scenes/DemoOutput";

function App() {
  const [paragraph, showParagraph] = useState(false);

  const showParagraphFunction = useCallback(() => {
    showParagraph((prevValue) => !prevValue);
  }, []);
  console.log("App running");

  function outerFunction() {
    var outerVariable = "i am an outer variable";
    function innerFunction() {
      console.log(outerVariable);
    }
    return innerFunction;
  }
  const closure = outerFunction();
  closure();

  const numbers = [1, 2, 3, 4, 5];
  const array = numbers.map((item) => {
    return item * 2;
  });
  console.log(array);

  return (
    <>
      <div>
        <h1>Hi there!</h1>
        <DemoOutput show={false}></DemoOutput>
        <button onClick={showParagraphFunction}>Show paragraph</button>
      </div>
    </>
  );
}

export default App;
