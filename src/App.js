import React, { useState, useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import CardList from "./components/CardList";
import "./App.css";
import Login from "./components/Login";

const cards = [
  {
    id: 1,
    name: "Doe",
    firstName: "John",
    email: "john.doe@gmail.com",
    class: "Master 2",
    classValue: "master-2",
    cellPhone: "06-06-06-06-06",
    pictureUrl: "https://fakeimg.pl/360x360/?text=John%20Doe&font=arial",
    internshipAt: "Google",
    inCampus: true
  },
  {
    id: 2,
    name: "Doe",
    firstName: "Jane",
    email: "jane.doe@gmail.com",
    class: "Master 2",
    classValue: "master-2",
    cellPhone: "06-06-06-06-06",
    pictureUrl: "https://fakeimg.pl/360x360/?text=Jane%20Doe&font=arial",
    internshipAt: "OVH",
    inCampus: false
  },
  {
    id: 3,
    name: "Doe",
    firstName: "Sam",
    email: "sam.doe@gmail.com",
    class: "Master 1",
    classValue: "master-1",
    cellPhone: "06-06-06-06-06",
    pictureUrl: "https://fakeimg.pl/360x360/?text=Sam%20Doe&font=arial",
    internshipAt: "Code Concept",
    inCampus: false
  },
  {
    id: 4,
    name: "Doe",
    firstName: "Jane",
    email: "Julie.doe@gmail.com",
    class: "Master 1",
    classValue: "master-1",
    cellPhone: "06-06-06-06-06",
    pictureUrl: "https://fakeimg.pl/360x360/?text=Julie%20Doe&font=arial",
    internshipAt: "EDF",
    inCampus: true
  },
  {
    id: 5,
    name: "Doe",
    firstName: "Mark",
    email: "mark.doe@gmail.com",
    class: "Master 2",
    classValue: "master-2",
    cellPhone: "06-06-06-06-06",
    internshipAt: "SNCF",
    pictureUrl: "https://fakeimg.pl/360x360/?text=Mark%20Doe&font=arial",
    inCampus: true
  },
  {
    id: 6,
    name: "Doe",
    firstName: "Erwan",
    email: "erwan.doe@gmail.com",
    class: "Master 2",
    classValue: "master-2",
    cellPhone: "06-06-06-06-06",
    internshipAt: "Néo-Soft",
    pictureUrl: "https://fakeimg.pl/360x360/?text=Erwan%20Doe&font=arial",
    inCampus: true
  }
];

function App() {
  const [classValue, setClassValue] = useState("");
  const [fitleredStudents, setFilteredStudents] = useState([]);

  useEffect(() => {
    setFilteredStudents(cards.filter(c => c.classValue === classValue));
  }, [classValue]);

  const classesOptions = [
    { key: 1, value: "master-1", text: "Master 1" },
    { key: 2, value: "master-2", text: "Master 2" }
  ];

  const handleFilterChange = (e, data) => {
    console.log(data);
    setClassValue(data.value);
  };

  const handleLogin = credentials => {
    console.log("credentials", credentials);
  };

  return (
    <>
      <Login login={handleLogin} />
      <hr />
      <Dropdown
        placeholder="Choisissez le niveau"
        fluid
        search
        selection
        options={classesOptions}
        onChange={handleFilterChange}
      />
      {fitleredStudents.length > 0 ? (
        <CardList cards={fitleredStudents} />
      ) : (
        <CardList cards={cards} />
      )}
    </>
  );
}

export default App;
