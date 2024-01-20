import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

const App = () => {
  const { count } = useSelector((state: RootState) => state.counter);
  return (
    <div className="text-center mt-40">
      <button className="btn border-2 border-green-500 text-xl font-bold p-2">
        Increment
      </button>
      <div>{count}</div>
      <button className="btn border-2 border-orange-500 text-xl font-bold p-2">
        Decrement
      </button>
    </div>
  );
};

export default App;
