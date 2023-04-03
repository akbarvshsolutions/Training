import React from 'react';
import './App.css';
import ClaimPolicy from './Components/ClaimPolicy';
import ClaimSettelement from './Components/ClaimSettelement';
import AddPolicies from './Components/Addpolicies';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

import { Routes, Route, useLocation } from "react-router-dom";

import './App.css';

function App() {
  const location = useLocation();
  

  return (
    <div className="App">
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addpolicies" element={<AddPolicies />} />
        <Route path="/claimpolicy" element={<ClaimPolicy />} />
        <Route path="/claimsettelement" element={<ClaimSettelement />} />
      </Routes>
    </div>
  );
}

export default App;
