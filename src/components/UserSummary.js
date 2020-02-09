import React from "react";
import { Button, Icon } from "semantic-ui-react";
import CardModal from "./CardModal";

export default function UserSummary({ user, disconnect }) {
  //   console.log("user", user);
  const fullUser = Object.assign(
    {
      name: "",
      class: "",
      classValue: "",
      cellPhone: "",
      pictureUrl: "https://fakeimg.pl/360x360/?text=Anonymous&font=arial",
      internshipAt: "",
      inCampus: true
    },
    user
  );
  //   console.log("fullUser", fullUser);

  return (
    <>
      <h3>Bonjour {user.name}</h3>
      <div>
        <Button animated onClick={disconnect}>
          <Button.Content visible>Se déconnecter</Button.Content>
          <Button.Content hidden>
            <Icon name="user close" />
          </Button.Content>
        </Button>
        <span style={{ cursor: "pointer" }}>
          <CardModal student={fullUser} />
        </span>
      </div>
    </>
  );
}
