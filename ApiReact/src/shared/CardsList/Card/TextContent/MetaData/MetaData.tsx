import React, { useEffect, useState } from "react";
import styles from "./metadata.css";

interface IMetaDataPosts {
  author?: string;
  thumbnail?: string;
  created?: number;
}

export function MetaData({ author, thumbnail, created = 0 }: IMetaDataPosts) {
  const [hoursAgo, setHoursAgo] = useState<number | null>(null);

  useEffect(() => {
    const currentTime = Math.floor(Date.now() / 1000); // текущее время в секундах
    const hoursDifference = Math.floor((currentTime - created) / 3600); // разница в часах
    setHoursAgo(hoursDifference);
  }, [created]);

  return (
    <div className={styles.metaData}>
      <div className={styles.userLink}>
        <img
          className={styles.avatar}
          src={thumbnail !== "" ? (
            thumbnail
          ) : (
            "https://cdn.discordapp.com/attachments/980188425560915970/1144993644860948551/ib7scrg5t7w61.png"
          )}
          alt="avatar"
        />
        <a href="#user-rul" className={styles.username}>
          {author}
        </a>
      </div>
      <span className={styles.createdAt}>
        <span className={styles.publishedLabel}>опубликовано </span><span>{hoursAgo}</span> часа(ов) назад
      </span>
    </div>
  );
}
