import React from 'react';
import './Header.css';
import Logo from './logo/Logo';
import Menu from './menu/Menu';
import Navbar from './navbar/Navbar';

const Header = (props) => {
  return (
    <header className="header">
      <div className="header-container">
        <Logo className="header-logo" />
        <Navbar className="header-navbar" />
        <Menu className="header-menu" />
      </div>
    </header>
  );
};

export default Header;
