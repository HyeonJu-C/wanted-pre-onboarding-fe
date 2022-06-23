import React from 'react';
import { useRef } from 'react';
import styles from './CommentInput.module.css';

const CommentInput = (props) => {
  const commentInput = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const comment = commentInput.current.value;
    comment.trim().length > 0 &&
      props.commentHandler({
        userName: localStorage.getItem('id'),
        contents: comment,
      });

    commentInput.current.value = '';
  };

  return (
    <form className={styles['comment-form']} action="" onSubmit={submitHandler}>
      <input
        placeholder="댓글 달기"
        className={styles.input}
        type="text"
        ref={commentInput}
      />
      <button className={styles.button} type="submit">
        게시
      </button>
    </form>
  );
};

export default CommentInput;
