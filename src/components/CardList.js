import React, { useState } from "react";
import { Grid, Checkbox } from "semantic-ui-react";
import CardDetails from "./CardDetails";

export default function CardList({ cards }) {
  const [imageOnly, setImageOnly] = useState(false);

  const handleChange = (e, data) => {
    console.log(data.checked);
    setImageOnly(data.checked);
  };
  return (
    <>
      <br />
      <Checkbox toggle onChange={handleChange} label="photos uniquement" />
      <Grid columns={3} doubling stackable>
        {cards.map(card => (
          <Grid.Column
            key={card.id}
            style={{
              width: 330,
              border: "2 solid red",
              float: "left",
              padding: 15,
              margin: 15
            }}
          >
            <CardDetails card={card} imageOnly={imageOnly} />
          </Grid.Column>
        ))}
      </Grid>
    </>
  );
}
