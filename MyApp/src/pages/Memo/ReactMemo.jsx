import React, { useState } from "react";

const ReactMemo = () => {
  const [input, setInput] = useState("");

  const [list, setList] = useState([]);

  const onInput = (e) => {
    const { value } = e.target;
    setInput(value);
  };
  const onAddSkill = () => {
    if (input.trim().length > 5) {
      setList((prev) => [...prev, input.trim()]);
      setInput("");
    }
  };

  return (
    <div>
      <h1>React.memo</h1>
      <div>
        <input
          value={input}
          onChange={onInput}
          placeholder="Enter a custom task"
        />
        <button onClick={onAddSkill}>Add Skill</button>
      </div>
      <ul>
        {list.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(ReactMemo);
