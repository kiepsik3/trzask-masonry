import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import cn from "classnames";
import "./header.scss";
import { Menu } from "../Menu/Menu";

export default function Header(props) {
  const [collapsed, setCollapsed] = useState(false);
  const [pinned, setPinned] = useState(true);
  useScrollPosition(
    ({ currPos, prevPos }) => {
      if (currPos.y === prevPos.y) {
        return;
      }

      const windowHeight = window.innerHeight;
      const pageHeight = document.body.scrollHeight;

      currPos.y > 0 ? setCollapsed(true) : setCollapsed(false);
      currPos.y > prevPos.y && currPos.y > 0
        ? setPinned(false)
        : currPos.y + windowHeight < pageHeight && setPinned(true);
    },

    [collapsed],
    undefined,
    true,
    0,
  );

  return (
    <header
      className={cn(
        "header",
        props.isRecommendationsPage && "transparent",
        collapsed && "collapsed",
        pinned && "pinned",
      )}
    >
      <div className="container 2xl:max-w-[1320px] flex items-center justify-between">
        <a
          href="/pl"
          className={cn(
            "header-logo",
            props.isRecommendationsPage && "centered",
          )}
        >
          <Logo />
        </a>
        <Menu menu={props.menu} />
      </div>
    </header>
  );
}
