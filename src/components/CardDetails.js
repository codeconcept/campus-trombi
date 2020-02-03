import React from "react";

export default function CardDetails({ card }) {
  return <>{JSON.stringify(card, null, 4)}</>;
}
