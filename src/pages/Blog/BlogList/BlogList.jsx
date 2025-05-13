import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Headline1, Headline3 } from "../../../typography/Headlines/Headlines";
import Paragraph from "../../../typography/Paragraph/Paragraph";
import { Link, useSearchParams } from "react-router-dom";
import "./blog-list.scss";
import BlogPost from "./BlogPost/BlogPost";
import Button from "../../../components/Button/Button";
import cn from "classnames";
import { ReactComponent as SmallMonster } from "../../../assets/img/smallMonster.svg";
import { Helmet } from "react-helmet";

export default function BlogList(props) {
  const { title, caption, items } = props;
  const [urlParams] = useSearchParams();

  const filteredCategory = urlParams.get("category");

  const [itemsAmount, setItemsAmount] = useState(6);
  const [filteredItemsAmount, setFilteredItemsAmount] = useState(6);

  const filteredItems = items.filter(
    (post) => decodeStringToDashes(post.tag.name) === filteredCategory,
  );

  useEffect(() => {
    const blogItemsAmount = window.localStorage.getItem("blogItemsAmount");
    const filteredBlogItemsAmount = window.localStorage.getItem(
      "filteredBlogItemsAmount",
    );
    if (blogItemsAmount !== null) setItemsAmount(JSON.parse(blogItemsAmount));
    if (filteredBlogItemsAmount !== null)
      setFilteredItemsAmount(JSON.parse(filteredBlogItemsAmount));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("blogItemsAmount", itemsAmount);
    window.localStorage.setItem("filteredBlogItemsAmount", filteredItemsAmount);
  }, [itemsAmount, filteredItemsAmount]);

  console.log(props);
  return (
    <>
      <Helmet>
        <title>TRZ / BLOG</title>
        <meta
          name="description"
          content="Profesjonalne studio animacji specjalizujące się w reklamie internetowej. Tworzymy interaktywne rich media, grywalne playable ads, gry na landing page'ach, reklamy video oraz spektakularne animacje wszelkiej maści."
        />
        <meta
          name="keywords"
          content={
            props.keywords
              ? props?.keywords.join(", ")
              : props.homepageKeywords.join(", ")
          }
        />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <div className="blog-list">
        <Container className="container 2xl:max-w-[1320px]">
          <Row>
            <Col sm={5} md={3} lg={2} className="blog-list-sidebar">
              <Headline1 violet>{title}</Headline1>
              <Paragraph small opacity>
                {caption}
              </Paragraph>
              <Row>
                <Col sm={6}>
                  <hr />
                </Col>
              </Row>
              <BlogCategoryFilter
                items={items}
                filteredCategory={filteredCategory}
              />
              <Row>
                <Col sm={6}>
                  <hr className="no-mobile" />
                </Col>
              </Row>
              <div className="blog-list-sidebar-monster">
                <SmallMonster />
                <span>Get latest news delivered regularly!</span>
              </div>
              <Row>
                <Col sm={6}>
                  <hr className="no-mobile" />
                </Col>
              </Row>
              <ul>
                <li>
                  <a href="https://trzask.com/pl/about" className="external">
                    O nas!
                  </a>
                </li>
              </ul>
            </Col>

            <Col sm={7} md={{ span: 8, offset: 1 }} lg={{ span: 9, offset: 1 }}>
              {filteredCategory && (
                <div className="blog-list-category-section">
                  <Headline3 violet>
                    {
                      items.find(
                        (post) =>
                          decodeStringToDashes(post.tag.name) ===
                          filteredCategory,
                      )?.tag.name
                    }

                    <span>
                      {" "}
                      -{" "}
                      {
                        items.find(
                          (post) =>
                            decodeStringToDashes(post.tag.name) ===
                            filteredCategory,
                        )?.tag.caption
                      }
                    </span>
                  </Headline3>
                </div>
              )}
              <div className="blog-list-elements">
                {filteredCategory
                  ? filteredItems
                      .slice(0, filteredItemsAmount)
                      .map((post, idx) => <BlogPost {...post} key={idx} />)
                  : items
                      .slice(0, itemsAmount)
                      .map((post, idx) => <BlogPost {...post} key={idx} />)}
              </div>
              {filteredItems.length > filteredItemsAmount &&
                filteredCategory && (
                  <Button
                    label="Więcej postów"
                    withArrow
                    onClick={() =>
                      setFilteredItemsAmount(filteredItemsAmount + 4)
                    }
                  />
                )}
              {items.length > itemsAmount && !filteredCategory && (
                <Button
                  label="Więcej postów"
                  withArrow
                  onClick={() => setItemsAmount(itemsAmount + 4)}
                />
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

function BlogCategoryFilter(props) {
  function getUniqueCategories() {
    return props.items
      .map((post) => post.tag.name)
      .filter((tag, idx, self) => idx === self.indexOf(tag));
  }

  return (
    <nav>
      <ul>
        <li>
          <Link
            to="/pl/blog"
            className={cn(!props.filteredCategory && "active")}
          >
            Latest Posts
          </Link>
        </li>
        {getUniqueCategories().map((category, idx) => (
          <li key={idx}>
            <Link
              to={`/pl/blog?category=${decodeStringToDashes(category)}`}
              className={cn(
                decodeStringToDashes(category) === props.filteredCategory &&
                  "active",
              )}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function decodeStringToDashes(str) {
  return str.replace(/\s+/g, "-").toLowerCase();
}
