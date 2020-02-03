import React from "react";
import { Card, Image } from "semantic-ui-react";
import CardModal from "./CardModal";
export default function CardDetails({ card, imageOnly }) {
  return (
    <>
      {imageOnly ? (
        <Card>
          {" "}
          <Card.Content>
            <Image src={card.pictureUrl} />
          </Card.Content>
        </Card>
      ) : (
        <Card>
          <Image src={card.pictureUrl} />
          <Card.Content>
            <Card.Header>
              {card.name} {card.firstName}
            </Card.Header>
            <Card.Meta>
              <span className="date">{card.class}</span>
            </Card.Meta>
            <Card.Description>{card.cellPhone}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <span>{card.inCampus ? "sur le campus" : "absent"}</span>{" "}
            <span style={{ cursor: "pointer" }}>
              <CardModal student={card} />
            </span>
          </Card.Content>
        </Card>
      )}
    </>
  );
}
