import React from "react";
import styles from "./preview.css";

interface IPreviewProps {
  previewImg: string | undefined;
}

export function Preview({ previewImg }: IPreviewProps) {


  return (
    <div className={styles.preview}>
      { previewImg && (previewImg.endsWith(".jpg") || previewImg.endsWith(".jpg")) ? (
        <img
        className={styles.previewImg}
        src={previewImg}
      />
      ) : (
        <img
        className={styles.previewImg}
        src="https://cdn.discordapp.com/attachments/980188425560915970/1144976635628634132/v-rossii-zakryli-delo-o-polnoj-blokirovke-portala-reddit_16838078261628858942.jpg"
      />
      )}
    </div>
  );
}
