import React, { useEffect, useRef } from 'react';
import styles from './post.css';
import ReactDOM from "react-dom";
import { Comments } from './Comments';
import { CommentFormContainer } from '../CommentFormContainer';
import { CommentsContextProvider } from '../context/commentsContext';
import { useNavigate, useParams } from 'react-router-dom';



export function Post() {
  const { postId } = useParams();
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  console.log(postId);

    useEffect(() => {
      function handleClick(event: MouseEvent) {
        if (event.target instanceof Node && !ref.current?.contains(event.target))
        navigate('/')
      }
      document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick);
      }
    }, []);
    
    const node = document.querySelector("#modal_root");
    if (!node) return null;
    
  return ReactDOM.createPortal((
    <div className={styles.modal} ref={ref}>
      <h2>Следует отметить, что новая модель организационной деятельности поможет</h2>
      <div className={styles.content}>
      <p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как </p>
      <p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как </p>
      <p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как </p>
      </div>
      <CommentFormContainer />
      <CommentsContextProvider>
        <Comments postId={postId} />
      </CommentsContextProvider>
    </div>
  ), node);
}
