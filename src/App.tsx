import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { decrement, increment } from "./redux/features/counter/counterSlice";

const App = () => {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="text-center mt-40">
      <button
        className="btn border-2 border-green-500 text-xl font-bold p-2"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <div>{count}</div>
      <button
        className="btn border-2 border-orange-500 text-xl font-bold p-2"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
};

export default App;
