import { useState } from "react";
import storyCouple from "../assets/story-couple.png";
import proposalPhoto from "../assets/proposal-photo.png";
import { HeartDivider, LeafBranch } from "./Decor";
import Reveal from "./Reveal";

const MILESTONES = [
  {
    date: "21st July 2024",
    title: "The Proposal",
    photo: proposalPhoto,
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
        <div className="story-photo">
          <img src={storyCouple} alt="Rahul and Ramya" />
        </div>
        <div className="story-quote">
          <p>
            "Finding a rhythm that feels like home. No matter where the road
            leads or how it turns. Everything feels right when standing side
            by side."
          </p>
        </div>
        <LeafBranch className="story-leaf" />
      </div>

      <div className="chapter-heading">
        <h3>The Chapter Begins</h3>
        <span className="chapter-arrow">&#8594;</span>
      </div>

      <div className="milestone-card">
        <p className="milestone-date">{milestone.date}</p>
        <h4 className="milestone-title">{milestone.title}</h4>
        <img src={milestone.photo} alt={milestone.title} />
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
