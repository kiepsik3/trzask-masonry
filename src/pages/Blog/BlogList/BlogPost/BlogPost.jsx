import React from "react";
import { Link } from "react-router-dom";
import Author from "../../../../components/Author/Author";
import { Headline3 } from "../../../../typography/Headlines/Headlines";
import Paragraph from "../../../../typography/Paragraph/Paragraph";
import "./blog-post.scss";

export default function BlogPost(props) {
  const { slug, tag, title, caption, img, alt, author } = props;
  return (
    <Link to={`/pl/blog/${slug}`} className="blog-post">
      {tag && <span className="blog-post-category">{tag.name}</span>}
      <div className="blog-post-img-wrapper">
        <img
          src={img}
          className="blog-post-img"
          alt={alt ? alt : "blog-post-image"}
        />
      </div>
      <Headline3>{title}</Headline3>
      <Paragraph small opacity>
        {caption}
      </Paragraph>
      <Author {...author} />
    </Link>
  );
}
