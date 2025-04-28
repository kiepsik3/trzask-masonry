import React from "react";
import { Row, Col } from "react-bootstrap";
import Paragraph from "../../../../typography/Paragraph/Paragraph";
import Image from "../../../../components/Image/Image";
import "./section.scss";
import Quote from "../../../../components/Quote/Quote";
import Exclamation from "../../../../components/Exclamation/Exclamation";
import Video from "../../../../components/Video/Video";

export default function Section(props) {
  return (
    <div className="section">
      <Row>
        {props.split ? (
          <>
            <Col xl={{ span: 4, offset: 2 }} md={6}>
              {props.left.map((l) => (
                <>
                  {l.text && l.text?.map((t) => <Text text={t} />)}
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
                </>
              ))}
            </Col>
            <Col xl={4} md={6}>
              {props.right.map((r) => (
                <>
                  {r.text && r.text?.map((t) => <Text text={t} />)}
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
                </>
              ))}
            </Col>
          </>
        ) : props.full ? (
          <Col xs={12}>
            {props.text && props.text?.map((t) => <Text text={t} />)}
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
        ) : (
          <Col xl={{ span: 8, offset: 2 }}>
            {props.text && props.text?.map((t) => <Text text={t} />)}
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
        )}
      </Row>
    </div>
  );
}

function Text(props) {
  return (
    <Paragraph opacity small>
      {props.text.map((e) => (
        <>
          {e.paragraph ? (
            <span
              style={{
                fontSize: e.fontSize,
                lineHeight: "1.45em",
                fontWeight: e.bold && 700,
                fontStyle: e.italic && "italic",
              }}
            >
              {e.paragraph}
            </span>
          ) : (
            <a
              href={e.link}
              style={{
                fontSize: e.fontSize,
                lineHeight: "1.45em",
                fontWeight: e.bold && 700,
                fontStyle: e.italic && "italic",
                color: "#0d6efd",
              }}
              target={e.target}
            >
              {e.text}
            </a>
          )}
        </>
      ))}
    </Paragraph>
  );
}
