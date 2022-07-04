import React from 'react';
import LikeIcon from '../../../../icons/LikeIcon';
import ChatIcon from '../../../../icons/ChatIcon';
import PlaneIcon from '../../../../icons/PlaneIcon';
import styles from './FeedControls.module.css';

const FeedControls = (props) => {
  return (
    <section className={styles.controls}>
      <div className={styles.buttons}>
        <div className={styles['buttons-left']}>
          <button
            className={`${styles.button}`}
            type="button"
            aria-label="좋아요"
          >
            {' '}
            <LikeIcon size="24" />
          </button>
          <button
            className={`${styles.button}`}
            type="button"
            aria-label="댓글 남기기"
          >
            <ChatIcon size="24" />
          </button>
          <button
            className={`${styles.button}`}
            type="button"
            aria-label="DM 전송하기"
          >
            <PlaneIcon size="24" />
          </button>
        </div>
        <button
          className={`${styles.button}`}
          type="button"
          aria-label="북마크하기"
        ></button>
      </div>
      <strong>좋아요 0개</strong>
    </section>
  );
};

export default FeedControls;
