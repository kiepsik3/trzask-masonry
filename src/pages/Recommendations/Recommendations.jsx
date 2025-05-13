import { Helmet } from "react-helmet";
import "./recommendations.scss";
import { Headline1 } from "../../typography/Headlines/Headlines";
import { MasonryWallRecommendations } from "../../components/MasonryWallRecommendations/MasonryWallRecommendations";
import React from "react";

export default function Recommendations(props) {
  console.log(props);
  return (
    <>
      <Helmet>
        <title>TRZ / RECOMMENDATIONS</title>
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div className="recommendations container 2xl:max-w-[1320px]">
        <Headline1 className="main-page-header">Co mówią o Trzasku?</Headline1>
        <MasonryWallRecommendations recommendations={props.recommendations} />
      </div>
    </>
  );
}
