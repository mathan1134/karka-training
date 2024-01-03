import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/");
  };

  return (
    <>
      <h3>Register</h3>

      <form onSubmit={handleLoginClick}>
        <label htmlFor="">User_name</label>
        <input type="text" required /><br />
        <label htmlFor="">Password</label>
        <input type="password" required /><br />
        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account? <button onClick={handleLoginClick}>Login</button>
      </p>
    </>
  );
};
