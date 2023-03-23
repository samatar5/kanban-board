import React, { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Board from "./components/Board/Board";
import Navbar from "./components/navbar/Navbar";
import CreateTaskModel from "./components/createTaskModel/CreateTaskModel";

export default function App() {
  const [showCreateTask, setShowCreateTask] = useState(false);
  function toggleShowCreateTask() {
    setShowCreateTask(!showCreateTask);
  }
  return (
    <div className="app">
      <Navbar toggleShowCreateTask={toggleShowCreateTask} />

      <div className="main-container">
        <Sidebar />
        <Board />
      </div>
      {showCreateTask && (
        <CreateTaskModel toggleShowCreateTask={toggleShowCreateTask} />
      )}
    </div>
  );
}
