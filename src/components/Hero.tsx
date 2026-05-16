import { motion } from "framer-motion";
import { images, profile } from "../data/profile";
import { ParticleField } from "./ParticleField";
import { SignalCanvas } from "./SignalCanvas";

export function Hero() {
  return (
    <section id="home" className="hero">
      <ParticleField />
      <div className="hero__grid">
        <div className="hero__copy">
          <motion.div
            className="hero__badge-row"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="hero__badge hero__badge--live">
              <span className="pulse-dot" />
              Open to opportunities
            </span>
            <span className="hero__badge">{profile.program}</span>
          </motion.div>

          <motion.p
            className="hero__legal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            {profile.legalName}
          </motion.p>

          <h1 className="hero__title">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.55 }}
            >
              {profile.preferredName}
            </motion.span>
            <motion.span
              className="hero__title-accent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.55 }}
            >
              Khalifah
            </motion.span>
          </h1>

          <motion.p
            className="hero__role"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            {profile.title}
          </motion.p>

          <motion.p
            className="hero__headline"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52 }}
          >
            {profile.headline}
          </motion.p>

          <motion.ul
            className="hero__open-to"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {profile.openTo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </motion.ul>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.68 }}
          >
            <a className="btn btn--primary" href={`mailto:${profile.email}`}>
              Email me
            </a>
            <a className="btn btn--ghost" href="#experience">
              View experience
            </a>
            <a className="btn btn--ghost" href="#contact">
              Contact form
            </a>
          </motion.div>

          <motion.ul
            className="hero__countries"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.78 }}
          >
            {profile.countries.map((c) => (
              <li key={c.name} title={c.context}>
                <strong>{c.name}</strong>
                <span>{c.context}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.7 }}
        >
          <div className="hero__photo-frame">
            <div className="hero__photo-ring" aria-hidden="true" />
            <img
              src={images.professional}
              alt={`${profile.preferredName} — professional portrait`}
              className="hero__photo"
              width={420}
              height={560}
              loading="eager"
            />
            <motion.div
              className="hero__photo-badge"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
            >
              <span className="hero__photo-badge-label">Research focus</span>
              <strong>ECG · Sleep · 1D CNN</strong>
            </motion.div>
          </div>

          <div className="hero__signal-card">
            <div className="hero__signal-label">
              <span className="pulse-dot" />
              Biomedical signal preview
            </div>
            <SignalCanvas />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
