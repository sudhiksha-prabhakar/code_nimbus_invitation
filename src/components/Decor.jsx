export const VineFlourish = () => (
  <svg width="140" height="24" viewBox="0 0 140 24" fill="none">
    <path d="M55 12 C40 12 30 8 15 12 C8 14 4 12 0 10" stroke="#7a5542" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M44 11 C40 7 34 6 32 10 C34 11 40 12 44 11 Z" fill="#7a5542" />
    <path d="M28 10 C24 6 18 5 16 9 C18 10 24 11 28 10 Z" fill="#7a5542" />
    <path d="M12 11 C8 7 2 6 0 10 C2 11 8 12 12 11 Z" fill="#7a5542" />

    <path d="M70 18 C70 18 63 12 63 7.5 C63 4.5 65.5 3.5 67.5 3.5 C69 3.5 70 4.5 70 5.5 C70 4.5 71 3.5 72.5 3.5 C74.5 3.5 77 4.5 77 7.5 C77 12 70 18 70 18 Z" fill="#d8712e" />

    <path d="M85 12 C100 12 110 8 125 12 C132 14 136 12 140 10" stroke="#7a5542" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M96 11 C100 7 106 6 108 10 C106 11 100 12 96 11 Z" fill="#7a5542" />
    <path d="M112 10 C116 6 122 5 124 9 C122 10 116 11 112 10 Z" fill="#7a5542" />
    <path d="M128 11 C132 7 138 6 140 10 C138 11 132 12 128 11 Z" fill="#7a5542" />
  </svg>
);

export function HeartDivider({ light = false }) {
  const line = light ? "rgba(255,255,255,0.7)" : "#D8712E";
  const heart = light ? "#ffffff" : "#D8712E";
  return (
    <div className="heart-divider">
      <span className="hd-line" style={{ background: line }} />
      <svg width="22" height="20" viewBox="0 0 22 20" fill="none">
        <path
          d="M11 19C11 19 1 12.5 1 6.2C1 2.8 3.6 1 6.2 1C8.2 1 9.9 2.1 11 3.9C12.1 2.1 13.8 1 15.8 1C18.4 1 21 2.8 21 6.2C21 12.5 11 19 11 19Z"
          fill={heart}
        />
      </svg>
      <span className="hd-line" style={{ background: line }} />
    </div>
  );
}

export function LeafBranch({ className = "", flip = false }) {
  return (
    <svg
      className={`leaf-branch ${className}`}
      style={{ transform: flip ? "scaleX(-1)" : "none" }}
      width="90"
      height="150"
      viewBox="0 0 90 150"
      fill="none"
    >
      <path
        d="M45 148C45 148 40 100 45 60C50 20 45 2 45 2"
        stroke="#B24A2D"
        strokeWidth="1.2"
      />
      {[20, 38, 56, 74, 92, 108, 124].map((y, i) => (
        <ellipse
          key={i}
          cx={i % 2 === 0 ? 45 + 16 : 45 - 16}
          cy={148 - y}
          rx="14"
          ry="6"
          transform={`rotate(${i % 2 === 0 ? -35 : 35} ${
            i % 2 === 0 ? 45 + 16 : 45 - 16
          } ${148 - y})`}
          stroke="#B24A2D"
          strokeWidth="1"
          fill="none"
        />
      ))}
    </svg>
  );
}

export function LineArtBranch({ className = "", flip = false }) {
  return (
    <svg
      className={`line-art-branch ${className}`}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      width="100"
      height="140"
      viewBox="0 0 100 140"
      fill="none"
    >
      <g stroke="#5F2118" strokeWidth="1.6" strokeLinecap="round">
        <path d="M 50,135 Q 48,70 48,5" />
        <path d="M 49,112 L 20,95" />
        <path d="M 49,112 L 80,95" />
        <path d="M 48,88 L 16,70" />
        <path d="M 48,88 L 82,70" />
        <path d="M 48,64 L 20,45" />
        <path d="M 48,64 L 78,45" />
        <path d="M 48,42 L 26,24" />
        <path d="M 48,42 L 72,24" />
        <path d="M 48,22 L 35,8" />
        <path d="M 48,22 L 62,8" />
      </g>
    </svg>
  );
}

export function PalmLeafBranch({ className = "", flip = false }) {
  return (
    <svg
      className={`palm-leaf-branch ${className}`}
      style={flip ? { transform: "scale(-1, -1)" } : undefined}
      viewBox="0 0 300 300"
      fill="none"
    >
      <g stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.95">
        {/* Main central curved stem */}
        <path d="M 0,0 C 80,60 160,140 295,295" strokeWidth="2.5" />

        {/* Top/Right spreading fronds */}
        <path d="M 20,22 C 70,8 140,10 210,25 Q 115,26 20,22" />
        <path d="M 45,46 C 100,22 180,25 255,48 Q 150,52 45,46" />
        <path d="M 70,72 C 130,46 210,52 280,82 Q 175,85 70,72" />
        <path d="M 98,102 C 160,76 240,84 292,120 Q 195,120 98,102" />
        <path d="M 130,136 C 190,112 260,124 296,162 Q 215,158 130,136" />
        <path d="M 166,174 C 220,154 275,172 298,208 Q 230,200 166,174" />
        <path d="M 205,212 C 248,196 282,216 298,252 Q 252,242 205,212" />

        {/* Bottom/Left spreading fronds */}
        <path d="M 22,20 C 12,65 20,130 45,182 Q 30,122 22,20" />
        <path d="M 46,45 C 32,96 46,162 82,215 Q 60,154 46,45" />
        <path d="M 72,70 C 60,122 82,188 128,245 Q 98,184 72,70" />
        <path d="M 102,102 C 92,154 120,218 174,270 Q 138,212 102,102" />
        <path d="M 136,138 C 130,186 160,242 218,284 Q 178,234 136,138" />
        <path d="M 174,176 C 170,214 202,260 258,290 Q 216,252 174,176" />
      </g>
    </svg>
  );
}

export function StringLights() {
  const strands = [
    // Layer 1: Top tight strand
    {
      path: "M -10,4 Q 340,18 680,5",
      bulbs: [
        { x: 20, y: 6 }, { x: 100, y: 10 }, { x: 180, y: 14 }, { x: 260, y: 17 },
        { x: 340, y: 18 }, { x: 420, y: 17 }, { x: 500, y: 14 }, { x: 580, y: 10 }, { x: 650, y: 6 }
      ]
    },
    {
      path: "M 670,5 Q 1020,18 1410,4",
      bulbs: [
        { x: 710, y: 6 }, { x: 790, y: 10 }, { x: 870, y: 14 }, { x: 950, y: 17 },
        { x: 1030, y: 18 }, { x: 1110, y: 17 }, { x: 1190, y: 14 }, { x: 1270, y: 10 }, { x: 1350, y: 6 }
      ]
    },
    // Layer 2: Second lower draped strand
    {
      path: "M -10,14 Q 340,38 680,15",
      bulbs: [
        { x: 50, y: 18 }, { x: 135, y: 25 }, { x: 220, y: 32 }, { x: 305, y: 37 },
        { x: 390, y: 37 }, { x: 475, y: 33 }, { x: 560, y: 27 }, { x: 635, y: 19 }
      ]
    },
    {
      path: "M 665,15 Q 1020,38 1410,14",
      bulbs: [
        { x: 735, y: 19 }, { x: 820, y: 27 }, { x: 905, y: 33 }, { x: 990, y: 37 },
        { x: 1075, y: 37 }, { x: 1160, y: 32 }, { x: 1245, y: 25 }, { x: 1330, y: 18 }
      ]
    }
  ];

  return (
    <svg className="string-lights" viewBox="0 0 1400 45" preserveAspectRatio="none">
      <defs>
        <radialGradient id="bulbGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#f7cb59" />
          <stop offset="100%" stopColor="#df9c16" />
        </radialGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      {strands.map((s, idx) => (
        <g key={idx}>
          <path d={s.path} stroke="#c98a22" strokeWidth="1.4" fill="none" opacity={idx < 2 ? "0.75" : "0.6"} />
          {s.bulbs.map((b, i) => (
            <g key={i}>
              <circle cx={b.x} cy={b.y} r={idx < 2 ? "7" : "6.5"} fill="#f7cb59" opacity="0.35" filter="url(#glow)" />
              <circle cx={b.x} cy={b.y} r={idx < 2 ? "4.8" : "4.3"} fill="url(#bulbGlow)" />
              <rect x={b.x - 1.2} y={b.y - 6.5} width="2.4" height="2" fill="#8c5807" rx="0.8" />
            </g>
          ))}
        </g>
      ))}
    </svg>
  );
}

function Petal({ rotate }) {
  return (
    <ellipse
      cx="0"
      cy="-11"
      rx="7"
      ry="12"
      transform={`rotate(${rotate})`}
      fill="currentColor"
    />
  );
}

export function RoseFlower({ size = 90, color = "#E47A5A", style, className = "" }) {
  return (
    <svg className={`flower-item ${className}`} width={size} height={size} viewBox="0 0 100 100" style={style}>
      <g fill={color} opacity="0.95">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((r) => (
          <path
            key={r}
            d="M 50,50 Q 30,10 50,2 Q 70,10 50,50"
            transform={`rotate(${r} 50 50)`}
          />
        ))}
        {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((r) => (
          <path
            key={r}
            d="M 50,50 Q 36,20 50,14 Q 64,20 50,50"
            fill="#D8712E"
            transform={`rotate(${r} 50 50)`}
          />
        ))}
        <circle cx="50" cy="50" r="14" fill="#8c3818" />
        <circle cx="50" cy="50" r="8" fill="#F1D3B0" />
      </g>
    </svg>
  );
}

export function DaisyFlower({ size = 85, petalColor = "#FFF8EE", centerColor = "#D8712E", style, className = "" }) {
  return (
    <svg className={`flower-item ${className}`} width={size} height={size} viewBox="0 0 100 100" style={style}>
      <g>
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((r) => (
          <ellipse
            key={r}
            cx="50"
            cy="22"
            rx="6.5"
            ry="20"
            fill={petalColor}
            transform={`rotate(${r} 50 50)`}
          />
        ))}
        <circle cx="50" cy="50" r="14" fill={centerColor} />
        <circle cx="50" cy="50" r="8" fill="#8c3818" />
      </g>
    </svg>
  );
}

export function BlossomFlower({ size = 95, petalColor = "#F1D3B0", style, className = "" }) {
  return (
    <svg className={`flower-item ${className}`} width={size} height={size} viewBox="0 0 100 100" style={style}>
      <g fill={petalColor}>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((r) => (
          <path
            key={r}
            d="M 50,50 Q 25,25 38,8 Q 62,8 75,25 Z"
            transform={`rotate(${r} 50 50)`}
          />
        ))}
      </g>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((r) => (
        <line
          key={r}
          x1="50"
          y1="50"
          x2="50"
          y2="30"
          stroke="#8c3818"
          strokeWidth="2"
          transform={`rotate(${r} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="10" fill="#D8712E" />
    </svg>
  );
}

export function Wildflower({ size = 80, petalColor = "#E4A15B", style, className = "" }) {
  return (
    <svg className={`flower-item ${className}`} width={size} height={size} viewBox="0 0 100 100" style={style}>
      <g fill={petalColor}>
        {[0, 60, 120, 180, 240, 300].map((r) => (
          <circle key={r} cx="50" cy="26" r="18" transform={`rotate(${r} 50 50)`} />
        ))}
      </g>
      <circle cx="50" cy="50" r="15" fill="#8c3818" />
      <circle cx="50" cy="50" r="8" fill="#FFF8EE" />
    </svg>
  );
}

export function Flower({ size = 46, petalColor, centerColor = "#8a4a1f", style, className = "" }) {
  return (
    <svg className={`flower-item ${className}`} width={size} height={size} viewBox="-20 -20 40 40" style={style}>
      <g color={petalColor}>
        {[0, 72, 144, 216, 288].map((r) => (
          <Petal key={r} rotate={r} />
        ))}
      </g>
      <circle cx="0" cy="0" r="5" fill={centerColor} />
    </svg>
  );
}

export function FloralCorner({ className = "" }) {
  return (
    <div className={`floral-corner ${className}`}>
      <RoseFlower size={110} color="#E47A5A" className="flower-1" style={{ position: "absolute", left: 0, bottom: 0 }} />
      <DaisyFlower size={85} petalColor="#FFF8EE" centerColor="#D8712E" className="flower-2" style={{ position: "absolute", left: 55, bottom: 45 }} />
      <BlossomFlower size={135} petalColor="#F1D3B0" className="flower-3" style={{ position: "absolute", left: 80, bottom: -12 }} />
      <Wildflower size={75} petalColor="#E4A15B" className="flower-4" style={{ position: "absolute", left: 160, bottom: 42 }} />
      <RoseFlower size={95} color="#D8712E" className="flower-5" style={{ position: "absolute", left: 195, bottom: 0 }} />
      <DaisyFlower size={80} petalColor="#FFFFFF" centerColor="#8c3818" className="flower-6" style={{ position: "absolute", left: 245, bottom: -8 }} />
    </div>
  );
}

export function RingIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="14" r="7" stroke="#D8712E" strokeWidth="2" />
      <path d="M9 8L12 2L15 8" stroke="#D8712E" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function ToastIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
      <path d="M5 3L7 13a3 3 0 003 3v5" stroke="#D8712E" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M19 3L17 13a3 3 0 01-3 3v5" stroke="#D8712E" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M3.5 3H8.5" stroke="#D8712E" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M15.5 3H20.5" stroke="#D8712E" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7 24H13" stroke="#D8712E" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function ForkIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
      <path d="M6 2v8m2-8v8m-2 0a2 2 0 004 0M8 10v12" stroke="#D8712E" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M17 2c-2 0-3 2-3 5s1 4 3 4v11" stroke="#D8712E" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z"
        fill="white"
      />
    </svg>
  );
}

export function MusicIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 18V5l12-2v13M9 18a3 3 0 11-6 0 3 3 0 016 0zm12-2a3 3 0 11-6 0 3 3 0 016 0z"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BottomFloralGarland({ className = "" }) {
  const centers = [30, 140, 250, 360, 470, 580, 690, 800, 910, 1020, 1130, 1240, 1350, 1420];
  const colors = ["#D8712E", "#E4A15B", "#C1601F", "#E89D63", "#D8712E"];
  const subColors = ["#FFFDF8", "#FDF1EA", "#F1D3B0"];

  return (
    <svg className={`bottom-floral-garland ${className}`} viewBox="0 0 1400 120" preserveAspectRatio="none">
      <path d="M -20,105 Q 350,95 700,105 Q 1050,95 1420,105" stroke="#7a5542" strokeWidth="2.2" fill="none" opacity="0.75" />
      <path d="M -20,110 Q 350,102 700,110 Q 1050,102 1420,110" stroke="#c1601f" strokeWidth="1.5" fill="none" opacity="0.6" />

      {centers.map((x, idx) => {
        const primaryColor = colors[idx % colors.length];
        const secondaryColor = subColors[idx % subColors.length];
        const y = 80 + (idx % 3) * 4;
        const mainSize = idx % 2 === 0 ? 28 : 24;

        return (
          <g key={idx}>
            {/* Leaves */}
            <path d={`M ${x - 22},${y + 8} C ${x - 38},${y - 6} ${x - 45},${y + 12} ${x - 22},${y + 8}`} fill="#7a5542" opacity="0.85" />
            <path d={`M ${x + 22},${y + 8} C ${x + 38},${y - 6} ${x + 45},${y + 12} ${x + 22},${y + 8}`} fill="#7a5542" opacity="0.85" />
            <path d={`M ${x - 12},${y - 14} C ${x - 25},${y - 30} ${x - 5},${y - 28} ${x - 12},${y - 14}`} fill="#8c5807" opacity="0.8" />
            <path d={`M ${x + 12},${y - 14} C ${x + 25},${y - 30} ${x + 5},${y - 28} ${x + 12},${y - 14}`} fill="#8c5807" opacity="0.8" />

            {/* Small accent flower */}
            <g transform={`translate(${x - 22}, ${y - 10})`}>
              {[0, 72, 144, 216, 288].map((r) => (
                <ellipse key={r} cx="0" cy="-6" rx="3.5" ry="6" transform={`rotate(${r})`} fill={secondaryColor} />
              ))}
              <circle cx="0" cy="0" r="3" fill="#D8712E" />
            </g>

            <g transform={`translate(${x + 24}, ${y - 8})`}>
              {[0, 72, 144, 216, 288].map((r) => (
                <ellipse key={r} cx="0" cy="-6" rx="3.5" ry="6" transform={`rotate(${r})`} fill={secondaryColor} />
              ))}
              <circle cx="0" cy="0" r="3" fill="#C1601F" />
            </g>

            {/* Main central flower */}
            <g transform={`translate(${x}, ${y})`}>
              {[0, 45, 90, 135, 180, 225, 270, 315].map((r) => (
                <ellipse key={r} cx="0" cy={-mainSize * 0.45} rx={mainSize * 0.28} ry={mainSize * 0.52} transform={`rotate(${r})`} fill={primaryColor} />
              ))}
              {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((r) => (
                <ellipse key={r} cx="0" cy={-mainSize * 0.35} rx={mainSize * 0.2} ry={mainSize * 0.4} transform={`rotate(${r})`} fill="#FFFDF8" opacity="0.9" />
              ))}
              <circle cx="0" cy="0" r={mainSize * 0.24} fill="#4A0E17" />
              <circle cx="0" cy="0" r={mainSize * 0.14} fill="#F5C56B" />
            </g>
          </g>
        );
      })}
    </svg>
  );
}
