import React, { useEffect, useState } from 'react';
import styles from './reply.css';
import { Comment, IComment } from '../../Comment';

export interface IReply {
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

export function Reply( { author, body, created_utc, avatar, replies }: IReply) {
  return (
    <Comment
    author={author}
    body={body}
    created_utc={created_utc}
    avatar={avatar}
    replies={replies}
     />
  );
}
