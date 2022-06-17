import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
  const classes = 'navbar ' + props.className;
  return (
    <nav className={classes}>
      <input type="text" placeholder="검색" className="navbar-input" />
    </nav>
  );
};

export default Navbar;
