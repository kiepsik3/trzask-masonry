import React, { useState, useEffect } from "react";
import cn from "classnames";
import Video from "../Video/Video";
import { Link } from "react-router-dom";
import { ReactComponent as Play } from "../../assets/img/play.svg";
import { ReactComponent as Arrow } from "../../assets/img/arrow.svg";
import "./masonry-wall.scss";

export function MasonryWall(props) {
  const [cover, setCover] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const videoElement = document.getElementById("video");

    // document.body.addEventListener("click", () => {
    //   videoElement.play();
    // });
    //
    // document.body.addEventListener("touchstart", () => {
    //   videoElement.play();
    // });

    // videoElement.addEventListener("suspend", () => {
    //   videoElement.play();
    // });

    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    };
  }, []);

  const isMobile = width < 768;

  return (
    <div className={cn("masonry-wall", `set-${props.set}`)}>
      {props.data?.map((element, index) => (
        <React.Fragment key={index}>
          {element.showReelUrl ? (
            <>
              <div className={cn(`item video item-${index + 1}`)}>
                {cover ? (
                  <>
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      src={element.showReelUrl}
                      onClick={() => setCover(false)}
                    />
                    <button onClick={() => setCover(false)}>
                      Oglądaj showreel
                      <Play />
                    </button>
                  </>
                ) : (
                  <Video
                    ytId={isMobile ? element?.ytIdMobile : element?.ytId}
                    autoplay={!cover}
                    mute={element.mute}
                    loop={element.loop}
                  />
                )}
              </div>
            </>
          ) : element.videoUrl ? (
            <>
              {element.link ? (
                <a
                  href={element.link}
                  target={element.target}
                  className={cn(
                    `item video item-${index + 1}`,
                    element.rotateRight && "rotate-right",
                    element.rotateLeft && "rotate-left",
                  )}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    src={element.videoUrl}
                    id="video"
                  />
                </a>
              ) : element.slug ? (
                <Link
                  to={`/pl/skills/${element.slug}`}
                  className={cn(
                    `item video item-${index + 1}`,
                    element.rotateRight && "rotate-right",
                    element.rotateLeft && "rotate-left",
                  )}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    src={element.videoUrl}
                    id="video"
                  />
                </Link>
              ) : (
                <div className={cn(`item video item-${index + 1}`)}>
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    src={element.videoUrl}
                    id="video"
                  />
                </div>
              )}
            </>
          ) : element.bgImage ? (
            <>
              {element.link ? (
                <a
                  href={element.link}
                  target={element.target}
                  className={cn(
                    `item item-${index + 1}`,
                    element.rotateRight && "rotate-right",
                    element.rotateLeft && "rotate-left",
                  )}
                >
                  <img
                    src={element.bgImage}
                    alt={element.alt ? element.alt : element.bgImage}
                  />
                </a>
              ) : element.slug ? (
                <Link
                  to={`/pl/skills/${element.slug}`}
                  className={cn(
                    `item video item-${index + 1}`,
                    element.rotateRight && "rotate-right",
                    element.rotateLeft && "rotate-left",
                  )}
                >
                  <img
                    src={element.bgImage}
                    alt={element.alt ? element.alt : element.bgImage}
                  />
                </Link>
              ) : (
                <div
                  className={cn(
                    `item item-${index + 1}`,
                    element.rotateRight && "rotate-right",
                    element.rotateLeft && "rotate-left",
                  )}
                >
                  <img
                    src={element.bgImage}
                    alt={element.alt ? element.alt : element.bgImage}
                  />
                </div>
              )}
            </>
          ) : (
            <>
              {element.link ? (
                <a
                  href={element.link}
                  target={element.target}
                  className={cn(
                    `item text item-${index + 1} ${element.bgColor === "red" ? "red" : element.bgColor === "blue" ? "blue" : ""}`,
                  )}
                >
                  <h3>{element.title}</h3>
                  <p>{element.caption}</p>
                  <button>
                    Więcej
                    <Arrow />
                  </button>
                </a>
              ) : (
                <Link
                  to={`/pl/skills/${element.slug}`}
                  className={cn(
                    `item text item-${index + 1} ${element.bgColor === "red" ? "red" : element.bgColor === "blue" ? "blue" : ""}`,
                  )}
                >
                  <h3>{element.title}</h3>
                  <p>{element.caption}</p>
                  <button>
                    Więcej
                    <Arrow />
                  </button>
                </Link>
              )}
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
