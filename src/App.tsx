import React from "react";
import {} from "react-redux";
import { RootState } from "./redux/store";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

const App = () => {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="text-center mt-40">
      <button
        className="btn border-2 border-green-500 text-xl font-bold p-2"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="btn border-2 border-green-500 text-xl font-bold p-2 ml-2 "
        onClick={() => dispatch(incrementByAmount(10))}
      >
        increment Value
      </button>
      <div>{count}</div>
      <button
        className="btn border-2 border-orange-500 text-xl font-bold p-2"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        className="btn border-2 border-orange-500 text-xl font-bold p-2 ml-2 "
        onClick={() => dispatch(decrementByAmount(10))}
      >
        Decrement Value
      </button>
    </div>
  );
};

export default App;
