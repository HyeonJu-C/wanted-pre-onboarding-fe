import React, { useState, useRef, useEffect } from 'react';
import FeedComments from './comments/FeedComments';
import CommentInput from './comments/input/CommentInput';
import styles from './Feed.module.css';
import FeedHeader from './header/FeedHeader';
import FeedMain from './main/FeedMain';

const Feed = (props) => {
  const [comments, setComments] = useState([]);

  const addCommentHandler = (comment) => {
    comment.key = Math.random().toString();
    setComments((prev) => [comment, ...prev]);
  };

  return (
    <li className={styles.feed} key={props.id}>
      <FeedHeader userName={props.userName} />
      <FeedMain
        userName={props.userName}
        contents={props.contents}
        image={props.image}
      />
      {comments.length > 0 && <FeedComments comments={comments} />}
      <CommentInput onAddComment={addCommentHandler} />
    </li>
  );
};
export default Feed;
