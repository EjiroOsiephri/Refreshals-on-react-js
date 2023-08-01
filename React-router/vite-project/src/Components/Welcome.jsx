import React, { Fragment } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Route, Routes } from "react-router";

const Welcome = () => {
  const [text] = useTypewriter({
    words: ["Hello", "From", "Typewriter", "Hook!"],
    loop: 3,
    typeSpeed: 150,
  });

  return (
    <Fragment>
      <h1>This is </h1>
      <span>{text}</span>
      <span>
        <Cursor></Cursor>
      </span>
      <Routes>
        <Route
          path="/welcome/*new-user"
          element={<h2>Welcome new user</h2>}
        ></Route>
      </Routes>
    </Fragment>
  );
};

export default Welcome;
