import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import List from './pages/List';
import Tablee from './pages/Tablee';
import Nav from './pages/Nav';
import "./styles/main.css";
import Details from './pages/Details';

function App() {
  return (
    
   
    <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<Tablee />} />
      <Route path="/LIST" element={<List />} />
      <Route path="/details/:id" element={<Details />} />
      
      </Routes >
  </Router>
  )
}

export default App
