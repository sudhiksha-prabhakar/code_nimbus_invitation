import coverBride from "../assets/cover-bride.png";
import coverGroom from "../assets/cover-groom.png";
import floralTl from "../assets/big-floral-tl.png";
import floralBr from "../assets/big-floral-br.png";

const VineFlourish = () => (
  <svg width="140" height="24" viewBox="0 0 140 24" fill="none">
    <path d="M55 12 C40 12 30 8 15 12 C8 14 4 12 0 10" stroke="#7a5542" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M44 11 C40 7 34 6 32 10 C34 11 40 12 44 11 Z" fill="#7a5542" />
    <path d="M28 10 C24 6 18 5 16 9 C18 10 24 11 28 10 Z" fill="#7a5542" />
    <path d="M12 11 C8 7 2 6 0 10 C2 11 8 12 12 11 Z" fill="#7a5542" />

    <path d="M70 18 C70 18 63 12 63 7.5 C63 4.5 65.5 3.5 67.5 3.5 C69 3.5 70 4.5 70 5.5 C70 4.5 71 3.5 72.5 3.5 C74.5 3.5 77 4.5 77 7.5 C77 12 70 18 70 18 Z" fill="#d8712e" />

    <path d="M85 12 C100 12 110 8 125 12 C132 14 136 12 140 10" stroke="#7a5542" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M96 11 C100 7 106 6 108 10 C106 11 100 12 96 11 Z" fill="#7a5542" />
    <path d="M112 10 C116 6 122 5 124 9 C122 10 116 11 112 10 Z" fill="#7a5542" />
    <path d="M128 11 C132 7 138 6 140 10 C138 11 132 12 128 11 Z" fill="#7a5542" />
  </svg>
);

export default function CoverPage({ onOpen, closing }) {
  return (
    <div className={`cover-page ${closing ? "closing" : ""}`}>
      <img className="cover-floral tl" src={floralTl} alt="" aria-hidden="true" />
      <img className="cover-floral tr" src={floralTl} style={{ transform: "scaleX(-1)" }} alt="" aria-hidden="true" />
      <img className="cover-floral bl" src={floralBr} style={{ transform: "scaleX(-1)" }} alt="" aria-hidden="true" />
      <img className="cover-floral br" src={floralBr} alt="" aria-hidden="true" />

      <div className="cover-inner">
        <img className="cover-figure bride" src={coverBride} alt="Ramya" />

        <div className="cover-center">
          <p className="cover-eyebrow fade-in d1">A special invitation awaits you</p>
          
          <div className="cover-vine fade-in d2">
            <VineFlourish />
          </div>

          <h1 className="cover-names fade-in d3">
            Rahul Verma
            <br />
            <span className="amp">&amp;</span>
            <br />
            Ramya Sharma
          </h1>

          <div className="cover-vine fade-in d4">
            <VineFlourish />
          </div>

          <p className="cover-sub fade-in d4">
            A moment we've been waiting to
            <br />
            share with you
          </p>

          <button className="cover-btn fade-in d5" onClick={onOpen}>
            Open Invite
          </button>
        </div>

        <img className="cover-figure groom" src={coverGroom} alt="Rahul" />
      </div>
    </div>
  );
}

