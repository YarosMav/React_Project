import React, { ChangeEvent } from 'react';
import styles from './commentform.css';
import { useAtom } from 'jotai';
import { commentAtom } from '../../../store/atom';
import { Field, Form, Formik } from 'formik';



export function CommentForm() {
  const [comment, setComment] = useAtom(commentAtom);


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
      alert("форма отправленна")
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
  );
}
