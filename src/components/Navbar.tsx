import { motion } from "framer-motion";
import { useState } from "react";
import { images, navItems, profile, type SectionId } from "../data/profile";
import type { Theme } from "../hooks/useTheme";

type Props = {
  active: SectionId;
  theme: Theme;
  onToggleTheme: () => void;
};

export function Navbar({ active, theme, onToggleTheme }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <motion.header
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="navbar__inner" aria-label="Main">
        <button type="button" className="navbar__brand" onClick={() => scrollTo("home")}>
          <img
            src={images.professional}
            alt=""
            className="navbar__avatar"
            width={36}
            height={36}
          />
          <span className="navbar__brand-text">{profile.preferredName}</span>
        </button>

        <ul className={`navbar__links${menuOpen ? " is-open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={`navbar__link${active === item.id ? " is-active" : ""}`}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
                {active === item.id && (
                  <motion.span
                    className="navbar__indicator"
                    layoutId="nav-indicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <button
            type="button"
            className={`navbar__menu-btn${menuOpen ? " is-open" : ""}`}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
          <a className="btn btn--nav" href={`mailto:${profile.email}`}>
            Hire / Collaborate
          </a>
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
