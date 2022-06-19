import React, { useState } from 'react';
import FeedComments from './comments/FeedComments';
import CommentInput from './comments/input/CommentInput';
import FeedControls from './controls/FeedControls';
import styles from './Feed.module.css';

const Feed = (props) => {
  const [comments, setComments] = useState([]);

  const addCommentHandler = (comment) => {
    comment.key = Math.random().toString();
    setComments((prev) => [comment, ...prev]);
  };

  return (
    <li className={styles.feed}>
      <section className={styles.header}>
        <div className={styles['header-left']}>
          <div className={styles.profile}></div>
          <h1 className={styles.id}>fgsfgsdfhshsg</h1>
        </div>
        <button
          className={styles.more}
          type="button"
          aria-label="피드에 대한 더 많은 정보를 볼 수 있습니다"
        >
          ...
        </button>
      </section>
      <img
        className={styles.image}
        src="https://source.unsplash.com/random/600x500"
        alt="feed image"
      />
      <FeedControls />
      {comments.length > 0 && <FeedComments comments={comments} />}
      <CommentInput commentHandler={addCommentHandler} />
    </li>
  );
};
export default Feed;
