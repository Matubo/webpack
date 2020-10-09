import React from "react";
import { useReducer,useState} from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import store from './store.js';
import app from './index3.tsx';

 
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
  const [state2,setState2]=useState(0);
  store.subscribe(()=>{setState2(store.getState())})
  return (
    <div className="test">
      <div>test useReducer sum={state}</div>
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
      <div>test redux sum2={state2}</div>
      <button
        onClick={() => {
          store.dispatch({ type: "del" });
        }}
      >
        --
      </button>
      <button
        onClick={() => {
          store.dispatch({ type: "add" });
        }}
      >
        ++
      </button>
       <Router>
        <Link to="/">*</Link>
        <Link to="/decrement">#</Link>
        <Route exact path="/"></Route>
        <Route exact path="/decrement"></Route>
      </Router> 
    </div>
    
  );
}



export default App;
