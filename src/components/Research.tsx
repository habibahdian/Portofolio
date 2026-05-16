import { motion } from "framer-motion";
import { useState } from "react";
import { profile } from "../data/profile";
import { SectionHeading } from "./SectionHeading";

export function Research() {
  const [active, setActive] = useState(0);

  return (
    <section id="research" className="section research">
      <div className="section__inner">
        <SectionHeading
          label="Research · Master's Focus"
          title="Healthcare AI & physiological signals"
          subtitle="Current work at WTMH Lab — framed for academic CVs, research applications, and industry roles."
        />

        <motion.div
          className="research__master"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3>Master's research direction</h3>
          <p>
            Developing AI-driven healthcare technologies for <strong>early diagnosis</strong>,{" "}
            <strong>remote monitoring</strong>, and more accessible care — with emphasis on sleep
            disorders, ECG-based detection, and 1D CNN pipelines.
          </p>
        </motion.div>

        <ul className="research-grid">
          {profile.researchInterests.map((item, i) => {
            const isActive = active === i;
            return (
              <motion.li
                key={item.topic}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <button
                  type="button"
                  className={`research-card${isActive ? " is-active" : ""}`}
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                >
                  <span className="research-card__index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="research-card__title">{item.topic}</span>
                  <span className="research-card__detail">{item.detail}</span>
                </button>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
