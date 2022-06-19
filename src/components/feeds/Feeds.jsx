import React, { useState } from 'react';
import Feed from './feed/Feed';
import styles from './Feeds.module.css';

const Feeds = (props) => {
  const getCommentsHandler = (comments) => {
    console.log('here', comments);
    return [comments];
  };
  return (
    <ul className={styles.feeds}>
      <Feed comments={getCommentsHandler} />
      <Feed />
      <Feed />
    </ul>
  );
};

export default Feeds;
