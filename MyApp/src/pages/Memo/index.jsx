import React, { useState } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";

const MemoPage = () => {
  const [tasks, setTasks] = useState([]);

  const onAdd = () => {
    setTasks((prev) => [...prev, "New Todo"]);
  };
  return (
    <div id="main">
      <h1>React.useMemo</h1>
      <h2>My todos</h2>
      <ul>
        {tasks.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>

      <button onClick={onAdd}>Add Todo</button>

      <hr />
      <UseMemo />
      <hr />
      <hr />
      <ReactMemo />
    </div>
  );
};

export default MemoPage;
