import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './pages/Userlist';
import UserDetails from './pages/Userdetails';
import React from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;