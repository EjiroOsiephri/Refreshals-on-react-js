import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Welcome = () => {
  const [text] = useTypewriter({
    words: ["Hello", "From", "Typewriter", "Hook!"],
    loop: 3,
    typeSpeed: 150,
  });
  return (
    <div>
      <h1>This is </h1>
      <span>{text}</span>
      <span>
        <Cursor></Cursor>
      </span>
    </div>
  );
};

export default Welcome;
