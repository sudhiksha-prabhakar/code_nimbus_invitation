import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import FloatingButtons from "./components/FloatingButtons";
import CoverPage from "./components/CoverPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";

const PAGES = {
  home: HomePage,
  about: AboutPage,
  gallery: GalleryPage,
};

function App() {
  const [page, setPage] = useState("home");
  const [showCover, setShowCover] = useState(true);
  const [closing, setClosing] = useState(false);

  const handleOpenInvite = () => {
    setClosing(true);
    setTimeout(() => {
      setShowCover(false);
    }, 4000);
  };

  const handleNavigate = (id) => {
    setPage(id);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  if (showCover) {
    return <CoverPage onOpen={handleOpenInvite} closing={closing} />;
  }

  const Page = PAGES[page];

  return (
    <div className="site-enter">
      <Navbar page={page} onNavigate={handleNavigate} />
      <main>
        <Page />
      </main>
      <FloatingButtons />
    </div>
  );
}

export default App;
