import React, { useEffect, useRef, useState } from "react";
import "../Home/Homepage.scss";

const Homepage = (props) => {
  //States (controlling components)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [disabledBtn, setDisabledBtn] = useState(false);

  //Refs
  const emailRef = useRef();
  const passwordRef = useRef();

  //Handling ERRORS

  function Navigatepage() {
    setEmail(emailRef.current?.value);
    setPassword(passwordRef.current?.value);
    localStorage.setItem("isLoggedIn", 1);
    props.setDisabled(true);
  }

  useEffect(() => {
    const userInfo = localStorage.getItem("isLoggedIn");

    if (userInfo === "1") {
      props.setDisabled(true);
    }

    setTimeout(() => {
      if (email.includes("@") && password.length > 6) {
        setDisabledBtn(true);
      } else {
        console.log("obus");
      }
    }, 500);
  }, [email, password]);

  return (
    <React.Fragment>
      <div className="home-container">
        <div className="username-div">
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            placeholder="Enter a valid email"
            ref={emailRef}
          />
        </div>
        <div className="password-div">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter a valid password"
            ref={passwordRef}
          />
        </div>
        <div className="btn-start">
          <button onClick={Navigatepage} className="login-btn">
            Login
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
