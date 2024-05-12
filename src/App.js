import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import ElementPage from "./pages/ElementPage/ElementPage";
import Header from "./components/Heder/Header";
import Footer from "./components/Footer/Footer";
import useFetch from "./hooks/useFetch";

function App() {
  const domain = window.location.origin;

  const { data: masonryWall } = useFetch(`${domain}/masonry-wall-pl.json`);

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/pl/start" />} />
          {masonryWall && (
            <Route
              path="/pl/start"
              exact
              element={<MainPage {...masonryWall} />}
            />
          )}
          {masonryWall && (
            <Route
              path="/pl/start/:slug"
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
