import React, { useState } from "react";
import cn from "classnames";
import { Modal } from "../Modal/Modal";
import Video from "../Video/Video";
import { Link } from "react-router-dom";
import { ReactComponent as Play } from "../../assets/img/play.svg";
import { ReactComponent as Arrow } from "../../assets/img/arrow.svg";

import "./masonry-wall.scss";

export function MasonryWall(props) {
  const [modal, setModal] = useState(false);
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
              >
                <button onClick={() => setModal(true)}>
                  Oglądaj w showreel
                  <Play />
                </button>
              </div>
              {modal && (
                <Modal onClose={setModal}>
                  <Video
                    ytId={element.ytId}
                    autoplay={element.autoplay}
                    mute={element.mute}
                    loop={element.loop}
                  />
                </Modal>
              )}
            </>
          ) : element.bgImage ? (
            <Link
              to={`/pl/masonry-wall/${element.slug}`}
              className={cn(`item item-${index + 1}`)}
            >
              <img src={element.bgImage} alt={element.bgImage} />
            </Link>
          ) : (
            <div
              className={cn(
                `item text item-${index + 1} ${element.bgColor === "red" ? "red" : element.bgColor === "blue" ? "blue" : ""}`,
              )}
            >
              <h3>{element.title}</h3>
              <p>{element.caption}</p>
              <Link to={`/pl/masonry-wall/${element.slug}`}>
                Więcej
                <Arrow />
              </Link>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
