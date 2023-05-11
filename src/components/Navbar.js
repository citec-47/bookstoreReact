import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

function NavBar() {
  return (
    <nav className={style.nav}>
      <div>
        <h1>Bookstore CMS</h1>
        <ul className={style.ul}>
          <li>
            <NavLink
              to="/"
              className={(Link) => (Link.isActive ? style.activeClass : '')}
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categories"
              className={(Link) => (Link.isActive ? style.activeClass : '')}
            >
              Categories
            </NavLink>
          </li>
        </ul>
      </div>
      <CgProfile />
    </nav>
  );
}

export default NavBar;
