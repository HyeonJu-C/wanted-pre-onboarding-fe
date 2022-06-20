import React, { useContext } from 'react';
import styles from './Menu.module.css';
import AuthContext from '../../../context/auth';

const Menu = (props) => {
  const classes = props.className;
  const context = useContext(AuthContext);

  return (
    <ul className={`${classes} ${styles.menu}`}>
      <li className={styles['menu-item']}>
        <a href="#">Home</a>
      </li>
      <li className={styles['menu-item']}>
        <a href="#">DM</a>
      </li>
      <li onClick={context.onLogout} className={styles['menu-item']}>
        <a href="#">Logout</a>
      </li>
    </ul>
  );
};

export default Menu;
