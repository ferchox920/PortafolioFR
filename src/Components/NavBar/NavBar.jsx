import React from 'react';
import style from './NavBar.module.css'

function Navbar() {
  return (
    <nav>
      <div className={style.navbarleft}>Fernando Ramones</div>
      <div className={style.navbarright}>
        <a href="/about">About</a>
      </div>
    </nav>
  );
}

export default Navbar;