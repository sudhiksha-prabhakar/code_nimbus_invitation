import { useEffect, useState } from "react";
import { HeartDivider, PalmLeafBranch } from "./Decor";
import Reveal from "./Reveal";
import floralBl from "../assets/floral-bl.png";
import floralTr from "../assets/floral-tr.png";

const WEDDING_DATE = new Date("2026-11-28T10:30:00+05:30").getTime();

function getTimeLeft() {
  const diff = Math.max(0, WEDDING_DATE - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);
  return { days, hours, mins, secs };
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const t = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(t);
  }, []);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hrs", value: time.hours },
    { label: "Mins", value: time.mins },
    { label: "Secs", value: time.secs },
  ];

  return (
    <Reveal as="section" className="countdown">
      {/* Top-Left Line Art Palm Branch */}
      <PalmLeafBranch className="cd-palm tl" />

      {/* Bottom-Left Watercolor Floral Bouquet */}
      <img src={floralBl} alt="" className="cd-floral bl" />

      {/* Top-Right Watercolor Floral Bouquet */}
      <img src={floralTr} alt="" className="cd-floral tr" />

      {/* Bottom-Right Line Art Palm Branch */}
      <PalmLeafBranch className="cd-palm br" flip />

      <h2 className="script-heading light">The Countdown to Forever Begins</h2>
      <HeartDivider light />
      <div className="countdown-grid">
        {units.map((u, i) => (
          <div
            className="countdown-unit"
            key={u.label}
            style={{ animationDelay: `${0.4 + i * 0.15}s` }}
          >
            <span className="value">{String(u.value).padStart(2, "0")}</span>
            <span className="label">{u.label}</span>
            {i < units.length - 1 && <span className="colon">:</span>}
          </div>
        ))}
      </div>
    </Reveal>
  );
}
