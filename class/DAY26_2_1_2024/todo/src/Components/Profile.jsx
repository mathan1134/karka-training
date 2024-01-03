import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Profile = ({updateList}) => {
  const location = useLocation();
  const { username } = location.state || {};

  const [newPassword, setNewPassword] = useState('');

  const edit = (e) => {
    e.preventDefault();
  
    if (!newPassword) {
      alert('Please provide a new password.');
      return;
    }
  
    let data = JSON.parse(localStorage.getItem('data')) || [];
    data = data.map((value) => {
      if (value.username === username) {
        return { ...value, password: newPassword };
      }
      return value;
    });
  
    localStorage.setItem('data', JSON.stringify(data));
    updateList(data);
  };
  

  return (
    <div>
      <h3>Welcome {username}</h3>
      <h4>Change Password</h4>
      <input
        type="text"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={edit}>Submit</button>
    </div>
  );
};
