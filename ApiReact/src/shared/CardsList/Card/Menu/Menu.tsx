import React, { useEffect, useRef, useState } from "react"
import styles from "./menu.css"
import { MenuIcon } from "../../../icons"
import { Dropdown } from "../../../DropDown"
import { useDropdownToggle } from "../../../../hooks/useDropdownToggle";

interface IMenu {
  onClose?: () => void;
}

export function Menu(props: IMenu) {
  const { isDropdownOpen, handleToggleDropdown, closeDropdown } = useDropdownToggle();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handlerClick(event: MouseEvent) {
      if (event.target instanceof Node && !buttonRef.current?.contains(event.target)) {
        closeDropdown();
        props.onClose?.();
      }
    }
    document.addEventListener('click', handlerClick);
    return () => {
      document.removeEventListener('click', handlerClick);
    };
  }, [closeDropdown, props.onClose]);

  return (
    <div className={styles.menu}>
      <button className={styles.menuButton} onClick={handleToggleDropdown} ref={buttonRef}>
        <MenuIcon />
      </button>
      {isDropdownOpen &&
      <Dropdown targetRef={buttonRef} />}
    </div>
  );
}