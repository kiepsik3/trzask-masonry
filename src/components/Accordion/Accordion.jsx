import React, { useState } from "react";
import cn from "classnames";
import { ReactComponent as Arrow } from "../../assets/img/arrow.svg";
import "./accordion.scss";
import { Headline3 } from "../../typography/Headlines/Headlines";
import Paragraph from "../../typography/Paragraph/Paragraph";

export function Accordion(props) {
  return (
    <div className="accordion">
      {props.items?.map((item, idx) => (
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
      <Headline3>
        {props.title} <Arrow />
      </Headline3>
      <div className="accordion-content">
        {props.content.map((content, idx) => (
          <Paragraph small opacity key={idx}>
            {content}
          </Paragraph>
        ))}
      </div>
    </div>
  );
}
