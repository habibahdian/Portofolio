import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.preferredName} Khalifah · {profile.university}
      </p>
      <button
        type="button"
        className="footer__top"
        onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
      >
        Back to top ↑
      </button>
    </footer>
  );
}
