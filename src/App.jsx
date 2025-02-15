import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

import Nav from "./pages/Nav";
import "./Components/styles/main.scss"




function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Details/:id" element={<Detail />} />
        
        
        
      </Routes>
    </Router>
  );
}

export default App;
