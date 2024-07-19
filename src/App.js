import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import ElementPage from "./pages/ElementPage/ElementPage";
import Header from "./components/Heder/Header";
import Footer from "./components/Footer/Footer";
import { Helmet } from "react-helmet";
import useFetch from "./hooks/useFetch";

function App() {
  const domain = window.location.origin;

  const { data: masonryWall } = useFetch(`${domain}/masonry-wall-pl.json`);
  return (
    <>
      <Helmet>
        <title>TRZ / SKILLS</title>
        <meta
          name="description"
          content="Profesjonalne studio animacji specjalizujące się w reklamie internetowej. Tworzymy interaktywne rich media, grywalne playable ads, gry na landing page'ach, reklamy video oraz spektakularne animacje wszelkiej maści."
        />
        <meta name="keywords" content={masonryWall?.keywords?.join(", ")} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/pl/skills" />} />
          {masonryWall && (
            <Route
              path="/pl/skills"
              exact
              element={<MainPage {...masonryWall} />}
            />
          )}
          {masonryWall && (
            <Route
              path="/pl/skills/:slug"
              element={<ElementPage {...masonryWall} />}
            />
          )}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
