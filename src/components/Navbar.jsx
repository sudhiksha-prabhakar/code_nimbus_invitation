const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "gallery", label: "Gallery" },
];

export default function Navbar({ page, onNavigate }) {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <ul>
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={page === l.id ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(l.id);
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
