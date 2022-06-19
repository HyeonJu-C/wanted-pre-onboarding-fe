import React, { useState, useEffect } from 'react';
import Feed from './feed/Feed';
import styles from './Feeds.module.css';

const Feeds = (props) => {
  const getCommentsHandler = (comments) => {
    return [comments];
  };
  const [feeds, setFeeds] = useState([]);
  useEffect(() => {
    fetch('data/data.json') //
      .then((res) => res.json())
      .then((data) => setFeeds([...data.feeds]));
  }, []);

  return (
    <ul className={styles.feeds}>
      {feeds.map((item) => (
        <Feed
          key={Math.random().toString()}
          userName={item.id}
          contents={item.contents}
          image={item.image}
          comments={getCommentsHandler}
        />
      ))}
    </ul>
  );
};

export default Feeds;
