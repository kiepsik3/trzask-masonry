import React from "react";
import "./video.scss";
import cn from "classnames";

export default function Video(props) {
  return (
    <div
      className={cn(
        "video",
        props.withBackground && "with-background",
        props.caption && "caption",
      )}
      style={{ height: props.inContent ? "" : "90vh" }}
    >
      <div className={cn(props.inContent ? "video-wrapper" : "")}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${props.ytId}?autoplay=${props.autoplay}&mute=${props.mute}&loop=${props.loop}`}
          title="Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      {props.caption && <span className="video-caption">{props.caption}</span>}
    </div>
  );
}
