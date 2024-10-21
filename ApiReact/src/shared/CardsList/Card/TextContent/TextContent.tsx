import React from "react";
import styles from "./textcontent.css";
import { MetaData } from "./MetaData";
import { Title } from "./Title";

interface ITextContentProps {
  title?: string;
  author?: string;
  thumbnail?: string;
  created?: number;
  postId?: string;
}

export function TextContent({
  title,
  author,
  thumbnail,
  created,
  postId,
}: ITextContentProps) {
  return (
    <div className={styles.textContent}>
      <MetaData author={author} thumbnail={thumbnail} created={created} />
      <Title postId={postId} title={title} />
    </div>
  );
}
