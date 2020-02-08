import React, { useState } from "react";

export default function Login({ login }) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const handleSubmit = e => {
    e.preventDefault();
    login(credentials);
  };

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
        />{" "}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
        />{" "}
        <button type="submit">login</button>
      </form>
    </>
  );
}
