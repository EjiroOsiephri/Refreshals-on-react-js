import React, { useEffect, useRef, useState } from "react";
import Inputs from "../Inputs";
import "../Home/Homepage.scss";

const Homepage = (props) => {
  //States (controlling components)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [ref, setRef] = useState(null);

  //Refs

  //Handling ERRORS

  useEffect(() => {
    const userInfo = localStorage.getItem("isLoggedIn");

    if (userInfo === "1") {
      props.setDisabled(true);
    }

    setTimeout(() => {
      if (email.includes("@") && password.length > 6) {
        setDisabledBtn(true);
      } else {
        // console.log("obus");
      }
    }, 500);
  }, [email, password]);

  function collectRef(data) {
    setRef(data);
  }

  function Navigatepage() {
    setEmail(emailVal.current?.value);
    localStorage.setItem("isLoggedIn", 1);
    props.setDisabled(true);
  }
  console.log(email);

  return (
    <React.Fragment>
      <div className="home-container">
        <div className="username-div">
          <Inputs refs={collectRef} />
        </div>
        <div className="password-div">
          <Inputs refs={collectRef} />
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
