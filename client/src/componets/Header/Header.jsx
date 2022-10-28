import React from 'react';
import { Link } from 'react-router-dom';
import {
  nav,
  header,
  ulContent,
  texLink,
  titleNav,
  titleNavTex,
  navFixed,
} from '../style/header.module.css';

function Header() {
  return (
    <div className={navFixed}>
      <header className={header}>
        <nav className={nav}>
          <Link className={titleNav} to="/">
            <h3 className={titleNavTex}>Healthy Life</h3>
          </Link>
          <ul className={ulContent}>
            <Link className={texLink} to="/diets">
              Diet
            </Link>

            <Link className={texLink} to="/search">
              Search
            </Link>

            <Link className={texLink} to="/recipes">
              Recipes
            </Link>

            <Link className={texLink} to="/create">
              Create
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
