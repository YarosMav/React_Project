import React, { useEffect, useRef, useState } from 'react';
import styles from "./comment.css"
import { UserLink } from './UserLink';
import {  Replies } from '../Replies';
import { KarmaCounter } from '../../../CardsList/Card/Controls/KarmaCounter';
import { useCommentAnswerToggle } from '../../../../hooks/useCommentAnswerToggle';
import { CommentAnswerContainer, ICommentAnswerContainer } from '../../../CommentAnswerContainer';


export interface IComment {
  author?: string;
  body?: string;
  created_utc?: number;
  avatar?: string;
  replies?: {
    data: {
      children: [
        {
          data: IComment;
        },
      ],
    },
  },
}


export function Comment({
  body,
  author,
  avatar,
  created_utc,
  replies,
}: IComment) {
  const [hoursAgo, setHoursAgo] = useState<number | null>(null);
  const { isCommentsAnswOpen, handleToggleCommentsAnsw } = useCommentAnswerToggle();
  const buttonRef = useRef<HTMLButtonElement>(null);



  useEffect(() => {
    if (created_utc) {
    const currentTime = Math.floor(Date.now() / 1000); 
    const hoursDifference = Math.floor((currentTime - created_utc) / 3600);
    setHoursAgo(hoursDifference);
    }
  }, [created_utc]);

  
  return (
    <div className={styles.comment__container}>
    <div className={styles.comment__item}>
      <div className={styles.comment}>
        <div className={styles.comment__rectangle}>
        <KarmaCounter />
        <span className={styles.rectangle}></span>
        </div>
      <div className={styles.comment__content}>
        <div className={styles.header}>
        <UserLink author={author} avatar={avatar} />
        <span className={styles.publishedLabel}>опубликовано </span><span>{hoursAgo}</span> часа(ов) назад
        <span>Лига</span>
        </div>
        <p className={styles.body}>{body}</p>
        <div className={styles.footer} >
        <button className={styles.button} onClick={handleToggleCommentsAnsw} ref={buttonRef}>
          ответить
        </button>
        </div>
      </div>
      </div>
      <div className={styles.reply}>
      {replies?.data?.children && replies.data.children.length > 0 && (
        <Replies
        author={replies.data.children[0].data.author}
        body={replies.data.children[0].data.body}
        avatar={replies.data.children[0].data.avatar}
        created_utc={replies.data.children[0].data.created_utc}
        replies={replies.data.children[0].data.replies}
        />
        )}
      </div>
    </div>
     {isCommentsAnswOpen &&  (
    <CommentAnswerContainer
    author={author}
  />
    )}
     </div>
  );
}