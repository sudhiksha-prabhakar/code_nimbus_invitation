import { useState } from "react";
import storyCouple from "../assets/story-couple.png";
import proposalPhoto from "../assets/proposal-photo.png";
import { HeartDivider, LineArtBranch } from "./Decor";
import Reveal from "./Reveal";

const MILESTONES = [
  {
    date: "21st July 2024",
    title: "The Proposal",
    photo: proposalPhoto,
    desc: "A magical evening filled with love, laughter, and a promise for forever under the starlit sky.",
  },
];

export default function OurStory() {
  const [index, setIndex] = useState(0);
  const milestone = MILESTONES[index];

  const prev = () => setIndex((i) => (i - 1 + MILESTONES.length) % MILESTONES.length);
  const next = () => setIndex((i) => (i + 1) % MILESTONES.length);

  return (
    <Reveal as="section" className="our-story">
      <h2 className="script-heading">Our Story</h2>
      <HeartDivider />

      <div className="story-grid">
        <div className="story-photo-frame">
          <img src={storyCouple} alt="Rahul and Ramya" />
        </div>
        <div className="story-card">
          <LineArtBranch className="story-leaf tr" />
          <LineArtBranch className="story-leaf br" />
          <h3 className="story-card-names">Ramya Sharma &amp; Rahul Verma</h3>
          <p className="story-card-quote">
            &quot; Two individuals, one collective direction. Finding a rhythm that feels like home. No matter where the road leads or how it turns. Everything feels right when standing side by side. &quot;
          </p>
        </div>
      </div>

      <div className="chapter-heading">
        <h3>The Chapter Begins</h3>
        <svg className="chapter-arrow-svg" width="110" height="16" viewBox="0 0 110 16" fill="none">
          <path d="M 0,8 H 102 M 94,2 L 104,8 L 94,14" stroke="#5F2118" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="milestone-card">
        <p className="milestone-date">{milestone.date}</p>
        <h4 className="milestone-title">{milestone.title}</h4>
        <div className="milestone-photo-wrap">
          <img src={milestone.photo} alt={milestone.title} />
        </div>
        {milestone.desc && <p className="milestone-desc">{milestone.desc}</p>}
      </div>

      <div className="milestone-nav">
        <button aria-label="Previous milestone" onClick={prev}>
          &#8249;
        </button>
        {MILESTONES.map((_, i) => (
          <span
            key={i}
            className={`milestone-dot ${i === index ? "active" : ""}`}
          />
        ))}
        <button aria-label="Next milestone" onClick={next}>
          &#8250;
        </button>
      </div>
    </Reveal>
  );
}
