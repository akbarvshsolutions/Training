import React,{useEffect, useState} from 'react';

import { Link } from "react-router-dom";

function Navbar() {

  return (
    <div className="App">
    <nav className="navbar navbar-expand-lg navbar bg-dark ">
     <div className="container-fluid mx-4">
      
    <Link className="navbar-brand-light text-light" to="/">Home</Link>
    <Link className="navbar-brand-light text-light" to="/AddPolicies">AddPolicies</Link>
    <Link className="navbar-brand-light text-light" to="/claimpolicy">claimpolicy</Link>
    
    <Link className="navbar-brand-light text-light" to="/claimsettelement">claimsettelement</Link>
  
   
  </div>
</nav>

    </div>
  );
}

export default Navbar;