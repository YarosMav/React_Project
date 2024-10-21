import React, { ChangeEvent, FormEvent, useContext } from 'react';
import { CommentForm } from '../Post/CommentForm';
import { Provider } from 'jotai';
import { commentAtom, myStore } from '../../store/atom';


export function CommentFormContainer() {
  return (
    <Provider store={myStore}>
      <CommentForm />
    </Provider>

  );
}
