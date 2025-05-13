import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./button.scss";

export default function Button(props) {
  const { label, onClick, href, withArrow } = props;
  return (
    <>
      {href ? (
        <a className="button" href={href}>
          {label}
          {withArrow && <FaArrowRight />}
          <div className="button-border" />
        </a>
      ) : (
        <button className="button" onClick={onClick}>
          {label}
          {withArrow && <FaArrowRight />}
          <div className="button-border" />
        </button>
      )}
    </>
  );
}
