import { PhoneIcon } from "./Decor";

export default function FloatingButtons() {
  return (
    <div className="floating-buttons">
      <a className="fbtn" href="tel:+910000000000" aria-label="Call">
        <PhoneIcon />
      </a>
      <button
        className="fbtn"
        aria-label="Call"
        onClick={() => {}}
      >
        <PhoneIcon />
      </button>
    </div>
  );
}
