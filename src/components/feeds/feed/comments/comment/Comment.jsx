import React from 'react';
import styles from './Comment.module.css';

const Comment = (props) => {
  return (
    <li className={styles.comment}>
      <h1 className={styles['comment-id']}>fgds</h1>
      <p className={styles['comment-content']}>안녕하세요?</p>
    </li>
  );
};

export default Comment;
