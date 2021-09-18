import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="logo">
      <div>
        <Link to="/">
          <h1>BOOK STORE</h1>
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/">HomePage</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
