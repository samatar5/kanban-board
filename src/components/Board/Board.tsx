import React from "react";
import "./Board.scss";
import Ticket from "../Ticket/Ticket";
import { useBoardContext } from "../../context/BoardsContext";

type Props = {};

export default function Board({}: Props) {
  const { currentProject } = useBoardContext();
  return (
    <div className="board">
      {currentProject.board.map((column) => (
        <div className="board-column" key={column.name}>
          <div className="board-title">
            <div
              className={"board-title-icon " + column.name.toLowerCase()}
            ></div>
            <h4 className="">{column.name}</h4>
          </div>
          {column.tickets.map((ticket) => (
            <Ticket ticket={ticket} key={ticket.id} />
          ))}
        </div>
      ))}
    </div>
  );
}
