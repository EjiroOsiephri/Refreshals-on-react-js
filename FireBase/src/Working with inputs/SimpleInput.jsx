import { useState, useRef } from "react";
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [nameIsTouched, setEnteredNameIsTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputIsBlurHandler = () => {
    setEnteredNameIsTouched(true);

    if (enteredName.trim() === "") {
      setNameIsValid(false);
      return;
    }
  };

  const formSubmission = (event) => {
    event.preventDefault();
    setEnteredNameIsTouched(true);

    if (enteredName.trim() === "") {
      setNameIsValid(false);
      return;
    }
    setNameIsValid(true);
    console.log(enteredName);
    setEnteredName("");
  };

  const nameIsInvalid = !nameIsValid && nameIsTouched;

  const nameInputClasses = nameIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmission}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={nameInputChangeHandler}
          onBlur={nameInputIsBlurHandler}
          value={enteredName}
          type="text"
          id="name"
        />
        {nameIsInvalid && <p className="error-text">Name cannot be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
