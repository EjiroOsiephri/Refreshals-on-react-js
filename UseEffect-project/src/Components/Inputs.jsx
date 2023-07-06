import React, { useRef, useImperativeHandle } from "react";

const Inputs = React.forwardRef((props, refs) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  function setEmailValue() {
    props.refs(emailRef);
  }

  useImperativeHandle(refs, () => {
    return {
      emailVal: setEmailValue,
    };
  });

  return (
    <React.Fragment>
      <div>
        <label htmlFor="email">E-Mail</label>
        <input type="email" placeholder="Enter a valid email" ref={emailRef} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter a valid password"
          ref={passwordRef}
        />
      </div>
    </React.Fragment>
  );
});

export default Inputs;
