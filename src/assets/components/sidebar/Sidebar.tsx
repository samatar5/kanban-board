import React from "react";
import "./Sidebar.scss";
import { Folder, Plus } from "react-feather";

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <div className="sidebar">
      <p>All Boards (2)</p>
      <ul className="sidebar-items">
        <li className="active">
          <Folder />
          PLACE BOARD
        </li>

        <li>
          <Folder />
          PLACE BOARD
        </li>
        <li>
          <Plus />
          Create Board
        </li>
      </ul>
    </div>
  );
}
