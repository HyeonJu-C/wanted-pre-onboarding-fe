import React from 'react';
import styles from './Menu.module.css';

const Menu = (props) => {
  const classes = props.className;
  const logoutHandler = () => {
    props.onLogout();
  };

  return (
    <ul className={`${classes} ${styles.menu}`}>
      <li className={styles['menu-item']}>
        <a href="#">Home</a>
      </li>
      <li className={styles['menu-item']}>
        <a href="#">DM</a>
      </li>
      <li onClick={logoutHandler} className={styles['menu-item']}>
        <a href="#">Logout</a>
      </li>
    </ul>
  );
};

export default Menu;
