import React, { useState } from "react";
import Wrapper from "./Helpers/Wrapper";

const Ref = () => {
  const [input, setInputValue] = useState("");

  function HandleChangeValue(event) {
    setInputValue(event.target.value);
  }
  console.log(input);
  return (
    <Wrapper>
      <input
        type="text"
        value={input}
        onChange={HandleChangeValue}
        placeholder="Testing"
      />
      <p>value : {input}</p>
    </Wrapper>
  );
};
export default Ref;
