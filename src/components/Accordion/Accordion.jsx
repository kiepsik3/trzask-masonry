import React, { useState } from "react";
import cn from "classnames";
import { ReactComponent as Arrow } from "../../assets/img/arrow.svg";
import "./accordion.scss";

export function Accordion(props) {
  return (
    <div className="accordion">
      {props.items.map((item, idx) => (
        <AccordionItem {...item} key={idx} />
      ))}
    </div>
  );
}

function AccordionItem(props) {
  const [active, setActive] = useState(false);
  return (
    <div
      className={cn("accordion-element", active ? "active" : "")}
      onClick={() => setActive(!active)}
    >
      <h3>
        {props.title} <Arrow />
      </h3>
      <div className="accordion-content">
        {props.content.map((content, idx) => (
          <p key={idx}>{content}</p>
        ))}
      </div>
    </div>
  );
}
