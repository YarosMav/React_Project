import React from "react";
import styles from "./userblock.css";
import { AnonIcon } from "../../../icons";
import { Break } from "../../../Break";
import { Ecolor, Text } from "../../../Text";

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
  loading?: boolean;
}

export function UserBlock({ avatarSrc, username, loading }: IUserBlockProps) {
  return (
    <a
      href="https://www.reddit.com/api/v1/authorize?client_id=-3FX6jl6aic54REaMy8Kqw&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
      className={styles.userBox}
    >
      <div className={styles.avatarBox}>
        {avatarSrc ? (
          <img
            src={avatarSrc}
            alt="user avatar"
            className={styles.avatarImage}
          />
        ) : (
          <AnonIcon />
        )}
      </div>
      <div className={styles.username}>
        <Break size={12}/>
        {loading ? (
          <Text size={20} color={Ecolor.grey99}>Загрузка...</Text>
        ) : (
          <Text size={20} color={username ? Ecolor.black : Ecolor.grey99}>{username || "Аноним"}</Text>
        )}
        </div>
    </a>
  );
}
