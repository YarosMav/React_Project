import React from 'react';
import styles from './replies.css';
import { IReply, Reply } from './Reply';
import { IComment } from '../Comment';

export interface IRepliesData {
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
  };
}

export function Replies( { author, body, avatar, created_utc, replies }: IRepliesData) {
  return (
    <Reply 
     author={author}
     body={body} 
     avatar={avatar}
     replies={replies}
     created_utc={created_utc} />
     
  );
}
