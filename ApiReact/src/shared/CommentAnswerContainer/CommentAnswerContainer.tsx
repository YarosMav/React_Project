import React, { ChangeEvent, FormEvent, useEffect } from 'react';
import styles from './commentanswercontainer.css';
import { RootState, updateAnswComment, updateComment } from '../../store/reducer';
import { useSelector, useDispatch } from 'react-redux';
import { CommentAnswerForm } from '../Post/Comments/Comment/CommentAnswerForm';
import { Provider } from 'jotai';
import { myStore } from '../../store/atom';

export interface ICommentAnswerContainer {
  author?: string;
}

export function CommentAnswerContainer( { author }: ICommentAnswerContainer) {
  const answComment = useSelector<RootState, string>(state => state.answComment || author || "");

  return (
    <Provider store={myStore}>
    <CommentAnswerForm 
    author={author}
    />
    </Provider>
  );
}
