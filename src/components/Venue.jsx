import { FloralCorner } from "./Decor";
import Reveal from "./Reveal";

export default function Venue() {
  return (
    <Reveal as="section" className="venue">
      <FloralCorner className="corner tl" />
      <FloralCorner className="corner tr" />
      <FloralCorner className="corner bl" />
      <FloralCorner className="corner br" />
      <h2 className="venue-title">Royal Orchid Convention Center</h2>
      <p className="venue-address">
        Royal Palace, HAL 2nd Stage, Bengaluru, Karnataka 560008
      </p>
      <a
        className="btn-outline"
        href="https://maps.google.com/?q=Royal+Orchid+Convention+Center+Bengaluru"
        target="_blank"
        rel="noreferrer"
      >
        Open in maps
      </a>
    </Reveal>
  );
}
