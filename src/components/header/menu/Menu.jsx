import React from 'react';
import './Menu.css';

const Menu = (props) => {
  const classes = 'menu ' + props.className;
  return (
    <ul className={classes}>
      <li className="menu-item">
        <a href="#">Home</a>
      </li>
      <li className="menu-item">
        <a href="#">DM</a>
      </li>
      <li className="menu-item">
        <a href="#">Plus</a>
      </li>
      <li className="menu-item">
        <a href="#">Like</a>
      </li>
      <li className="menu-item">
        <a href="#">Logout</a>
      </li>
    </ul>
  );
};

export default Menu;
