import React from 'react';
import Feeds from '../../components/feeds/Feeds';
import Header from '../../components/header/Header';
import styles from './main.module.css';

const MainPage = (props) => {
  return (
    <main>
      <Header />
      <Feeds />
    </main>
  );
};

export default MainPage;
