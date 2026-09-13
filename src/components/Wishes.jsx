import { useState } from "react";
import { HeartDivider, StringLights } from "./Decor";
import Reveal from "./Reveal";

const WISHES = [
  {
    name: "Ananya",
    message:
      "Wishing you both a lifetime of love, laughter, and beautiful memories together. Congratulations on your engagement!",
  },
  {
    name: "Manya",
    message:
      "May your engagement be the start of a beautiful journey where love grows deeper, laughter becomes sweeter, and each shared dream brings you ever closer. Wishing you endless happiness and joy together.",
  },
  {
    name: "Rohit",
    message:
      "Two hearts, one journey. Congratulations on finding each other — here's to a future filled with love and togetherness.",
  },
];

export default function Wishes() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + WISHES.length) % WISHES.length);
  const next = () => setIndex((i) => (i + 1) % WISHES.length);
  const current = WISHES[index];

  return (
    <Reveal as="section" className="wishes">
      <StringLights color="#FFFFFF" />
      <h2 className="script-heading light">Wishes for the Couple</h2>
      <HeartDivider light />
      <div className="wish-card">
        <h3>{current.name}</h3>
        <p>{current.message}</p>
        <div className="wish-nav">
          <button aria-label="Previous wish" onClick={prev}>
            &#8249;
          </button>
          <span>
            {index + 1}/{WISHES.length}
          </span>
          <button aria-label="Next wish" onClick={next}>
            &#8250;
          </button>
        </div>
      </div>
    </Reveal>
  );
}
