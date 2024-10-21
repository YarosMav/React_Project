import React from 'react';
import styles from './comments.css';
import { useCommentsData } from '../../../hooks/useCommentsData';
import { Comment } from './Comment/Comment';
import {  ICommentsContextData } from '../../context/commentsContext';

interface ICommentsProps {
  postId?: string;
}

export function Comments( { postId }: ICommentsProps) {
  const [comments] = useCommentsData({ postId });
  
  return (
    <div className={styles.commentsBlock}>
        {comments 
        && comments.map((comment: ICommentsContextData) => (
          <Comment 
          author={comment.author}
          key={comment.id}
          created_utc={comment.created_utc}
          body={comment.body}
          avatar={comment.avatar}
          replies={comment.replies}
          />
        ))}
    </div>
  );
}
