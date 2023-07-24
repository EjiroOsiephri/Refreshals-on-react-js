import React, { useRef } from "react";

const Inputs = (props) => {
  const inputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const tasks = { task: inputRef?.current.value };
    props.postTasks(tasks);
  };

  let content;

  if (props.loading) {
    content = <h2>Loading......</h2>;
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Enter your task" ref={inputRef} />
        <button>Add Task</button>

        {props.loading ? (
          <h2>loading......</h2>
        ) : (
          props.tasksArray?.map((item) => {
            return (
              <div key={item.id}>
                <h3>{item.itemTask}</h3>
              </div>
            );
          })
        )}
      </form>
    </>
  );
};

export default Inputs;
