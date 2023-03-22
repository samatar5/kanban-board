import React from "react";
import "./Ticket.scss";
import { Ticket as TicketType } from "../../context/projects-data";

type Props = {
  ticket: TicketType;
};

export default function Ticket({ ticket }: Props) {
  return (
    <div className="ticket">
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
      <p>{ticket.tasks.length} Subtasks</p>
    </div>
  );
}
