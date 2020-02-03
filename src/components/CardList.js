import React from "react";
import CardDetails from "./CardDetails";

export default function CardList({ cards }) {
  return (
    <>
      {cards.map(card => (
        <CardDetails card={card} key={card.id} />
      ))}
    </>
  );
}
