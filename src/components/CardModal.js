import React from "react";
import { Header, Image, Modal, Icon } from "semantic-ui-react";

const CardModal = ({ student }) => (
  <Modal trigger={<Icon name="male" />} centered={false}>
    <Modal.Header>Fiche détaillée</Modal.Header>
    <Modal.Content image>
      <Image wrapped size="medium" src={student.pictureUrl} />
      <Modal.Description>
        <Header>
          {student.firstName} {student.name.toUpperCase()}
        </Header>
        <p>classe : {student.class}</p>
        <p>tél. : {student.cellPhone}</p>
        <p>mail : {student.email}</p>
        <p>en stage chez : {student.internshipAt}</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default CardModal;
