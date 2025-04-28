import React from "react";
import { Row, Col } from "react-bootstrap";
import Media from "react-media";
import "./authors.scss";

export default function Authors(props) {
  function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  }

  const chunkedAuthors = sliceIntoChunks(props.authors, 2);

  return (
    <div className="authors">
      <Row>
        <Col lg={{ offset: 2 }}>
          <span className="authors-insights">Insights from</span>
        </Col>
      </Row>

      <Media
        queries={{
          mobile: "(max-width: 575px)",
          large: "(min-width: 576px)",
        }}
      >
        {(matches) => (
          <>
            {matches.mobile && (
              <div className="authors-mobile">
                {props.authors.map((a, idx) => (
                  <Author {...a} />
                ))}
              </div>
            )}

            {matches.large &&
              chunkedAuthors.map((ca) => (
                <Row>
                  {ca.map((a, idx) => (
                    <Col
                      lg={{ span: 3, offset: idx % 3 === 0 ? 2 : 0 }}
                      md={5}
                      sm={6}
                    >
                      <Author {...a} index={idx} />
                    </Col>
                  ))}
                </Row>
              ))}
          </>
        )}
      </Media>
    </div>
  );
}

function Author(props) {
  return (
    <div className="author">
      <img src={props.img} alt="Author" />
      <div className="author-info">
        <span>{props.name}</span>
        <span>{props.role}</span>
      </div>
    </div>
  );
}
