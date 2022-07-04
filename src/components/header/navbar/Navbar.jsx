import React from 'react';
import styles from './Navbar.module.css';

const Navbar = (props) => {
  const classes = props.className;
  return (
    <nav className={classes}>
      <input
        type="text"
        placeholder="검색"
        className={styles['navbar-input']}
      />
    </nav>
  );
};

export default Navbar;
