import React from 'react';
import styles from './menuitemslist.css';
import { Ecolor, Text } from "../../../../Text"
import { HideIcon, ReportIcon } from '../../../../icons';
interface IMenuItemsListProps {
  postId: string;
}

export function MenuItemsList({postId}: IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <HideIcon />
        <Text size={12} color={Ecolor.grey99}>Скрыть</Text>
      </li>
      <div className={styles.divider} />

      <li className={styles.menuItem}>
        <ReportIcon />
        <Text size={12} color={Ecolor.grey99}>Пожаловаться</Text>
      </li>
    </ul>
  );
}
