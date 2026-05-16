import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { education, experience } from "../data/profile";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  const [openId, setOpenId] = useState<string>(experience[0].id);

  return (
    <section id="experience" className="section experience">
      <div className="section__inner">
        <SectionHeading
          label="Experience & Education"
          title="Journey"
          subtitle="International work, data analytics, diplomacy, and biomedical research."
        />

        <div className="experience__layout">
          <div className="timeline">
            {experience.map((item, i) => {
              const isOpen = openId === item.id;
              return (
                <motion.article
                  key={item.id}
                  className={`timeline__item${isOpen ? " is-open" : ""}`}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <button
                    type="button"
                    className="timeline__trigger"
                    onClick={() => setOpenId(isOpen ? "" : item.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="timeline__dot" />
                    <div className="timeline__summary">
                      <h3>{item.role}</h3>
                      <p>
                        {item.org} · {item.period}
                      </p>
                    </div>
                    <span className="timeline__chevron" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="timeline__details"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="timeline__location">{item.location}</p>
                        <ul>
                          {item.highlights.map((h) => (
                            <li key={h}>{h}</li>
                          ))}
                        </ul>
                        <div className="timeline__tags">
                          {item.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>

          <div className="education-stack">
            <h3 className="education-stack__title">Education</h3>
            {education.map((edu, i) => (
              <motion.div
                key={edu.id}
                className="edu-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <span className="edu-card__period">{edu.period}</span>
                <h4>{edu.degree}</h4>
                <p className="edu-card__school">{edu.school}</p>
                <p className="edu-card__loc">{edu.location}</p>
                {edu.note && <p className="edu-card__note">{edu.note}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
