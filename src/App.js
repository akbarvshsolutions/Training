import React, { useEffect, useState } from 'react';
import './App.css';
import ClaimPolicy from './Components/ClaimPolicy';
import ClaimSettelement from './Components/ClaimSettelement';
import AddPolicies from './Components/Addpolicies';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

import { BrowserRouter, Routes, Route } from "react-router-dom";


import './App.css';

function App() {

  return (
    <div className="App">

      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/addpolicies" element={<AddPolicies />} />
            <Route path="/claimpolicy" element={<ClaimPolicy />} />
            <Route path="/claimsettelement" element={<ClaimSettelement />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
