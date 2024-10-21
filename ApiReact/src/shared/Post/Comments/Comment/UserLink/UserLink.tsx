import React from 'react';
import styles from './userlink.css';

interface IUserLinkProps {
  author?: string;
  avatar?: string;
}

export function UserLink({author, avatar}: IUserLinkProps) {
  return (
    <div>
      <span className={styles.avatar}>
        {avatar}
      </span>
      <span className={styles.username}>
        {author}
      </span> 
    </div>
    );
}
