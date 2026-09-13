import { useState, useEffect } from "react";
import bridePhoto from "../assets/single-bride.png";
import groomPhoto from "../assets/single-groom.png";
import { HeartDivider, LeafBranch, PalmLeafBranch } from "./Decor";
import Reveal from "./Reveal";

export default function BrideGroom() {
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhotoIndex((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const photos = [
    { src: bridePhoto, name: "Ramya Sharma", role: "Bride" },
    { src: groomPhoto, name: "Rahul Verma", role: "Groom" }
  ];

  return (
    <Reveal as="section" className="bride-groom">
      {/* Background Side Line Art Palm Leaves */}
      <PalmLeafBranch className="bg-bg-leaf left" />
      <PalmLeafBranch className="bg-bg-leaf right" flip />

      <h2 className="script-heading">Bride &amp; Groom</h2>
      <HeartDivider />
      <div className="bg-grid">
        <div className={`bg-side left ${photoIndex === 0 ? "active-person" : ""}`}>
          <h3 className="script-name">Ramya Sharma</h3>
          <p className="parentage">D/o Mr. &amp; Mrs. Sharma</p>
          <p className="desc">
            A graceful, compassionate soul with a radiant smile, deeply
            rooted in family values while embracing new dreams.
          </p>
        </div>

        <div className="bg-photo-wrapper">
          <div className="bg-photo">
            {photos.map((p, idx) => (
              <img
                key={p.role}
                src={p.src}
                alt={p.name}
                className={`bg-single-img ${idx === photoIndex ? "active" : ""}`}
              />
            ))}
            <LeafBranch className="bg-leaf" />
          </div>

          <div className="bg-photo-nav">
            <button
              className={`bg-nav-dot ${photoIndex === 0 ? "active" : ""}`}
              onClick={() => setPhotoIndex(0)}
              title="View Bride"
            >
              Bride
            </button>
            <span className="dot-divider">•</span>
            <button
              className={`bg-nav-dot ${photoIndex === 1 ? "active" : ""}`}
              onClick={() => setPhotoIndex(1)}
              title="View Groom"
            >
              Groom
            </button>
          </div>
        </div>

        <div className={`bg-side right ${photoIndex === 1 ? "active-person" : ""}`}>
          <h3 className="script-name">Rahul Verma</h3>
          <p className="parentage">S/o Mr. &amp; Mrs. Verma</p>
          <p className="desc">
            A warm-hearted and ambitious individual known for integrity,
            kindness, and a calm, reassuring presence.
          </p>
        </div>
      </div>
    </Reveal>
  );
}
