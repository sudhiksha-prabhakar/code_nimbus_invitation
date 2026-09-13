import scheduleCouple from "../assets/schedule-couple.png";
import { HeartDivider, RingIcon, ToastIcon, ForkIcon, PalmLeafBranch } from "./Decor";
import Reveal from "./Reveal";

const EVENTS = [
  { icon: RingIcon, title: "Ring Ceremony", time: "10:30 AM" },
  { icon: ToastIcon, title: "Champagne Toast", time: "11:30 AM" },
  { icon: ForkIcon, title: "Gala Lunch", time: "01:00 PM" },
];

export default function Schedule() {
  return (
    <Reveal as="section" className="schedule">
      {/* Background Side Line-Art Palm Leaves */}
      <PalmLeafBranch className="sched-bg-leaf left" />
      <PalmLeafBranch className="sched-bg-leaf right" flip />

      <h2 className="script-heading">Schedule for the day</h2>
      <HeartDivider />
      <p className="schedule-date">Saturday, 28th November</p>

      <div className="schedule-grid">
        <div className="sched-img-wrap">
          <img
            className="schedule-img"
            src={scheduleCouple}
            alt="Rahul and Ramya"
          />
        </div>

        <div className="timeline">
          {EVENTS.map((ev, i) => (
            <div
              className="timeline-row"
              key={ev.title}
              style={{ animationDelay: `${0.5 + i * 0.45}s` }}
            >
              <div className="timeline-icon">
                <ev.icon />
              </div>
              <div className="timeline-line">
                <span className="dot" />
                {i < EVENTS.length - 1 && <span className="bar" />}
              </div>
              <div className="timeline-text">
                <h4>{ev.title}</h4>
                <p>{ev.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
