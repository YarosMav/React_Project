import React, { useContext } from "react";
import styles from "./card.css";
import { TextContent } from "./TextContent";
import { Preview } from "./Preview";
import { Menu } from "./Menu";
import { Controls } from "./Controls";

interface ICardProps {
  postId?: string;
  author?: string;
  title?: string;
  thumbnail?: string;
  score?: number;
  created?: number;
  previewImg?: string;
}



export function Card({ 
  title,
  author,
  thumbnail,
  created,
  previewImg,
  postId,
}: ICardProps) {

  return (
      <li className={styles.card}>
        <TextContent 
        postId={postId}
        title={title}
        author={author}
        thumbnail={thumbnail}
        created={created}
        />
        <Preview previewImg={previewImg} />
        <Menu />
        <Controls />
      </li>

  );
}
