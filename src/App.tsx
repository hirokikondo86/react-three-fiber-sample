import React, { useState, VFC } from "react";
import { Child } from "./components/Child";

export const App: VFC = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>React Playground</h1>
      <p>親カウント：{count}</p>
      <Child count={count} />
      <button onClick={handleClick}>カウント</button>
    </div>
  );
};
