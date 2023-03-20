import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Board from "./components/Board/Board";

export default function App() {
  return (
    <div className="main-container">
      <Sidebar />
      <Board />
    </div>
  );
}
