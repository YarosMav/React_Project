import React, { useState } from "react";
import styles from "./title.css";
import { Link } from "react-router-dom";

export interface ITitleProps {
  title?: string;
  postId?: string;
}

export function Title({ 
  title,
  postId,
  }: ITitleProps) {
  return (
    <h2 className={styles.title}>
      <Link to={`/posts/${postId}`} className={styles.postLink}>
        {title}
      </Link>
    </h2>
  );
}
