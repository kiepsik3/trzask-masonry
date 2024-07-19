import React, { useState, useEffect } from "react";
import cn from "classnames";
import { Modal } from "../Modal/Modal";
import Video from "../Video/Video";
import { Link } from "react-router-dom";
import { ReactComponent as Play } from "../../assets/img/play.svg";
import { ReactComponent as Arrow } from "../../assets/img/arrow.svg";
import "./masonry-wall.scss";

export function MasonryWall(props) {
  const [modal, setModal] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
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
          {element.ytId ? (
            <>
              <div
                className={cn(`item video item-${index + 1}`)}
                style={{
                  backgroundImage: `url("${element.bgImage}")`,
                }}
                onClick={() => setModal(true)}
              >
                <button>
                  Oglądaj showreel
                  <Play />
                </button>
              </div>
              {modal && (
                <Modal onClose={setModal}>
                  <Video
                    ytId={isMobile ? element.ytIdMobile : element.ytId}
                    autoplay={element.autoplay}
                    mute={element.mute}
                    loop={element.loop}
                  />
                </Modal>
              )}
            </>
          ) : element.bgImage ? (
            <>
              {element.link || element.slug ? (
                <Link
                  to={
                    element.link ? element.link : `/pl/skills/${element.slug}`
                  }
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
            <Link
              to={element.link ? element.link : `/pl/skills/${element.slug}`}
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
            </Link>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
