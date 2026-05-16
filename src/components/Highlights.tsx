import { motion } from "framer-motion";
import { experienceHighlights } from "../data/profile";
import { highlightKeywords } from "../utils/highlightKeywords";
import { SectionHeading } from "./SectionHeading";

export function Highlights() {
  return (
    <section id="highlights" className="section highlights-section">
      <div className="section__inner section__inner--narrow">
        <SectionHeading
          label="Career path"
          title="Experience & Highlights"
          subtitle="Chronological overview from training and recognition to current graduate research."
        />

        <ol className="exp-timeline" aria-label="Experience and highlights timeline">
          {experienceHighlights.map((item, i) => (
            <motion.li
              key={item.id}
              className={`exp-timeline__item${item.isCurrent ? " is-current" : ""}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
            >
              <article className="exp-card">
                {item.period && (
                  <time className="exp-card__period" dateTime="2025">
                    {item.period}
                  </time>
                )}
                <h3 className="exp-card__title">{item.title}</h3>
                <p className="exp-card__org">{item.org}</p>
                <p className="exp-card__desc">{highlightKeywords(item.description)}</p>
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
