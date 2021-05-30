import { useEffect, useState } from "react";
import "./styles.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [spanColor, setSpanColor] = useState("neutral");

  useEffect(() => {
    toggleSpanColor();
  }, [count]);

  function toggleSpanColor() {
    if (count > 0) {
      return setSpanColor("positive");
    }

    if (count < 0) {
      return setSpanColor("negative");
    }

    return setSpanColor("neutral");
  }

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <>
      <span className={`span ${spanColor}`}>{count}</span>

      <div className="buttons">
        <button className="increment" onClick={increment}>increment</button>
        <button className="decrement" onClick={decrement}>decrement</button>
      </div>
    </>
  );
}