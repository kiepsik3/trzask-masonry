import React from "react";
import { Row, Col } from "react-bootstrap";
import Paragraph from "../../typography/Paragraph/Paragraph";
import "./quote.scss";
import cn from "classnames";

export default function Quote(props) {
  return (
    <div className={cn("quote", props.bold && "bold")}>
      {props.top ? (
        <>
          <Row>
            <Col
              lg={{
                span: props.noOffset ? 12 : 6,
                offset: props.noOffset ? 0 : props.bold ? 2 : 3,
              }}
            >
              <Paragraph>{props.text}</Paragraph>
            </Col>
          </Row>
          <Row>
            <Col lg={props.noOffset ? 12 : 10}>
              <div style={{ display: "flex" }}>
                <div className="quote-author right">
                  <div className="author-info">
                    <span>{props.author.name}</span>
                    <span>{props.author.role}</span>
                  </div>
                  <img src={props.author.img} alt="Author" />
                </div>
              </div>
            </Col>
          </Row>
          {props.fancyImg && (
            <div
              className={cn(
                "quote-fancy-img",
                props.fancyImg.position === "left" ? "left" : "right",
              )}
              style={{
                left:
                  props.fancyImg.position === "left"
                    ? props.fancyImg.value
                    : undefined,
                right:
                  props.fancyImg.position === "right"
                    ? props.fancyImg.value
                    : undefined,
                top: `${props.fancyImg.top}%`,
              }}
            >
              <img src={props.fancyImg.src} />
            </div>
          )}
        </>
      ) : (
        <>
          <Row>
            <Col
              lg={{
                span: props.noOffset ? 12 : 6,
                offset: props.noOffset ? 0 : props.bold ? 2 : 3,
              }}
            >
              <div className="quote-author">
                <img src={props.author.img} alt="Author" />
                <div className="author-info">
                  <span>{props.author.name}</span>
                  <span>{props.author.role}</span>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              lg={{
                span: props.noOffset ? 12 : 6,
                offset: props.noOffset ? 0 : 4,
              }}
            >
              <Paragraph>{props.text}</Paragraph>
            </Col>
          </Row>
          {props.fancyImg && (
            <div
              className={cn(
                "quote-fancy-img",
                props.fancyImg.position === "left" ? "left" : "right",
              )}
              style={{
                left:
                  props.fancyImg.position === "left"
                    ? props.fancyImg.value
                    : undefined,
                right:
                  props.fancyImg.position === "right"
                    ? props.fancyImg.value
                    : undefined,
                top: `${props.fancyImg.top}%`,
              }}
            >
              <img src={props.fancyImg.src} />
            </div>
          )}
        </>
      )}
    </div>
  );
}
