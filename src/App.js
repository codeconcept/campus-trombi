import React from "react";
import CardList from "./components/CardList";
import "./App.css";

const cards = [
  {
    id: 1,
    name: "Doe",
    firstName: "John",
    email: "john.doe@gmail.com",
    class: "Master 2",
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
    class: "Master 2",
    cellPhone: "06-06-06-06-06",
    pictureUrl: "https://fakeimg.pl/360x360/?text=Julie%20Doe&font=arial",
    inCampus: true
  },
  {
    id: 5,
    name: "Doe",
    firstName: "Mark",
    email: "mark.doe@gmail.com",
    class: "Master 2",
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
    cellPhone: "06-06-06-06-06",
    internshipAt: "Néo-Soft",
    pictureUrl: "https://fakeimg.pl/360x360/?text=Erwan%20Doe&font=arial",
    inCampus: true
  }
];

function App() {
  return (
    <>
      <CardList cards={cards} />
    </>
  );
}

export default App;
