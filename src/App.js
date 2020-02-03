import React from "react";
import CardList from "./components/CardList";
import CardDetails from "./components/CardDetails";
import "./App.css";

const cards = [
  {
    id: 1,
    name: "Doe",
    firstName: "John",
    email: "john.doe@gmail.com",
    class: "Master 2",
    cellPhone: "06-06-06-06-06",
    pictureUrl: "https://fakeimg.pl/200x200/?text=John%20Doe&font=lobster"
  },
  {
    id: 2,
    name: "Doe",
    firstName: "Jane",
    email: "jane.doe@gmail.com",
    class: "Master 2",
    cellPhone: "06-06-06-06-06",
    pictureUrl: "https://fakeimg.pl/200x200/?text=Jane%20Doe&font=lobster"
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
