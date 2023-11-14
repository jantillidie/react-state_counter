import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  function handlePlusClick() {
    setCount(count + 1);
  }

  function handleMinusClick() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={handleMinusClick}
        >
          -
        </button>
        <button
          type="button"
          onClick={handlePlusClick}
        >
          +
        </button>
      </div>
    </div>
  );
}
