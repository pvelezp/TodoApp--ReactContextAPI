import React, { useContext } from "react";
import { TasklistContext } from "../context/TasklistContext";
import Task from "./Task";
const Tasklist = () => {
  const { tasks } = useContext(TasklistContext);
  return (
    <div>
      {tasks.length ? (
        <ul className="list">
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </ul>
      ) : (
        <div className="no-tasks">No tasks</div>
      )}
    </div>
  );
};

export default Tasklist;
