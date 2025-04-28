import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./button.scss";

export default function Button(props) {
  const { label, onClick } = props;
  return (
    <>
      <button className="button" onClick={onClick}>
        {label}
        <FaArrowRight />
        <div className="button-border" />
      </button>
    </>
  );
}
