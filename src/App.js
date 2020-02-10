import React, { useState, useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import axios from "axios";
import CardList from "./components/CardList";
import "./App.css";
import Login from "./components/Login";
import UserSummary from "./components/UserSummary";

const STORAGE_KEY = "react-trombi";

function App() {
  const [classValue, setClassValue] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [isLoginVisible, setIsLoginVisible] = useState(true);
  const [user, setUser] = useState({ name: "", email: "" });
  const [users, setUsers] = useState([]);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3001/users").then(res => {
      console.log("res.data.users", res.data.users);
      setUsers(res.data.users);
    });
  }, []);

  useEffect(() => {
    if (!users) return;
    if (classValue === "all-levels") {
      return setFilteredStudents(users);
    }
    const filtered =
      users.filter(c => c.classValue === classValue || c.classValue === "") ||
      [];
    setFilteredStudents(filtered);
  }, [classValue, users]);

  const classesOptions = [
    { key: 0, value: "all-levels", text: "Tous les niveaux" },
    { key: 1, value: "master-1", text: "Master 1" },
    { key: 2, value: "master-2", text: "Master 2" }
  ];

  const handleFilterChange = (e, data) => {
    console.log(data);
    setClassValue(data.value);
  };

  const handleLogin = credentials => {
    console.log("credentials", credentials);
    const config = {
      "Content-Type": "application/json"
    };
    axios
      .post("http://localhost:3001/login", credentials, config)
      .then(res => {
        console.log("res.data", res.data);
        saveTokenInLocalstorage(res.data.token);
        setIsLoginVisible(false);
        setUser(res.data.user);
      })
      .catch(err => console.error(err));
  };

  const handleRegister = credentials => {
    console.log("handleRegister credentials", credentials);
    const config = {
      "Content-Type": "application/json"
    };
    axios
      .post("http://localhost:3001/register", credentials, config)
      .then(res => {
        console.log("res.data", res.data);
        saveTokenInLocalstorage(res.data.token);
        setIsLoginVisible(false);
        setUser(res.data.user);
      })
      .catch(err => console.error(err));
  };

  const saveTokenInLocalstorage = token => {
    localStorage.setItem(STORAGE_KEY, token);
  };

  const disconnect = () => {
    localStorage.removeItem(STORAGE_KEY);
    setIsLoginVisible(true);
  };

  const handleSave = user => {
    console.log("handleSave user", user);
    if (user.id !== undefined) {
      updateUser(user);
    } else {
      user.id = Date.now();
      createUser(user);
    }
  };

  const updateUser = user => {
    const config = {
      "Content-Type": "application/json"
    };
    axios
      .put(`http://localhost:3001/users/${user.id}`, user, config)
      .then(res => {
        console.log("updateUSer / res.data ", res.data);
        axios.get("http://localhost:3001/users").then(res => {
          setIsLoading(true);
          console.log("res.data.users", res.data.users);
          setFilteredStudents(res.data.users);
          setUser(user);
          setIsLoading(false);
        });
      })
      .catch(err => console.error(err));
  };

  const createUser = user => {
    const config = {
      "Content-Type": "application/json"
    };
    axios
      .post(`http://localhost:3001/users/${user.id}`, user, config)
      .then(res => {
        console.log("createUser / res.data", res.data);
        axios.get("http://localhost:3001/users").then(res => {
          setIsLoading(true);
          console.log("res.data.users", res.data.users);
          setFilteredStudents(res.data.users);
          setUser(user);
          setIsLoading(false);
        });
      })
      .catch(err => console.error(err));
  };

  return (
    <>
      {isLoginVisible ? (
        <Login login={handleLogin} register={handleRegister} />
      ) : (
        <UserSummary
          user={user}
          disconnect={disconnect}
          saveUser={handleSave}
        />
      )}
      <br />
      <Dropdown
        placeholder="Choisissez le niveau"
        fluid
        search
        selection
        options={classesOptions}
        onChange={handleFilterChange}
      />
      {loading && <h3>loading...</h3>}
      {filteredStudents.length > 0 ? (
        <CardList cards={filteredStudents} />
      ) : (
        <CardList cards={users} />
      )}
    </>
  );
}

export default App;
