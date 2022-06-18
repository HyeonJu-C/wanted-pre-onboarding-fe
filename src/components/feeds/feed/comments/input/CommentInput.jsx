import React from 'react';
import styles from './CommentInput.module.css';

const CommentInput = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form className={styles['comment-form']} action="" onSubmit={submitHandler}>
      <input placeholder="댓글 달기" className={styles.input} type="text" />
      <button className={styles.button} type="submit">
        게시
      </button>
    </form>
  );
};

export default CommentInput;
