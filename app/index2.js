import React from "react";
import { useReducer } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

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
      <div>test sum={state}</div>
      <Router prop={dispatch}>
        <Link to="/">*</Link>
        <Link to="/decrement">#</Link>
        <Route exact path="/" component={Increment} prop={1}></Route>
        <Route exact path="/decrement" component={Decrement} prop={2}></Route>
      </Router>
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

function Increment(a) {
  return <button onClick={() => {}}>*</button>;
}

function Decrement(a) {
  return <button onClick={() => {}}>#</button>;
}

export default App;
