import React from 'react';
import styles from './Comment.module.css';

const Comment = (props) => {
  return (
    <li className={styles.comment}>
      <h1 className={styles['comment-id']}>{props.userName}</h1>
      <p className={styles['comment-content']}>{props.contents}</p>
    </li>
  );
};

export default Comment;
