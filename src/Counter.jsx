import React, { useState } from "react";
import "./styles/Counter.css";
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count : {count}</h1>
      <button
        disabled={count < 1}
        className={`btn decrement-btn ${count < 1 ? "disabled_btn" : ""}`}
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <button className="btn" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}

export default Counter;
