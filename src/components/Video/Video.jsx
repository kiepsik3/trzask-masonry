import React from "react";
import "./video.scss";

export default function Video(props) {
  return (
    <div className="video">
      <div className="video-wrapper">
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
    </div>
  );
}
