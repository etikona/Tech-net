import React from "react";

const App = () => {
  return (
    <div className="text-center mt-40">
      <button className="btn border-2 border-green-500 text-xl font-bold p-2">
        Increment
      </button>
      <div>0</div>
      <button className="btn border-2 border-orange-500 text-xl font-bold p-2">
        Decrement
      </button>
    </div>
  );
};

export default App;
