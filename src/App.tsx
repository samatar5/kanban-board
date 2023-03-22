import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Board from "./components/Board/Board";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <div className="main-container">
        <Sidebar />
        <Board />
      </div>
    </div>
  );
}
