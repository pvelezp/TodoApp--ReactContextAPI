import React, { useContext, useState, useEffect } from "react";
import { TasklistContext } from "../context/TasklistContext";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const { clearList, addTask, editItem, editTask } = useContext(
    TasklistContext
  );

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editItem === null) {
      addTask(title);
      setTitle("");
    } else {
      editTask(title, editItem.id);
    }
  };

  useEffect(() => {
    if (editItem !== null) {
      setTitle(editItem.title);
    } else {
      setTitle("");
    }
  }, [editItem]);
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        onChange={handleChange}
        type="text"
        placeholder="Add task..."
        className="task-input"
        required
        value={title}
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editItem ? "Edit Task" : "Add task"}
        </button>
        <button onClick={clearList} className="btn clear-btn">
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
