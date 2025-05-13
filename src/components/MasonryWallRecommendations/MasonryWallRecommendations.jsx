import React from "react";
import cn from "classnames";
import "./masonry-wall-recommendations.scss";
import Paragraph from "../../typography/Paragraph/Paragraph";

export function MasonryWallRecommendations(props) {
  console.log(props);
  return (
    <div className="masonry-wall-recommendations">
      {props.recommendations?.map((recommendation, index) => (
        <React.Fragment key={index}>
          {recommendation.bgImage ? (
            <div
              className={cn(
                `item item-${index + 1}`,
                recommendation.rotateRight && "rotate-right",
                recommendation.rotateLeft && "rotate-left",
              )}
            >
              <img
                src={recommendation.bgImage}
                alt={
                  recommendation.alt
                    ? recommendation.alt
                    : recommendation.bgImage
                }
              />
            </div>
          ) : (
            <div
              className={cn(
                `item text item-${index + 1}`,
                recommendation.bgColor === "red"
                  ? "red"
                  : recommendation.bgColor === "blue"
                    ? "blue"
                    : "white",
                recommendation.rotateRight && "rotate-right",
                recommendation.rotateLeft && "rotate-left",
              )}
            >
              <div className="content">
                <Paragraph small>{recommendation.text}</Paragraph>
                <div className="author">
                  <span>{recommendation.author.name}</span>
                  <span>{recommendation.author.company}</span>
                </div>
              </div>
              <div className="logo">
                <img src={recommendation.logo} alt="logo" />
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
