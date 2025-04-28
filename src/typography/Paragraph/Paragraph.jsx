import React from "react";
import "./paragraph.scss";
import cn from "classnames";

export default function Paragraph(props) {
  const size = props.small ? "small" : "regular";
  return (
    <p
      className={cn(`paragraph-${size}`, props.opacity && "opacity")}
      style={props.style}
    >
      {props.children}
    </p>
  );
}
