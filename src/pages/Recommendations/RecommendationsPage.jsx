import { Helmet } from "react-helmet";

export default function RecommendationsPage() {
  return (
    <>
      <Helmet>
        <title>TRZ / RECOMMENDATIONS</title>
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <iframe src="/pl/subpages/recommendations/" width="100%" height="100%" />
    </>
  );
}
