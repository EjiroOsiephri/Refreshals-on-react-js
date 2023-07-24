import { useState, useRef } from "react";
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameIsTouched, setEnteredNameIsTouched] = useState(false);

  let formIsValid = false;

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameIsInvalid = !enteredNameIsValid && nameIsTouched;

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputIsBlurHandler = () => {
    setEnteredNameIsTouched(true);
  };

  const formSubmission = (event) => {
    event.preventDefault();

    setEnteredNameIsTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);
    setEnteredName("");
    setEnteredNameIsTouched(false);
  };

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
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
