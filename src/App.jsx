import { useState, useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import FloatingButtons from "./components/FloatingButtons";
import CoverPage from "./components/CoverPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
// Background music now sourced from YouTube Shorts embed

const PAGES = {
  home: HomePage,
  about: AboutPage,
  gallery: GalleryPage,
};

function App() {
  const [page, setPage] = useState("home");
  const [showCover, setShowCover] = useState(true);
  const [closing, setClosing] = useState(false);
// Removed legacy audio handling; background music is now a hidden YouTube iframe.

  const handleOpenInvite = () => {
    // Music starts automatically via YouTube iframe; no explicit start needed.
    setClosing(true);
    setTimeout(() => {
      setShowCover(false);
    }, 4200);
  };

  const handleNavigate = (id) => {
    setPage(id);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const Page = PAGES[page];

  return (
    <>
      <iframe src="https://www.youtube.com/embed/zr2LK75_r94?autoplay=1&loop=1&playlist=zr2LK75_r94&controls=0&mute=1" style="display:none; width:0; height:0; border:0;"></iframe>
      {showCover ? (
        <CoverPage onOpen={handleOpenInvite} closing={closing} />
      ) : (
        <div className="site-enter">
          <Navbar page={page} onNavigate={handleNavigate} />
          <main className={`page-${page}`}>
            <Page />
          </main>
          <FloatingButtons />
        </div>
      )}
    </>
  );
}

export default App;
