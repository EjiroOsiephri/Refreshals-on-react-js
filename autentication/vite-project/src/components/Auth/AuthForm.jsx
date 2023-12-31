import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./AuthForm.module.css";
import { useContext } from "react";
import AuthContext from "../../Store/Auth-context";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const ctx = useContext(AuthContext);

  const emailRef = useRef();
  const passwordRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const signUpHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailRef?.current?.value;
    const enteredPassword = passwordRef?.current?.value;
    setIsLoading(true);
    if (isLogin) {
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCio_cSXnszom1TvYtWOM_SvPa_VXyhjgk",
          {
            method: "POST",
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        ctx.login(data.idToken);
        console.log(data);
        navigate("/");
      } catch (error) {
        alert(error.message);
      }
      setIsLoading(false);
    } else {
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCio_cSXnszom1TvYtWOM_SvPa_VXyhjgk",
          {
            method: "POST",
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log(data);
        navigate("/");
      } catch (error) {
        alert(error.message);
      }
      setIsLoading(false);
    }
  };
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={signUpHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" ref={emailRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" ref={passwordRef} required />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Loading.......</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
