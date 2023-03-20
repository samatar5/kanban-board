import React from "react";
import "./Board.scss";
import Ticket from "../Ticket/Ticket";

type Props = {};

export default function Board({}: Props) {
  return (
    <div className="board">
      <div className="board-column">
        <div className="board-title">
          <div className="board-title-icon todo"></div>
          <h4 className="">Todo</h4>
        </div>
        <Ticket />
        <Ticket />
        <Ticket />
      </div>
      <div className="board-column">
        <div className="board-title">
          <div className="board-title-icon doing"></div>
          <h4 className="">Doing</h4>
        </div>
        <Ticket />
        <Ticket />
      </div>
      <div className="board-column">
        <div className="board-title">
          <div className="board-title-icon done"></div>
          <h4 className="">Done</h4>
        </div>
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
      </div>
    </div>
  );
}
