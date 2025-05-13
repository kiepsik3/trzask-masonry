import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Paragraph from "../../../typography/Paragraph/Paragraph";
import { Headline1, Headline2 } from "../../../typography/Headlines/Headlines";
import { Container, Row, Col } from "react-bootstrap";
import Section from "./Section/Section";
import "./article.scss";
import Navi from "./Navi/Navi";
import Author from "../../../components/Author/Author";
import BlogPost from "../BlogList/BlogPost/BlogPost";
import { FaArrowLeft } from "react-icons/fa";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import cn from "classnames";
import { Helmet } from "react-helmet";

export default function Article(props) {
  const { slug } = useParams();
  const article = props.items.find((a) => a.slug === slug);

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
        <title>{`TRZ / BLOG ${article?.title ? `/ ${article.title}` : ""}`}</title>
        <meta name="description" content={article.description[0]} />
        <meta
          name="keywords"
          content={
            article.keywords
              ? article.keywords.join(", ")
              : props.homepageKeywords.join(", ")
          }
        />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      {article ? (
        <div className="article">
          <Container
            className={cn(
              "article-link-header container 2xl:max-w-[1320px]",
              visible && "visible",
              pinned && "pinned",
            )}
          >
            <Link to="/pl/blog" className="article-link">
              <FaArrowLeft />
              Lista
            </Link>
          </Container>
          <Container className="container 2xl:max-w-[1320px]">
            <Row>
              <Col lg={2}>
                <Link to="/pl/blog" className="article-link">
                  <FaArrowLeft />
                  Lista
                </Link>
              </Col>
              <Col lg={6}>
                <Paragraph small opacity>
                  {article.date} w {article.tag.name}
                </Paragraph>
                <Headline1>{article.title}</Headline1>
                <Author {...article.author} />
              </Col>
            </Row>

            <Row>
              <Col lg={2}>
                <Paragraph small opacity>
                  {article.readingTime} min czytania
                </Paragraph>
              </Col>
              <Col lg={8} className="article-description">
                {article.description.map((d) => (
                  <Paragraph opacity>{d}</Paragraph>
                ))}
              </Col>
            </Row>

            {article.fancyImg && (
              <>
                {article.fancyImg.map((image, idx) => (
                  <div
                    className={cn(
                      "article-fancy-img",
                      image.position === "left" ? "left" : "right",
                    )}
                    style={{
                      left: image.position === "left" ? image.value : undefined,
                      right:
                        image.position === "right" ? image.value : undefined,
                      top: `${image.top}%`,
                    }}
                    key={idx}
                  >
                    <img src={image.src} />
                  </div>
                ))}
              </>
            )}

            {article.sections?.map((c, idx) => (
              <Section {...c} key={idx} />
            ))}

            <Row>
              <Col md={10} lg={9} xl={8}>
                <Author {...article.author} isExtended />
              </Col>
            </Row>
            {article.relatedPosts && (
              <Row className="related-posts">
                <Headline2>Powiązane posty</Headline2>
                {article.relatedPosts.slice(0, 3).map((rp, idx) => (
                  <Col
                    md={6}
                    lg={article.relatedPosts.length < 3 ? 6 : 4}
                    className="related-posts-wrapper"
                    key={idx}
                  >
                    <BlogPost {...rp} />
                  </Col>
                ))}
              </Row>
            )}
            <Navi articles={props.items} current={article} />
          </Container>
          <Navi articles={props.items} current={article} fixed />
        </div>
      ) : (
        <Navigate to="/pl/blog/" />
      )}
    </>
  );
}
