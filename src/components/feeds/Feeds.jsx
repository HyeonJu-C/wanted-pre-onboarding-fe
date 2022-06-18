import React from 'react';
import Feed from './feed/Feed';
import styles from './Feeds.module.css';

const Feeds = (props) => {
  return (
    <ul className={styles.feeds}>
      <Feed />
      <Feed />
      <Feed />
    </ul>
  );
};

export default Feeds;
