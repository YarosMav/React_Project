import React, { ChangeEvent, FormEvent, useEffect } from 'react';
import styles from './commentanswerform.css';
import { useDispatch } from 'react-redux';
import { updateAnswComment, updateComment } from '../../../../../store/reducer';
import { Formik, Form, Field } from 'formik';
import { commentAnswAtom } from '../../../../../store/atom';
import { useAtom } from 'jotai';

type Props = {
  author?: string;
}


export function CommentAnswerForm({ author }: Props) {
  const [comment, setComment] = useAtom(commentAnswAtom);

  useEffect(() => {
    if (author) {
      setComment(`${author}, `);
    }
  }, [author, setComment]);

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };


  function validateComment() {
    let error;
    if (!comment) {
      return error = "введите что-нибудь";
    } else if (comment.length < 3) {
      return error = 'слишком мало букв';
    }
    return error;
  }
  


  return (
    <Formik initialValues={{
      comment: "",
    }}
    onSubmit={() => {
      alert("комментарий отправлен")
    }}
    >
      {({ errors, touched, validateField }) => (
    <Form className={styles.form}>
      <Field 
      name="comment"
      validate={validateComment}
      value={comment} 
      onChange={onChange} 
      className={styles.input}
      />
    {errors.comment && touched.comment && <div>{errors.comment}</div>}
      <button type="submit" onClick={() => validateField('comment')} className={styles.button}>
        Комментировать
      </button>
    </Form>
      )}
    </Formik>
  )
}
