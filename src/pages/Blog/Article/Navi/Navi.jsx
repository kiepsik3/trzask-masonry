import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import "./navi.scss";

export default function Navi(props) {
  const { articles, current, fixed } = props;

  function PreviousItem(array) {
    const index = array.indexOf(current);
    if (index !== -1 && index !== 0) return array[index - 1];
  }

  function NextItem(array) {
    const index = array.indexOf(current);
    if (index < array.length - 1) return array[index + 1];
  }

  const prevItem = PreviousItem(articles);
  const nextItem = NextItem(articles);

  const [pinned, setPinned] = useState(false);
  useScrollPosition(
    ({ currPos, prevPos }) => {
      if (currPos.y === prevPos.y) {
        return;
      }
      const windowHeight = window.innerHeight;
      const pageHeight = document.body.scrollHeight;

      pageHeight - (currPos.y + windowHeight) > 150 &&
      currPos.y < prevPos.y &&
      currPos.y > 0
        ? setPinned(true)
        : setPinned(false);
    },

    [],
    undefined,
    true,
    0,
  );

  return (
    <div className={cn("navi", pinned && "pinned", fixed && "fixed")}>
      <div className="navi-container">
        <Link
          to={`/pl/blog/${prevItem?.slug}`}
          className={cn(
            "navi-link",
            prevItem?.slug === undefined && "disabled",
          )}
          ref={(el) => {
            el &&
              fixed &&
              el.style.setProperty(
                "cursor",
                prevItem?.slug === undefined ? "default" : "pointer",
                "important",
              );
          }}
        >
          <FaArrowLeft />
          Poprzedni
        </Link>
        <Link
          to="/pl/blog"
          className="navi-link"
          ref={(el) => {
            el &&
              fixed &&
              el.style.setProperty("cursor", "pointer", "important");
          }}
        >
          Lista
        </Link>
        <Link
          to={`/pl/blog/${nextItem?.slug}`}
          className={cn(
            "navi-link",
            nextItem?.slug === undefined && "disabled",
          )}
          ref={(el) => {
            el &&
              fixed &&
              el.style.setProperty(
                "cursor",
                nextItem?.slug === undefined ? "default" : "pointer",
                "important",
              );
          }}
        >
          Następny
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
}
