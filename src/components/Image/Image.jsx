import React from "react";
import "./image.scss";
import cn from "classnames";
import { Link } from "react-router-dom";

export default function Image(props) {
  return (
    <div
      className={cn(
        "image",
        props.withBackground && "with-background",
        props.caption && "caption",
      )}
    >
      {props.link ? (
        <Link to={props.link} target={props.target}>
          <img src={props.src} alt="Background" />
        </Link>
      ) : (
        <img src={props.src} alt="Background" />
      )}
      {props.caption && <span className="image-caption">{props.caption}</span>}
    </div>
  );
}
