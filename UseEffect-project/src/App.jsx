import Navigation from "./Components/UseEffects/Navigation/Navigation";
import AuthContext from "./Store/Context";
import React, { useState } from "react";
import Homepage from "./Components/Home/Homepage";
import DemoOutput from "../Behind-the scenes/DemoOutput";

function App() {
  const [paragraph, showParagraph] = useState(false);

  const showParagraphFunction = () => {
    showParagraph((prevValue) => !prevValue);
  };

  return (
    <>
      <div>
        <h1>Hi there!</h1>
        <DemoOutput show={paragraph}></DemoOutput>
        <button onClick={showParagraphFunction}>Show paragraph</button>
      </div>
    </>
  );
}

export default App;
