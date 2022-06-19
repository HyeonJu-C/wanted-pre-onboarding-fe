import React from 'react';
import Feeds from '../../components/feeds/Feeds';
import Header from '../../components/header/Header';
import styles from './main.module.css';

const Main = (props) => {
  const onLogoutHandler = () => {
    props.onLogout();
  };
  return (
    <main>
      <Header className="main-header" onLogout={onLogoutHandler} />
      <Feeds />
    </main>
  );
};

export default Main;
