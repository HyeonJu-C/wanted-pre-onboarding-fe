import React from 'react';
import styles from './Header.module.css';
import Logo from './logo/Logo';
import Menu from './menu/Menu';
import Navbar from './navbar/Navbar';

const Header = (props) => {
  return (
    <header className={`${styles['header']}`}>
      <div className={styles['header-container']}>
        <Logo className={`${styles['header-logo']}`} />
        <Navbar className={styles['header-navbar']} />
        <Menu className={styles['header-menu']} />
      </div>
    </header>
  );
};

export default Header;
