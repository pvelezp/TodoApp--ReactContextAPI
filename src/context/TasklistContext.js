import React, { createContext, useState, useEffect } from "react";
import Tasklist from "../components/Tasklist";
import { v4 as uuidv4 } from "uuid";

export const TasklistContext = createContext();

const TasklistContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(initialState);

  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    setTasks([...tasks, { title, id: uuidv4() }]);
  };
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearList = () => {
    setTasks([]);
  };

  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEditItem(item);
  };

  const editTask = (title, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { title, id } : task
    );

    setTasks(newTasks);
    setEditItem(null);
  };

  return (
    <TasklistContext.Provider
      value={{
        tasks,
        addTask,
        findItem,
        editTask,
        removeTask,
        editItem,
        clearList,
      }}
    >
      {props.children}
    </TasklistContext.Provider>
  );
};

export default TasklistContextProvider;
