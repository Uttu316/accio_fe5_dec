import { useEffect } from "react";

const TaskList = ({ list, onDel }) => {
  useEffect(() => {
    console.log("child Mounted");

    return () => {
      console.log("Child unmounting");
    };
  }, []);
  console.log("Child Render");
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
