import classes from "./Counter.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { CounterActions } from "../Store/Redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const toggle = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch(CounterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(CounterActions.increase(5));
  };

  const decrementHandler = () => {
    dispatch(CounterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(CounterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
