// src/App.jsx
import React from 'react';
import './styles/App.css';  // Ana stil dosyasını buraya import ediyoruz
import Home from './pages/Home';

const App = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
};

export default App;
