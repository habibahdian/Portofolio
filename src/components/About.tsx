import { motion } from "framer-motion";
import { images, profile } from "../data/profile";
import { highlightKeywords } from "../utils/highlightKeywords";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="section about">
      <div className="section__inner section__inner--narrow">
        <SectionHeading
          label="Profile"
          title="About Me"
          subtitle="Biomedical engineering researcher with a global, data-driven background."
        />

        <div className="about__layout">
          <motion.aside
            className="about__gallery"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <figure className="about__figure about__figure--main">
              <img
                src={images.professional}
                alt={`${profile.preferredName} — professional portrait`}
                loading="lazy"
              />
            </figure>
            <figure className="about__figure about__figure--secondary">
              <img
                src={images.portrait}
                alt={`${profile.preferredName} — international experience`}
                loading="lazy"
              />
            </figure>
          </motion.aside>

          <div className="about__prose">
            {profile.bio.map((paragraph, i) => (
              <motion.p
                key={i}
                className="about__paragraph"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.05, duration: 0.45 }}
              >
                {highlightKeywords(paragraph)}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
