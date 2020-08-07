import React from "react";
import "./App.css";
import Tasklist from "./components/Tasklist";
import TasklistContextProvider from "./context/TasklistContext";
import TaskForm from "./components/TaskForm";
import Header from "./components/Header";

function App() {
  return (
    <TasklistContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskForm />
            <Tasklist />
          </div>
        </div>
      </div>
    </TasklistContextProvider>
  );
}

export default App;
