import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      {/* <img
        src="https://img2.freepng.es/20180515/xkq/kisspng-recipe-kerala-computer-icons-chef-cookbook-5afa68711f8a82.8523811315263601771292.jpgs"
        alt="icono"
      /> */}
      <nav>
        <Link to="/home">
          <h3>Healthy Life</h3>
        </Link>
        <ul>
          <li>
            <Link to="/diets">Diet</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
