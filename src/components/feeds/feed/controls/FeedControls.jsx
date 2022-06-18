import React from 'react';
import styles from './FeedControls.module.css';

const FeedControls = (props) => {
  return (
    <section className={styles.controls}>
      <div className={styles.buttons}>
        <div className={styles['buttons-left']}>
          <button
            className={`${styles.button} ${styles.like}`}
            type="button"
            aria-label="좋아요"
          ></button>
          <button
            className={`${styles.button} ${styles.comment}`}
            type="button"
            aria-label="댓글 남기기"
          ></button>
          <button
            className={`${styles.button} ${styles.dm}`}
            type="button"
            aria-label="DM 전송하기"
          ></button>
        </div>
        <button
          className={`${styles.button} ${styles.bookmark}`}
          type="button"
          aria-label="북마크하기"
        ></button>
      </div>
      <strong>좋아요 0개</strong>
    </section>
  );
};

export default FeedControls;
