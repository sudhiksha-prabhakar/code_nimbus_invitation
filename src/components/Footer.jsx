export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-byline">
        Engagement Invitation website by{" "}
        <span className="brand">INVITATIONNATION</span>
      </p>
      <div className="footer-avatar" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.4 0-8 2.2-8 5v2h16v-2c0-2.8-3.6-5-8-5z" />
        </svg>
      </div>
      <div className="footer-links">
        <span>
          <InfoIcon /> Report a Problem
        </span>
        <span>
          <MailIcon /> Contact Support
        </span>
        <span>
          <ShieldIcon /> Privacy Policy
        </span>
      </div>
      <p className="footer-powered">
        POWERED BY <a href="#home">INVITATION NATION</a>
      </p>
      <p className="footer-copy">
        © 2026 Invitation Nation. All rights reserved. Crafted with care for
        your forever.
      </p>
    </footer>
  );
}

function InfoIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#8a8a8a" strokeWidth="1.5" />
      <path d="M12 8v.01M12 11v5" stroke="#8a8a8a" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="#8a8a8a" strokeWidth="1.5" />
      <path d="M3 7l9 6 9-6" stroke="#8a8a8a" strokeWidth="1.5" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z"
        stroke="#8a8a8a"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
