import React from "react";
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div className="test">
      <div>test {state}</div>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </button>
    </div>
  );
}
export default App;
