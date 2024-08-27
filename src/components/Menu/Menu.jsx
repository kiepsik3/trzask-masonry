import React, { useState, useEffect } from "react";
import { Spin as Hamburger } from "hamburger-react";
import cn from "classnames";
import { useLocation } from "react-router-dom";
import "./menu.scss";

export function Menu(props) {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();

  const currentSlug = location.pathname.substring(
    location.pathname.lastIndexOf("/"),
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && <div className="menu-cover-bg" />}
      <div className={cn("menu", isOpen && "active")}>
        <ul>
          {props?.menu?.map((item, idx) =>
            item.items ? (
              <React.Fragment key={idx}>
                <li>
                  <a
                    href={`/pl${item.slug}`}
                    className={item.slug === currentSlug ? "selected" : ""}
                  >
                    {item.name}
                  </a>
                </li>
                <ul>
                  {item.items.map((subItem, idx) => (
                    <li key={idx}>
                      <a
                        href={`/pl/skills${subItem.slug}`}
                        className={
                          subItem.slug === currentSlug ? "selected" : ""
                        }
                      >
                        {subItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </React.Fragment>
            ) : (
              <li key={idx}>
                <a
                  href={`/pl${item.slug}`}
                  className={item.slug === currentSlug ? "selected" : ""}
                  key={idx}
                >
                  {item.name}
                </a>
              </li>
            ),
          )}
          <li>
            <a href="/en">IN ENGLISH</a>
          </li>
        </ul>
      </div>
      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        size={48}
        color={isOpen ? "#ffffff" : "#000000"}
        distance="sm"
      />
    </>
  );
}
