import React from "react";
import styles from "./controls.css";
import { Actions } from "./Actions";
import { KarmaCounter } from "./KarmaCounter";
import { CommentsButton } from "./CommentsButton";

export function Controls() {
  return (
    <div className={styles.controls}>
      <KarmaCounter />
      <CommentsButton />
      <Actions />
    </div>
  );
}
