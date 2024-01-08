
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUserData = JSON.parse(localStorage.getItem('userData')) || [];
    const user = storedUserData.find(user => user.username === enteredUsername);

    if (user && user.password === enteredPassword) {
      alert("Login successful");

      navigate("/main", { state: { username: enteredUsername } });
    } else if (user && user.password !== enteredPassword) {
      alert("Invalid password");
    } else if (!user) {
      alert("Invalid username");
    }
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <h3>Login</h3>
        <label htmlFor="enteredUsername">Username</label>
        <input
          type="text"
          id="enteredUsername"
          value={enteredUsername}
          onChange={(e) => setEnteredUsername(e.target.value)}
          required
        /><br />
        <label htmlFor="enteredPassword">Password</label>
        <input
          type="password"
          id="enteredPassword"
          value={enteredPassword}
          onChange={(e) => setEnteredPassword(e.target.value)}
          required
        /><br />
        <button type="submit">Login</button><br />
      </form>

      {/* <Link to="/passwordrec">Forget My Password</Link><br /> */}
      <Link to="/register">Create an Account</Link>
    </>
  );
};