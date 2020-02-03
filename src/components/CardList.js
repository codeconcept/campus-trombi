import React from "react";
import { Grid } from "semantic-ui-react";
import CardDetails from "./CardDetails";

export default function CardList({ cards }) {
  return (
    <>
      <Grid columns={3} doubling stackable>
        {cards.map(card => (
          <Grid.Column
            key={card.id}
            style={{
              width: 390,
              border: "2 solid red",
              float: "left",
              padding: 15,
              margin: 15
            }}
          >
            <CardDetails card={card} />
          </Grid.Column>
        ))}
      </Grid>
    </>
  );
}
