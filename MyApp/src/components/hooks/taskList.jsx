import { useEffect } from "react";

const TaskList = ({ conditions, list, onDel }) => {
  useEffect(() => {
    console.log("child Mounted");

    return () => {
      console.log("Child unmounting");
    };
  }, []);
  console.log("Child Render");

  useEffect(() => {
    console.log("condition change");
  }, [conditions]);
  return (
    <ul>
      {list.map((i) => (
        <li key={i.id}>
          <span>{i.task}</span>
          <button onClick={() => onDel(i.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
