import React, { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Paragraph from "../../../typography/Paragraph/Paragraph";
import { Headline1 } from "../../../typography/Headlines/Headlines";
import { Container, Row, Col } from "react-bootstrap";
import Authors from "../../../components/Authors/Authors";
import Section from "./Section/Section";
import "./case-study-details.scss";
import { FaArrowLeft } from "react-icons/fa";
import Navi from "./Navi/Navi";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import cn from "classnames";
import { Helmet } from "react-helmet";

export default function CaseStudyDetails(props) {
  const { slug } = useParams();
  const caseStudy = props.items.find((cs) => cs.slug === slug);

  const [visible, setVisible] = useState(false);
  const [pinned, setPinned] = useState(true);
  useScrollPosition(
    ({ currPos, prevPos }) => {
      if (currPos.y === prevPos.y) {
        return;
      }

      const windowHeight = window.innerHeight;
      const pageHeight = document.body.scrollHeight;

      currPos.y > 99 ? setVisible(true) : setVisible(false);
      currPos.y > prevPos.y && currPos.y > 0
        ? setPinned(false)
        : currPos.y + windowHeight < pageHeight && setPinned(true);
    },
    [visible],
    undefined,
    true,
    0,
  );

  return (
    <>
      <Helmet>
        <title>{`TRZ / CASE STUDIES ${caseStudy?.title ? `/ ${caseStudy.title}` : ""}`}</title>
        <meta
          name="description"
          content={caseStudy.description.flatMap((d) => d)[0].paragraph}
        />
        <meta
          name="keywords"
          content={
            caseStudy.keywords
              ? caseStudy.keywords.join(", ")
              : props.homepageKeywords.join(", ")
          }
        />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      {caseStudy ? (
        <div className="case-study-details">
          <Container
            className={cn(
              "case-study-details-link-header",
              visible && "visible",
              pinned && "pinned",
            )}
          >
            <Link to="/pl/case-studies" className="case-study-details-link">
              <FaArrowLeft />
              Lista
            </Link>
          </Container>
          <Container>
            <Row>
              <Col lg={2}>
                <Link to="/pl/case-studies" className="case-study-details-link">
                  <FaArrowLeft />
                  Lista
                </Link>
              </Col>
              <Col lg={8}>
                <Headline1>
                  {caseStudy.title} - <span>case study {caseStudy.tag}</span>
                </Headline1>
              </Col>
            </Row>

            <Row>
              <Col
                lg={{ span: 8, offset: 2 }}
                className="case-study-details-description"
              >
                {caseStudy.description.map((d) => (
                  <Description description={d} />
                ))}
                {caseStudy.fancyImg && (
                  <div
                    className={cn(
                      "case-study-details-fancy-img",
                      caseStudy.fancyImg.position === "left" ? "left" : "right",
                    )}
                    style={{
                      left:
                        caseStudy.fancyImg.position === "left"
                          ? caseStudy.fancyImg.value
                          : undefined,
                      right:
                        caseStudy.fancyImg.position === "right"
                          ? caseStudy.fancyImg.value
                          : undefined,
                      top: caseStudy.fancyImg.top,
                    }}
                  >
                    <img src={caseStudy.fancyImg.src} />
                  </div>
                )}
              </Col>
            </Row>

            {caseStudy.authors && <Authors authors={caseStudy.authors} />}

            {caseStudy.sections?.map((s, idx) => (
              <Section {...s} number={idx} key={idx} />
            ))}
            <Navi caseStudies={props.items} current={caseStudy} />
          </Container>
          <Navi caseStudies={props.items} current={caseStudy} fixed />
        </div>
      ) : (
        <Navigate to="/pl/case-studies" />
      )}
    </>
  );
}

export function Description(props) {
  return (
    <Paragraph opacity small={props.small} className={props.className}>
      {props.description.map((e) => (
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
