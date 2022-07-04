import React from 'react';
import styles from './FeedComments.module.css';
import Comment from './comment/Comment';

const FeedComments = (props) => {
  return (
    <section className={styles.comments}>
      <ul>
        {props.comments.map((comment) => (
          <Comment
            key={comment.key}
            userName={comment.userName}
            contents={comment.contents}
          />
        ))}
      </ul>
    </section>
  );
};

export default FeedComments;
