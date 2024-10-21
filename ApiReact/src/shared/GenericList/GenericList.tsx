import React from "react";
import ReactDOM from "react-dom";

interface IItem {
  id: string;
  text: string;
  onClick?: (id: string) => void;
  className?: string;
  As?: "a" | "li" | "button" | "div";
  href?: string;
  icon?: React.ReactNode;
}

interface IGenericListProps {
  list: IItem[];
  className?: string;
}

const noop = () => {};

export function GenericList({ list, className }: IGenericListProps) {

  return (
    <>
      {list.map(
        ({
          As = "div",
          text,
          onClick = noop,
          className: itemClassName,
          id,
          href,
          icon,
        }) => (
          <As
            className={`${className || ""} ${itemClassName || ""}`}
            onClick={() => onClick(id)}
            key={id}
            href={href}
          >
            {icon} {text}
          </As>
        )
      )}
    </>
  );
}