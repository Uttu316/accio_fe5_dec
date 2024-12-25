import { useCallback, useEffect, useMemo, useState } from "react";
import TaskList from "./taskList";

const Hooks = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [random, setRandom] = useState(0);

  const conditions = useMemo(() => {
    return {
      disable: input.length <= 5,
      showList: list.length > 0,
    };
  }, [input.length, list.length]);

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

  const onDel = useCallback(
    (id) => {
      const remainings = list.filter((i) => i.id !== id);

      setList(remainings);
    },
    [list]
  );

  const generate = () => {
    setRandom(parseInt(Math.random() * 100));
  };

  useEffect(() => {
    console.log("Parent List Updated");
  }, [list.length]);

  console.log("Parent Render");
  return (
    <div>
      <h1>Hooks {random}</h1>
      <button onClick={generate}> Generate Random</button>
      <div>
        <input
          name="task"
          value={input}
          onChange={onInput}
          placeholder="Enter Task"
        />
        <button disabled={conditions.disable} onClick={onAdd}>
          Add Task
        </button>
      </div>

      {conditions.showList && (
        <TaskList conditions={conditions} list={list} onDel={onDel} />
      )}
    </div>
  );
};

export default Hooks;
