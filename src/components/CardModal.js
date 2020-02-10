import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import {
  Header,
  Image,
  Modal,
  Icon,
  Form,
  Input,
  Dropdown
} from "semantic-ui-react";

const CLOUDINARY_URL = process.env.REACT_APP_CLOUDINARY_URL;
const CLOUDINARY_CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;

const CardModal = props => {
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [student, setStudent] = useState({ ...props.student });
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    setStudent({ ...props.student });
  }, [props.student]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (imagePreview !== "") {
      const imageURL = await handleFileUpload();
      console.log("imageURL", imageURL);
      const updatedStudent = { ...student, pictureUrl: imageURL };
      props.saveUser(updatedStudent);
    } else {
      props.saveUser(student);
    }
  };

  const handleChange = e => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const radioButtons = (
    <Form.Group inline={true}>
      <Form.Radio
        label="Voir"
        value="see"
        checked={isInEditMode === false}
        onChange={() => setIsInEditMode(false)}
      />
      <Form.Radio
        label="Modifier"
        value="edit"
        checked={isInEditMode === true}
        onChange={() => setIsInEditMode(true)}
      />
    </Form.Group>
  );

  const inDisplayMode = (
    <Modal trigger={<Icon name="male" />} centered={false}>
      <Modal.Header>Fiche détaillée</Modal.Header>
      <Modal.Content image>
        <Image wrapped size="medium" src={student.pictureUrl} />
        <Modal.Description>
          <Header>
            {student.firstName} {student.name.toUpperCase()}
          </Header>
          {props.candEdit === true ? radioButtons : null}{" "}
          <p>classe : {student.class}</p>
          <p>tél. : {student.cellPhone}</p>
          <p>mail : {student.email}</p>
          <p>en stage chez : {student.internshipAt}</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );

  const classesOptions = [
    { key: 1, value: "master-1", text: "Master 1" },
    { key: 2, value: "master-2", text: "Master 2" }
  ];

  const handleLevelChange = (e, data) => {
    setStudent({
      ...student,
      classValue: data.value,
      class: data.options.find(opt => opt["value"] === data.value).text
    });
  };

  const handleFileUploadChange = e => {
    const files = e.target.files;
    setStudent(previousState => ({ ...previousState, image: files[0] }));
    setImagePreview(window.URL.createObjectURL(files[0]));
  };

  const handleFileUpload = async () => {
    const data = new FormData();
    data.append("file", student.image);
    // second param is reactshop as this is what I used when I configured cloudinary back then
    data.append("upload_preset", "reactshop");
    data.append("cloud_name", CLOUDINARY_CLOUD_NAME);
    const res = await axios.post(CLOUDINARY_URL, data);
    const imageURL = res.data.url;
    return imageURL;
  };

  const inEditMode = (
    <Modal trigger={<Icon name="male" />} centered={false}>
      <Modal.Header>Modifier votre fiche</Modal.Header>
      <Modal.Content image>
        <Image wrapped size="medium" src={student.pictureUrl} />
        <Modal.Description>
          <Header>{student.name.toUpperCase()}</Header>
          {radioButtons}
          <br />
          <Form onSubmit={handleSubmit}>
            <Form.Field required>
              <label>Nom</label>
              <Input
                label="Nom"
                placeholder="Nom"
                name="name"
                value={student.name}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field required>
              <label>Classe</label>
              <Dropdown
                placeholder="Choisissez le niveau"
                fluid
                search
                options={classesOptions}
                onChange={handleLevelChange}
                defaultValue={student.classValue}
              />
            </Form.Field>
            <Form.Field required>
              <label>Téléphone</label>
              <Input
                label="Téléphone"
                placeholder="Téléphone"
                name="cellPhone"
                value={student.cellPhone}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field required>
              <label>Email</label>
              <Input
                label="Email"
                placeholder="Email"
                name="email"
                value={student.email}
                onChange={handleChange}
              />
              <Form.Field required>
                <label>En stage chez</label>
                <Input
                  label="En stage chez"
                  placeholder="En stage chez"
                  name="internshipAt"
                  value={student.internshipAt}
                  onChange={handleChange}
                />
              </Form.Field>
            </Form.Field>
            <Form.Field
              control={Input}
              name="media"
              type="file"
              label="Photo"
              accept="image/*"
              content="Sélectionnez une image"
              onChange={handleFileUploadChange}
            />
            <Image src={imagePreview} size="small" />
            <Form.Button type="submit">sauvegarder</Form.Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );

  return <>{isInEditMode ? inEditMode : inDisplayMode}</>;
};

export default CardModal;

CardModal.propTypes = {
  student: PropTypes.object.isRequired
};
