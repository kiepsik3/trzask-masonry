import React, { useEffect, useState } from "react";
import monster from "../../assets/img/monster.svg";
import monsterDown from "../../assets/img/monsterDown.svg";
import { ReactComponent as Arrow } from "../../assets/img/arrow.svg";
import "./newsletter.scss";

export function Newsletter() {
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
    <div className="newsletter-wrapper">
      <a href="https://trzask.com/pl/subscribe" target="_blank">
        <div className="container newsletter">
          <div className="info">
            <h2>Wpadaj do nas na newsletter!</h2>
            <p>Odkryj garść szalonych pomysłów Trzaska.</p>
          </div>
          <img src={isMobile ? monsterDown : monster} alt="monster" />

          <button>
            Zapisz się
            <Arrow />
          </button>
        </div>
      </a>
    </div>
  );
}
