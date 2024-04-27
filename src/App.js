import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import ElementPage from "./pages/ElementPage/ElementPage";
import Header from "./components/Heder/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/pl" />} />
          <Route path="/pl" exact element={<MainPage />} />
          <Route path="/pl/masonry/:slug" element={<ElementPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
