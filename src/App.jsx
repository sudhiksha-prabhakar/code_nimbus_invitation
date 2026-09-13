import { useState, useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import FloatingButtons from "./components/FloatingButtons";
import CoverPage from "./components/CoverPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import bgMusic from "./assets/bg-music.mp3";

const PAGES = {
  home: HomePage,
  about: AboutPage,
  gallery: GalleryPage,
};

function App() {
  const [page, setPage] = useState("home");
  const [showCover, setShowCover] = useState(true);
  const [closing, setClosing] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const audioRef = useRef(null);

  const startMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlayingMusic(true);
      }).catch(() => {});
    }
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlayingMusic) {
      audioRef.current.pause();
      setIsPlayingMusic(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlayingMusic(true);
      }).catch(() => {});
    }
  };

  const handleOpenInvite = () => {
    startMusic();
    setClosing(true);
    setTimeout(() => {
      setShowCover(false);
    }, 4000);
  };

  const handleNavigate = (id) => {
    setPage(id);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const Page = PAGES[page];

  return (
    <>
      <audio ref={audioRef} src={bgMusic} loop />
      {showCover ? (
        <CoverPage onOpen={handleOpenInvite} closing={closing} />
      ) : (
        <div className="site-enter">
          <Navbar page={page} onNavigate={handleNavigate} />
          <main className={`page-${page}`}>
            <Page />
          </main>
          <FloatingButtons isPlaying={isPlayingMusic} onToggleMusic={toggleMusic} />
        </div>
      )}
    </>
  );
}

export default App;
