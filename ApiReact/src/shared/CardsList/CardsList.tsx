import React, { useEffect, useRef, useState } from "react";
import styles from "./cardslist.css";
import { Card } from "./Card/Card";
import { postsContext } from "../context/postContext";


export function CardsList() {
  const { posts, loading, errorLoading, token, nextAfter, load} = React.useContext(postsContext);
  const [showButton, setShowButton] = useState(false);
  const bottomOfList = useRef<HTMLDivElement>(null);
  const [counter, setCounter] = useState(0);


function continueLoading() {
    setCounter(0);
    setShowButton(false);
    load();
  }

  useEffect(() => {
  
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !showButton) {
        if (counter === 2) {
          setShowButton(true);
          return
        }
        load();
        setCounter(prevCounter => prevCounter + 1);
      }

    }, {
      rootMargin: "10px",
    });

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current)
    }
    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current)
      }
    }
  }, [nextAfter])

  return (
    <ul className={styles.cardslist}>
      {posts.length === 0 && !loading && !errorLoading && (
        <div style={{ textAlign: "center"}}>Нет ни одного поста</div>
      )}
      {posts.map((post) => (
        <Card
        key={post.id}
        author={post.author}
        title={post.title}
        thumbnail={post.sr_detail?.icon_img}
        score={post.score}
        created={post.created}
        previewImg={post.thumbnail}
        postId={post.id}
        />
      ))}

      <div ref={bottomOfList} />
      {showButton && (
        <div className={styles.btnContainer}>
          <button
            className={styles.button}
            type="button"
            onClick={continueLoading}
          >
            Показать еще
          </button>
        </div>
      )}

      {loading && (
        <div style={{ textAlign: "center"}}>Загрузка...</div>
      )}

      {errorLoading && (
        <div role="alert" style={{ textAlign: "center"}}>
          {errorLoading}
        </div>
      )}
    </ul>
  );
}
