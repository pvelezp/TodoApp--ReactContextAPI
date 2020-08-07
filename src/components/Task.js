import React, { useContext } from "react";
import { TasklistContext } from "../context/TasklistContext";

const Task = ({ task }) => {
  console.log(task);
  const { findItem, removeTask } = useContext(TasklistContext);
  const { id, title } = task;
  return (
    <li className="list-item">
      <span>{title}</span>
      <div>
        <button onClick={() => removeTask(id)} className="btn-delete task-btn">
          <i className="fas fa-trash-alt"></i>
        </button>
        <button onClick={() => findItem(id)} className="btn-edit task-btn">
          <i className="fas fa-pen"></i>
        </button>
      </div>
    </li>
  );
};

export default Task;
