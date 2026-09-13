import { PhoneIcon, MusicIcon } from "./Decor";

export default function FloatingButtons({ isPlaying = false, onToggleMusic }) {
  return (
    <div className="floating-buttons">
      <a className="fbtn" href="tel:+910000000000" aria-label="Call">
        <PhoneIcon />
      </a>
      <button
        className={`fbtn ${isPlaying ? "spin" : ""}`}
        aria-label="Toggle music"
        onClick={onToggleMusic}
      >
        <MusicIcon />
      </button>
    </div>
  );
}
