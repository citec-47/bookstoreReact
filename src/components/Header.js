import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/header.css';

function Header() {
  return (
    <nav>
      <div className="navbar links flex">
        <ul className="flex">
          <li>
            <h2>
              <a href="/books" className="logo">Bookstore CMS</a>

            </h2>
          </li>
          <li>
            <NavLink to="/">
              Books
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories">Categories</NavLink>

          </li>

        </ul>
        <div className="nav-user">
          <a href="/user">user</a>
        </div>
      </div>

    </nav>
  );
}

export default Header;
