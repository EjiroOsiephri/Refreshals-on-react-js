import { useState } from "react";
import Ref from "./Components/Ref";

function App() {
  const [name, setName] = useState(0);

  function increment() {
    setName((prevValue) => {
      return prevValue + 1;
    });
  }

  return (
    <>
      <div>{name}</div>
      <button onClick={increment}>Click me</button>
      <Ref></Ref>
    </>
  );
}

export default App;
