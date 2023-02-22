import React from 'react';
import './SideBar.css';

function SideBar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="#">Descripción profesional</a>
        </li>
        <li>
          <a href="#">Proyectos</a>
        </li>
        <li>
          <a href="#">Agilidad</a>
        </li>
        <li>
          <a href="#">Juegos</a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;