import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);

  const result = useMemo(() => {
    return count * 2;
  }, [count]);

  const onIncrease = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div>
        <span>Count:{count}</span>
        <button onClick={onIncrease}>+</button>
      </div>
      <h2>Expensive Calculation</h2>
      {result}
    </div>
  );
};

export default UseMemo;
