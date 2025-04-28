import React from "react";
import cn from "classnames";
import "./author.scss";

export default function Author(props) {
  return (
    <div className={cn("author", props.isExtended && "extended")}>
      <img src={props.img} alt="Author" />
      <div className="author-info">
        {props.isExtended && <span className="author-headline">Autor</span>}
        {props.isExtended && <img src={props.img} alt="Author" />}
        <span>
          {props.name}{" "}
          {props.isExtended && (
            <>
              / <a href={`mailto:${props.email}`}>{props.email}</a>
            </>
          )}
        </span>
        {props.isExtended ? (
          <span>{props.bio}</span>
        ) : (
          <span>{props.role}</span>
        )}
      </div>
    </div>
  );
}
