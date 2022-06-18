import React from 'react';
import styles from './FeedComments.module.css';
import Comment from './comment/Comment';

const FeedComments = (props) => {
  return (
    <section className={styles.comments}>
      <ul>
        <Comment />
        <Comment />
        <Comment />
      </ul>
    </section>
  );
};

export default FeedComments;
