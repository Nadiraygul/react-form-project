import { Link } from 'react-router-dom';
import React from 'react';

function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/LIST">About</Link></li>
        <li><Link to="/details/:id">About</Link></li>
       
      </ul>
    </nav>
  );
}

export default Nav;
