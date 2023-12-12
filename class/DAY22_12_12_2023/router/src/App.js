import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import { Profile } from './Components/Profile';

const App = () => {
  const isauthenticated = true;

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Profile">Profile</Link>
        </nav>
        <Routes>
          <Route path="/" element={isauthenticated ? <Profile /> : <Home />} />
          <Route path="/Profile" element={isauthenticated ? <Profile /> : <Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
