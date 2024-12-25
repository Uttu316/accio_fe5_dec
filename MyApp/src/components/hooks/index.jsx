import { useEffect, useState } from "react";
import TaskList from "./taskList";

const Hooks = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const onInput = (e) => {
    setInput(e.target.value);
  };

  const onAdd = () => {
    if (input.length > 5) {
      const curr = {
        task: input,
        id: parseInt(Math.random() * 100),
      };
      setList((prev) => [curr, ...prev]);
      setInput("");
    }
  };

  const onDel = (id) => {
    const remainings = list.filter((i) => i.id !== id);

    setList(remainings);
  };

  useEffect(() => {
    console.log("Parent List Updated");
  }, [list.length]);

  console.log("Parent Render");
  return (
    <div>
      <h1>Hooks</h1>
      <div>
        <input
          name="task"
          value={input}
          onChange={onInput}
          placeholder="Enter Task"
        />
        <button disabled={input.length <= 5} onClick={onAdd}>
          Add Task
        </button>
      </div>

      {list.length > 0 && <TaskList list={list} onDel={onDel} />}
    </div>
  );
};

export default Hooks;
