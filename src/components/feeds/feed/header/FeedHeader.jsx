import React from 'react';
import styles from './FeedHeader.module.css';

const FeedHeader = (props) => {
  return (
    <section className={styles.header}>
      <div className={styles['header-left']}>
        <div className={styles.profile}></div>
        <h1 className={styles.id}>{props.userName}</h1>
      </div>
      <button
        className={styles.more}
        type="button"
        aria-label="피드에 대한 더 많은 정보를 볼 수 있습니다"
      >
        ...
      </button>
    </section>
  );
};

export default FeedHeader;
