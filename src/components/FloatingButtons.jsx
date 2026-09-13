import { useRef, useState } from "react";
import { PhoneIcon, MusicIcon } from "./Decor";
import bgMusic from "../assets/bg-music.mp3";

export default function FloatingButtons() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().catch(() => {});
      setPlaying(true);
    }
  };

  return (
    <div className="floating-buttons">
      <audio ref={audioRef} src={bgMusic} loop />
      <a className="fbtn" href="tel:+910000000000" aria-label="Call">
        <PhoneIcon />
      </a>
      <button
        className={`fbtn ${playing ? "spin" : ""}`}
        aria-label="Toggle music"
        onClick={toggleMusic}
      >
        <MusicIcon />
      </button>
    </div>
  );
}
