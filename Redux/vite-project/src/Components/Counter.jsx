import classes from "./Counter.module.scss";
import { useSelector } from "react-redux";

const Counter = () => {
  const toggleCounterHandler = () => {};

  const counter = useSelector((state) => state.counter);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
