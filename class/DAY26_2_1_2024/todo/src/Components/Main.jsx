

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Main = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { username } = location.state || {};

  const goToProfile = () => {
    navigate("/Profile",{state :{username}});
  };

  return (
    <div>
      <div>
        <p>{username}</p>
        <button onClick={goToProfile}> EditProfile</button>
      </div>
      <div>
        <h2>Notes</h2>
        <input type="text" />
        <button>add</button>
      </div>
    </div>
  );
};
