import React, { useEffect, useRef } from 'react';
import styles from './dropdown.css';
import { GenericList } from '../GenericList';
import { generateId } from '../utils/react/generateRandomIndex';
import { CommentIcon, HideIcon, ReportIcon, SaveIcon, ShareIcon } from '../icons';
import ReactDOM from "react-dom";
import { Ecolor, Text } from '../Text';
import { useDropdownToggle } from '../../hooks/useDropdownToggle';

export const LIST = [
  {
    As: "button" as const,
    icon: <CommentIcon />,
    text: "Комментарии",
    className: "interactionBtn",
  },
  {
    As: "button" as const,
    icon: <ShareIcon />,
    text: "Поделиться",
    className: "interactionBtn",
  },
  {
    As: "button" as const,
    icon: <HideIcon />,
    text: "Скрыть",
    className: "interactionBtn",
  },
  {
    As: "button" as const,
    icon: <SaveIcon />,
    text: "Сохранить",
    className: "interactionBtn",
  },
  {
    As: "button" as const,
    icon: <ReportIcon />,
    text: "Пожаловаться",
    className: "interactionBtn",
  },
].map(generateId);

interface IDropdownProps {
  targetRef: React.RefObject<HTMLButtonElement>;
}


export function Dropdown({ targetRef }: IDropdownProps) {
  const { isDropdownOpen, handleToggleDropdown } = useDropdownToggle(); 
  const dropdownRef = useRef<HTMLUListElement>(null);

  const buttonRect = targetRef.current?.getBoundingClientRect();
  const dropdownWidth = dropdownRef.current?.offsetWidth || 0;

  const top = (buttonRect?.y || 0) + window.scrollY + 50;
  const right = window.innerWidth - ((buttonRect?.x || 0) + dropdownWidth + 100);

  useEffect(() => {
    if (isDropdownOpen) {
      dropdownRef.current?.focus();
    }
  }, [isDropdownOpen]);

  const node = document.querySelector("#modal_root");
  if (!node) return null;

  return ReactDOM.createPortal((
        <ul
          className={styles.list}
          ref={dropdownRef}
          style={{
            top: top + "px",
            right: right + "px",
        }}
        >
          <GenericList list={LIST} className={styles.interactionBtn} />
          <button className={styles.closeButton} onClick={handleToggleDropdown}>
          <Text mobileSize={12} size={14} color={Ecolor.grey66}>
            Закрыть
          </Text>
          </button>
        </ul>
        ), node)
}