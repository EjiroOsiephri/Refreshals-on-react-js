import { useState, useReducer } from "react";

const SET_FIRST_NAME = "SET_FIRST_NAME";
const SET_FIRST_NAME_TOUCHED = "SET_FIRST_NAME_TOUCHED";
const SET_LAST_NAME = "SET_LAST_NAME";
const SET_LAST_NAME_TOUCHED = "SET_LAST_NAME_TOUCHED";
const SET_EMAIL = "SET_EMAIL";
const SET_EMAIL_TOUCHED = "SET_EMAIL_TOUCHED";
const RESET_FORM = "RESET_FORM";

const formReducer = (state, action) => {
  if (action.type === SET_FIRST_NAME) {
    return {
      ...state,
      enteredFirstName: action.value,
    };
  }

  if (action.type === SET_FIRST_NAME_TOUCHED) {
    return {
      ...state,
      enteredFirstNameIsTouched: true,
    };
  }

  if (action.type === SET_LAST_NAME) {
    return {
      ...state,
      enteredLastName: action.value,
    };
  }

  if (action.type === SET_LAST_NAME_TOUCHED) {
    return {
      ...state,
      enteredLastNameIsTouched: true,
    };
  }

  if (action.type === SET_EMAIL) {
    return {
      ...state,
      enteredEmail: action.value,
    };
  }

  if (action.type === SET_EMAIL_TOUCHED) {
    return {
      ...state,
      enteredEmailIsTouched: true,
    };
  }

  if (action.type === RESET_FORM) {
    return {
      enteredFirstName: "",
      enteredFirstNameIsTouched: false,
      enteredLastName: "",
      enteredLastNameIsTouched: false,
      enteredEmail: "",
      enteredEmailIsTouched: false,
    };
  }

  return state;
};

const BasicForm = (props) => {
  const [currState, dispatchFn] = useReducer(formReducer, {
    enteredFirstName: "",
    enteredFirstNameIsTouched: false,
    enteredLastName: "",
    enteredLastNameIsTouched: false,
    enteredEmail: "",
    enteredEmailIsTouched: false,
  });

  const {
    enteredFirstName,
    enteredFirstNameIsTouched,
    enteredLastName,
    enteredLastNameIsTouched,
    enteredEmail,
    enteredEmailIsTouched,
  } = currState;

  let formIsValid = false;

  const enteredFirstNameisValid = enteredFirstName.trim() !== "";

  const firstNameIsInvalid =
    !enteredFirstNameisValid && enteredFirstNameIsTouched;

  const enteredLastNameisValid = enteredLastName.trim() !== "";

  const lastNameIsInvalid = !enteredLastNameisValid && enteredLastNameIsTouched;

  const enteredEmailisValid =
    enteredEmail.trim() !== "" && enteredEmail.includes("@");

  const emailIsInvalid = !enteredEmailisValid && enteredEmailIsTouched;

  if (
    enteredFirstNameisValid &&
    enteredLastNameisValid &&
    enteredEmailisValid
  ) {
    formIsValid = true;
  }

  const enteredFirstNameHandler = (e) => {
    dispatchFn({ type: SET_FIRST_NAME, value: e.target.value });
  };

  const enteredFirstNameIsBlur = () => {
    dispatchFn({ type: SET_FIRST_NAME_TOUCHED });
  };

  const enteredLastNameHandler = (e) => {
    dispatchFn({ type: SET_LAST_NAME, value: e.target.value });
  };

  const enteredLastNameIsBlur = () => {
    dispatchFn({ type: SET_LAST_NAME_TOUCHED });
  };

  const enteredEmailHandler = (e) => {
    dispatchFn({ type: SET_EMAIL, value: e.target.value });
  };

  const enteredEmailIsBlur = () => {
    dispatchFn({ type: SET_EMAIL_TOUCHED });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatchFn({ type: SET_FIRST_NAME_TOUCHED });
    dispatchFn({ type: SET_LAST_NAME_TOUCHED });
    dispatchFn({ type: SET_EMAIL_TOUCHED });

    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);

    dispatchFn({ type: RESET_FORM });
  };

  const firstNameClass = firstNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  const lastNameClass = lastNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailClass = emailIsInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            value={enteredFirstName}
            onChange={enteredFirstNameHandler}
            onBlur={enteredFirstNameIsBlur}
            id="name"
          />
        </div>
        <div className={lastNameClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            value={enteredLastName}
            onChange={enteredLastNameHandler}
            onBlur={enteredLastNameIsBlur}
            id="name"
          />
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          value={enteredEmail}
          onChange={enteredEmailHandler}
          onBlur={enteredEmailIsBlur}
          id="name"
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
