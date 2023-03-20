import React from "react";
import "./Ticket.scss";

type Props = {};

export default function Ticket({}: Props) {
  return (
    <div className="ticket">
      <h3>This is a Ticket</h3>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
        dolorem.
      </p>
    </div>
  );
}
