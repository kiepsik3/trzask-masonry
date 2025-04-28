import React from "react";
import { Row, Col } from "react-bootstrap";
import { Headline2 } from "../../../../typography/Headlines/Headlines";
import Image from "../../../../components/Image/Image";
import "./section.scss";
import Quote from "../../../../components/Quote/Quote";
import Exclamation from "../../../../components/Exclamation/Exclamation";
import Video from "../../../../components/Video/Video";
import { Description } from "../CaseStudyDetails";

export default function Section(props) {
  return (
    <div className="section">
      {props.span ? (
        <Row>
          <Col
            xl={{ span: props.span, offset: 2 }}
            lg={props.span + 1}
            md={props.span + 2}
          >
            {props.left.map((l) => (
              <div className="section-centered-wrapper">
                <div className="section-title">
                  <span className="section-number">{props.number}</span>
                  <Headline2>{l.title}</Headline2>
                </div>

                {l.description.map((d) => (
                  <Description
                    description={d}
                    className={"Section-description"}
                    small
                  />
                ))}

                {l.img &&
                  (l.img.link ? (
                    <a
                      href={l.img.link}
                      target={l.img.target}
                      rel="noopener noreferrer"
                    >
                      <Image {...l.img} isLeft />
                    </a>
                  ) : (
                    <Image {...l.img} isLeft />
                  ))}
                {l.quote && <Quote {...l.quote} noOffset />}
                {l.exclamation && <Exclamation {...l.exclamation} />}
              </div>
            ))}
          </Col>

          <Col
            xl={12 - 2 - props.span}
            lg={12 - 2 - props.span + 1}
            md={12 - 2 - props.span}
          >
            {props.right.map((r) => (
              <div className="section-centered-wrapper">
                {r.img &&
                  (r.img.link ? (
                    <a
                      href={r.img.link}
                      target={r.img.target}
                      rel="noopener noreferrer"
                    >
                      <Image {...r.img} isRight />
                    </a>
                  ) : (
                    <Image {...r.img} isRight />
                  ))}
                {r.quote && <Quote {...r.quote} noOffset />}
                {r.exclamation && <Exclamation {...r.exclamation} isRight />}
              </div>
            ))}
          </Col>
          <Col xs={12}>
            {props.img &&
              (props.img.link ? (
                <a
                  href={props.img.link}
                  target={props.img.target}
                  rel="noopener noreferrer"
                >
                  <Image {...props.img} />
                </a>
              ) : (
                <Image {...props.img} />
              ))}
            {props.video && <Video {...props.video} />}
            {props.quote && <Quote {...props.quote} />}
            {props.exclamation && <Exclamation {...props.exclamation} />}
          </Col>
        </Row>
      ) : (
        <Row>
          <Col xl={{ span: 8, offset: 2 }}>
            {props.title && (
              <div className="section-title">
                <span className="section-number">{props.number}</span>
                <Headline2>{props.title}</Headline2>
              </div>
            )}
            {props.description &&
              props.description.map((d) => (
                <Description
                  description={d}
                  className={"Section-description"}
                  small
                />
              ))}
          </Col>

          <Col xs={12}>
            {props.img &&
              (props.img.link ? (
                <a
                  href={props.img.link}
                  target={props.img.target}
                  rel="noopener noreferrer"
                >
                  <Image {...props.img} />
                </a>
              ) : (
                <Image {...props.img} />
              ))}
            {props.video && <Video {...props.video} />}
            {props.quote && <Quote {...props.quote} />}
            {props.exclamation && <Exclamation {...props.exclamation} />}
          </Col>
        </Row>
      )}
    </div>
  );
}
