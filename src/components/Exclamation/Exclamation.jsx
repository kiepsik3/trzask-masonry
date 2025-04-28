import React from "react";
import Paragraph from "../../typography/Paragraph/Paragraph";
import cn from "classnames";
import exclamation from "../../assets/img/exclamation.svg";
import "./exclamation.scss";

export default function Exclamation(props) {
  return (
    <div className={cn("exclamation", props.isRight && "right")}>
      <Paragraph>
        <span className="exclamation-featured">{props.text[0]}</span>{" "}
        <span>{props.text[1]}</span>
      </Paragraph>
      <div
        className="exclamation-bg"
        style={{ backgroundImage: `url('${exclamation}')` }}
      />
    </div>
  );
}
