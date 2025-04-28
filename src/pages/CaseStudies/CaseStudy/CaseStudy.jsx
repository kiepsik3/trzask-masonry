import React from "react";
import { Row, Col } from "react-bootstrap";
import { Headline2, Headline3 } from "../../../typography/Headlines/Headlines";
import Paragraph from "../../../typography/Paragraph/Paragraph";
import { Link } from "react-router-dom";
import "./case-study.scss";
import Button from "../../../components/Button/Button";
import element from "../../../assets/img/element.svg";
import element2 from "../../../assets/img/element2.svg";
import element3 from "../../../assets/img/element3.svg";
import monster from "../../../assets/img/monster.svg";

export default function CaseStudy(props) {
  const { slug, tag, title, caption, img, alt } = props;
  return (
    <Link to={`/pl/case-studies/${slug}`} className="case-study">
      <Row>
        <Col md={6} lg={4} className="case-study-info">
          <Headline3 violet>„{tag}”</Headline3>
          <Headline2>{title}</Headline2>
          {caption.map((c, idx) => (
            <Paragraph small opacity key={idx}>
              {c}
            </Paragraph>
          ))}
          <Button label="Czytaj" />
        </Col>

        <Col md={6} lg={{ span: 7, offset: 1 }}>
          <div className="case-study-image">
            <div className="case-study-image_bg">
              <img src={img} alt={alt ? alt : "case-study-image"} />
            </div>
            <div className="case-study-image_fancy">
              <img src={element} alt="Fancy" />
              <img src={element2} alt="Fancy" />
              <img src={element3} alt="Fancy" />
              <img src={monster} alt="Fancy" />
            </div>
          </div>
        </Col>
      </Row>
    </Link>
  );
}
