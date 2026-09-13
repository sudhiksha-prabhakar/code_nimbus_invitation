import heroCouple from "../assets/hero-couple.png";
import { StringLights, VineFlourish } from "./Decor";
import Reveal from "./Reveal";
import floralBl from "../assets/floral-bl.png";
import floralBr from "../assets/floral-br.png";

export default function Hero() {
  const floralItems = [
    { src: floralBl, type: "left" },
    { src: floralBr, type: "right" },
    { src: floralBl, type: "left" },
    { src: floralBr, type: "right" },
    { src: floralBl, type: "left" },
    { src: floralBr, type: "right" },
    { src: floralBl, type: "left" },
    { src: floralBr, type: "right" },
    { src: floralBl, type: "left" },
    { src: floralBr, type: "right" },
  ];

  return (
    <Reveal as="section" id="home" className="hero">
      <StringLights color="#F5C56B" />
      <div className="hero-inner">
        <div className="hero-left">
          <p className="hero-tagline anim-top-left">
            Together with their families, we cordially invite you
            <br />
            to celebrate the engagement of our beloved
            <br />
            children
          </p>

          <div className="hero-vine anim-pop-1">
            <VineFlourish />
          </div>

          <h1 className="hero-names anim-left">
            Rahul Verma
            <br />
            <span className="amp">&amp;</span>
            <br />
            Ramya Sharma
          </h1>

          <div className="hero-vine anim-pop-2">
            <VineFlourish />
          </div>

          <p className="hero-date anim-bottom-left">Saturday | 28th November | 2026</p>
          <p className="hero-venue anim-bottom-left-delay">Royal Orchid Convention Center</p>
          
          <a
            className="hero-btn anim-bottom-btn"
            href="https://maps.google.com/?q=Royal+Orchid+Convention+Center+Bengaluru"
            target="_blank"
            rel="noreferrer"
          >
            Open in maps
          </a>
        </div>
        <div className="hero-right anim-right">
          <img src={heroCouple} alt="Rahul and Ramya illustration" />
        </div>
      </div>

      <div className="hero-bottom-floral-track" aria-hidden="true">
        {floralItems.map((item, idx) => (
          <div className={`floral-crop ${item.type}`} key={idx}>
            <img src={item.src} alt="" />
          </div>
        ))}
      </div>
    </Reveal>
  );
}
