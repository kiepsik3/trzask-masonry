import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import SkillPage from "./pages/SkillPage/SkillPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import useFetch from "./hooks/useFetch";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { Newsletter } from "./components/Newsletter/Newsletter";
import RecommendationsPage from "./pages/Recommendations/RecommendationsPage";
import BlogList from "./pages/Blog/BlogList/BlogList";
import Article from "./pages/Blog/Article/Article";
import CaseStudies from "./pages/CaseStudies/CaseStudies";
import CaseStudyDetails from "./pages/CaseStudies/CaseStudyDetails/CaseStudyDetails";
import About from "./pages/About/About";
import masonryWall from "./data/masonry-wall-pl.json";
import blog from "./data/blog-pl.json";
import caseStudies from "./data/case-studies-pl.json";

function App() {
  const domain = window.location.origin;

  // const { data: masonryWall } = useFetch(`${domain}/masonry-wall-pl.json`);
  // const { data: caseStudies } = useFetch(`${domain}/case-studies-pl.json`);
  // const { data: blog } = useFetch(`${domain}/blog-pl.json`);

  const currentSlug = window.location.pathname.substring(
    window.location.pathname.lastIndexOf("/"),
  );

  const isRecommendationsPage = currentSlug === "/recommendations";
  const isTransparentHeader = currentSlug === "/about";

  return (
    <>
      <BrowserRouter>
        <Header menu={masonryWall?.menu} isTransparent={isTransparentHeader} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/pl" />} />
          {masonryWall && (
            <>
              <Route path="/pl" exact element={<MainPage {...masonryWall} />} />
              <Route
                path="/pl/skills/:slug"
                element={<SkillPage {...masonryWall} />}
              />
            </>
          )}
          {blog && (
            <>
              <Route
                path={`/pl/blog`}
                exact
                element={
                  <BlogList {...blog} homepageKeywords={masonryWall.keywords} />
                }
              />
              <Route
                path={`/pl/blog/:slug`}
                element={
                  <Article {...blog} homepageKeywords={masonryWall.keywords} />
                }
              />
            </>
          )}

          {caseStudies && (
            <>
              <Route
                path={"/pl/case-studies"}
                exact
                element={
                  <CaseStudies
                    {...caseStudies}
                    homepageKeywords={masonryWall.keywords}
                  />
                }
              />
              <Route
                path={`/pl/case-studies/:slug`}
                element={
                  <CaseStudyDetails
                    {...caseStudies}
                    homepageKeywords={masonryWall.keywords}
                  />
                }
              />
            </>
          )}
          <Route
            path="/pl/about"
            element={<About homepageKeywords={masonryWall.keywords} />}
          />
          <Route path="/pl/recommendations" element={<RecommendationsPage />} />
        </Routes>
      </BrowserRouter>
      {!isRecommendationsPage && (
        <>
          <Newsletter />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
