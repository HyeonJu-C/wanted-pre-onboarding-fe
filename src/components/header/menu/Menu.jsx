import React, { useContext } from 'react';
import styles from './Menu.module.css';
import AuthContext from '../../../context/auth';
import HomeIcon from '../../icons/HomeIcon';
import PlaneIcon from '../../icons/PlaneIcon';
import LogoutIcon from '../../icons/LogoutIcon';

const Menu = (props) => {
  const classes = props.className;
  const context = useContext(AuthContext);

  return (
    <ul className={`${classes} ${styles.menu}`}>
      <li className={styles['menu-item']}>
        <a href="#">
          <HomeIcon size="24" />
        </a>
      </li>
      <li className={styles['menu-item']}>
        <a href="#">
          <PlaneIcon size="24" />
        </a>
      </li>
      <li onClick={context.onLogout} className={styles['menu-item']}>
        <a href="#">
          <LogoutIcon size="24" />
        </a>
      </li>
    </ul>
  );
};

export default Menu;
