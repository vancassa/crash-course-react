import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(10);

  const decrement = () => {
    setCount(count - 1); // The naive way to update count. Check the Quote.jsx component for details.
  };
  const increment = () => {
    setCount(count + 1); // The naive way to update count. Check the Quote.jsx component for details.
  };

  return (
    <div className="counter">
      <button type="button" onClick={decrement}>
        Decrement
      </button>
      <span className="counter__count">Count: {count}</span>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
