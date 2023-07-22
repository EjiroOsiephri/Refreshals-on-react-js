import Navigation from "./Components/UseEffects/Navigation/Navigation";
import AuthContext from "./Store/Context";
import React, { useState, useCallback } from "react";
import Homepage from "./Components/Home/Homepage";
import DemoOutput from "../Behind-the scenes/DemoOutput";
import User from "../Class-base-components/Class";
import BackwardCounter from "./Components/custom-hooks/BackwardCounter";
import ForwardCounter from "./Components/custom-hooks/ForwardCounter";

function App() {
  const [paragraph, showParagraph] = useState(false);

  const showParagraphFunction = useCallback(() => {
    showParagraph((prevValue) => !prevValue);
  }, []);
  console.log("App running");

  // function outerFunction() {
  //   var outerVariable = "i am an outer variable";
  //   function innerFunction() {
  //     console.log(outerVariable);
  //   }
  //   return innerFunction;
  // }
  // const closure = outerFunction();
  // closure();

  // const numbers = [1, 2, 3, 4, 5];
  // const array = numbers.map((item) => {
  //   return item * 2;
  // });
  // console.log(array);

  class Person {
    constructor(name, age) {
      this.age = age;
      this.name = name;
    }
    greet() {
      console.log(`My name is ${this.name} and i am ${this.age} years old`);
    }
  }
  const john = new Person("Ejiro", 18);
  john.greet();

  return (
    <>
      <ForwardCounter></ForwardCounter>
      <BackwardCounter></BackwardCounter>
    </>
  );
}

export default App;
