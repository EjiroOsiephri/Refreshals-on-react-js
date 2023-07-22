import React, { useRef } from "react";

const Inputs = (props) => {
  const inputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const tasks = { task: inputRef?.current.value };
    props.postTasks(tasks);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Enter your task" ref={inputRef} />
        <button>Add Task</button>
      </form>
    </>
  );
};

export default Inputs;
