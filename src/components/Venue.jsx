import floralTl from "../assets/big-floral-tl.png";
import floralBr from "../assets/big-floral-br.png";
import Reveal from "./Reveal";

export default function Venue() {
  return (
    <Reveal as="section" className="venue">
      <img src={floralTl} alt="" className="venue-floral tl" />
      <img src={floralTl} alt="" className="venue-floral tr" />
      <img src={floralBr} alt="" className="venue-floral bl" />
      <img src={floralBr} alt="" className="venue-floral br" />

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
