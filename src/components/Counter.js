import { counterActions } from "../store/counter";

import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const deccrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    // Pass payload to the toggleCounter => {type: 'SOME_UNIQUE_IDENTIFIER', payload: 5}
    dispatch(counterActions.increase(5));
  };

  const decreaseHandler = () => {
    dispatch(counterActions.decrease(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}> Counter: {counter} </div>}
      <div>
        <button type="button" onClick={incrementHandler}>
          Increment
        </button>
        <button type="button" onClick={increaseHandler}>
          Increse by 5
        </button>
        <button type="button" onClick={deccrementHandler}>
          Decrement
        </button>
        <button type="button" onClick={decreaseHandler}>
          Decrease by 5
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
