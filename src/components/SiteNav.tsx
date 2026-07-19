import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/theme", label: "This Year's Theme" },
  { to: "/history", label: "Historical Events" },
];

export default function SiteNav() {
  const location = useLocation();

  return (
    <nav className="relative z-10 flex flex-wrap items-center justify-between gap-4 px-6 py-8 sm:px-10 lg:px-16">
      <Link to="/" className="flex items-center gap-3">
        <img
          src="/logo.jpg"
          alt="Hononga Milon logo"
          className="h-9 w-9 rounded-full border border-line object-cover"
        />
        <span className="font-display text-lg font-bold text-maroon">Hononga Milon</span>
      </Link>
      <ul className="flex gap-6 text-sm font-semibold">
        {links.map(({ to, label }) => {
          const isActive = location.pathname === to;
          return (
            <li key={to}>
              <Link
                to={to}
                className={
                  isActive
                    ? "text-maroon"
                    : "text-muted transition-colors hover:text-terracotta"
                }
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
