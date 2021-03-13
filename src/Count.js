import React, { useReducer, useState } from "react";

function init(state) {
  return {
    count: state
  };
}

function countReducer(state, action) {
  if (action.type === "INCREMENT")
    return { count: state.count + action.payload };

  if (action.type === "DECREMENT") return { count: state.count - 1 };

  if (action.type === "RESET") return init(0);

  throw new Error(action + " is not defind in count reducer.");
}

export default function Count() {
  //1- writ at First Reducer with virtucl value
  const [state, dispatch] = useReducer(countReducer, 0, init);
  return (
    <div>
      count : {state.count}
      <br />
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 2 })}>
        {" "}
        Increment{" "}
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        {" "}
        Decrement{" "}
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}> reset </button>
    </div>
  );
}
