import { useState } from "react";
import { HeartDivider, PalmLeafBranch } from "./Decor";
import Reveal from "./Reveal";
import floralTl from "../assets/big-floral-tl.png";
import floralBr from "../assets/big-floral-br.png";

const AI_WISH_TEMPLATES = [
  "Wishing you both a lifetime of happiness, laughter, and endless love! Congratulations on your engagement! 💕",
  "May your journey together be blessed with joy, peace, and sweet memories every single day. 🥂",
  "Sending my warmest wishes to a wonderful couple as you begin this beautiful new chapter together! ✨",
  "Two hearts, one beautiful journey. May your love grow stronger with every passing year! 💍"
];

export default function SendWishes() {
  const [name, setName] = useState("");
  const [wishes, setWishes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleAiGenerate = () => {
    const randomWish =
      AI_WISH_TEMPLATES[Math.floor(Math.random() * AI_WISH_TEMPLATES.length)];
    setWishes(randomWish);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !wishes.trim()) return;
    setSubmitted(true);
    setName("");
    setWishes("");
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <Reveal as="section" className="send-wishes">
      {/* Corner Floral Bouquets */}
      <img src={floralTl} alt="" className="sw-floral tl" />
      <img src={floralBr} alt="" className="sw-floral br" />

      <h2 className="script-heading">Send Your Wishes</h2>
      <HeartDivider />

      <div className="send-wishes-card">
        {/* White line-art palm branch in top-left of card */}
        <PalmLeafBranch className="sw-card-palm" />

        {submitted ? (
          <div className="sw-success-msg">
            <h3>Thank You! 💕</h3>
            <p>Your warm wishes have been sent to Rahul &amp; Ramya!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="sw-form">
            <div className="sw-field">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="sw-input"
                required
              />
            </div>

            <div className="sw-field relative">
              <textarea
                placeholder="Your Wishes"
                value={wishes}
                onChange={(e) => setWishes(e.target.value)}
                className="sw-textarea"
                rows="3"
                required
              ></textarea>

              {/* AI Sparkles Button */}
              <button
                type="button"
                className="sw-ai-btn"
                onClick={handleAiGenerate}
                title="Generate a warm wish"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                    fill="white"
                  />
                  <path
                    d="M5 2L6.2 5.8L10 7L6.2 8.2L5 12L3.8 8.2L0 7L3.8 5.8L5 2Z"
                    fill="white"
                    opacity="0.8"
                    transform="translate(14, -2) scale(0.6)"
                  />
                </svg>
              </button>
            </div>

            <div className="sw-btn-wrapper">
              <button type="submit" className="sw-submit-btn">
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </Reveal>
  );
}
