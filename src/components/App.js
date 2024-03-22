import React from "react";
import "./../styles/App.css";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { increaseCount, decreseCount } from "../redux/actions/counterActions";

const App = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state);
  console.log(counter);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increaseCount())}>increment</button>
      <button onClick={() => dispatch(decreseCount())}>decrement</button>
    </div>
  );
};

export default App;
