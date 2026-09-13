import { useState } from "react";
import brideFamily from "../assets/bride-family.png";
import groomFamily from "../assets/groom-family.png";
import { HeartDivider, FloralCorner } from "./Decor";
import Reveal from "./Reveal";

export default function MeetFamilies() {
  const [side, setSide] = useState("bride");

  return (
    <Reveal as="section" className="families">
      <FloralCorner className="corner tl" />
      <FloralCorner className="corner tr flip" />
      <h2 className="script-heading light">Meet The Families</h2>
      <HeartDivider light />
      <div className="family-photo">
        <img
          src={side === "bride" ? brideFamily : groomFamily}
          alt={side === "bride" ? "Bride's family" : "Groom's family"}
        />
      </div>
      <div className="family-tabs">
        <button
          className={side === "bride" ? "active" : ""}
          onClick={() => setSide("bride")}
        >
          Bride
        </button>
        <button
          className={side === "groom" ? "active" : ""}
          onClick={() => setSide("groom")}
        >
          Groom
        </button>
      </div>
    </Reveal>
  );
}
