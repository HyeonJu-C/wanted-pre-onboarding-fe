import React, { useState, useEffect } from 'react';
import useHttp from '../../hooks/use-http';
import Feed from './feed/Feed';
import styles from './Feeds.module.css';

const Feeds = (props) => {
  const [feeds, setFeeds] = useState([]);
  const { isLoading, error, sendRequest } = useHttp();

  useEffect(() => {
    sendRequest({ url: 'data/data.json' }, (data) => setFeeds([...data.feeds]));
  }, [sendRequest]);

  const getCommentsHandler = (comments) => {
    return [comments];
  };

  return (
    <ul className={styles.feeds}>
      {!isLoading &&
        !error &&
        feeds.map((item) => (
          <Feed
            key={Math.random().toString()}
            userName={item.id}
            contents={item.contents}
            image={item.image}
            comments={getCommentsHandler}
          />
        ))}
      {error && <h2>{error}</h2>}
    </ul>
  );
};

export default Feeds;
