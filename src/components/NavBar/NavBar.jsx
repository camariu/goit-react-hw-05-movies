import React from 'react';
import style from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <ul className={style.navbar}>
      <NavLink to={'/'} className={style.navbarLink}>
        <li>Home</li>
      </NavLink>
      <NavLink to={'/movies'} className={style.navbarLink}>
        <li>Moviest</li>
      </NavLink>
    </ul>
  );
}
