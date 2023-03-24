import React, { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Board from "./components/Board/Board";
import Navbar from "./components/navbar/Navbar";
import CreateTaskModel from "./components/createTaskModel/CreateTaskModel";
import ProjectsDropdown from "./components/ProjectsDropdown/ProjectsDropdown";

export default function App() {
  const [showCreateTask, setShowCreateTask] = useState(false);
  const [showProjectsDropdown, setshowProjectsDropdown] = useState(false);
  function toggleShowCreateTask() {
    setShowCreateTask(!showCreateTask);
  }
  function toggleShowProjectsDropdown() {
    setshowProjectsDropdown(!showProjectsDropdown);
  }
  return (
    <div className="app">
      <Navbar
        toggleShowCreateTask={toggleShowCreateTask}
        toggleShowProjectsDropdown={toggleShowProjectsDropdown}
      />

      <div className="main-container">
        <Sidebar />
        <Board />
      </div>
      {showCreateTask && (
        <CreateTaskModel toggleShowCreateTask={toggleShowCreateTask} />
      )}
      {showProjectsDropdown && (
        <ProjectsDropdown
          toggleShowProjectsDropdown={toggleShowProjectsDropdown}
        />
      )}
    </div>
  );
}
