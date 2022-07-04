import React, { useRef, useState, useEffect } from 'react';
import FeedControls from './controls/FeedControls';
import styles from './FeedMain.module.css';

const FeedMain = (props) => {
  const [isImageLoaded, setImageLoad] = useState(false);
  const imageRef = useRef();

  const onLoadHandler = () => {
    if (imageRef.current && imageRef.current.complete) {
      setImageLoad(true);
    }
  };

  useEffect(() => {
    onLoadHandler();
  }, []);

  return (
    <section>
      <img
        className={styles.image}
        src={props.image}
        alt={`${props.userName}의 피드 이미지`}
        ref={imageRef}
        onLoad={onLoadHandler}
      />
      {!isImageLoaded && <p className={styles.contents}>loading...</p>}
      {isImageLoaded && (
        <>
          <p className={styles.contents}>{props.contents}</p>
          <FeedControls />
        </>
      )}
    </section>
  );
};

export default FeedMain;
