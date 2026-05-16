import { motion } from "framer-motion";
import { profile, skillCategories } from "../data/profile";
import { highlightKeywords } from "../utils/highlightKeywords";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section__inner section__inner--narrow">
        <SectionHeading
          label="Capabilities"
          title="Technical Skills"
          subtitle="Grouped by domain — aligned with research, analytics, and engineering practice."
        />

        <motion.div
          className="skill-groups"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {skillCategories.map((group, i) => (
            <motion.div
              key={group.label}
              className="skill-group"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <h3 className="skill-group__label">{group.label}</h3>
              <ul className="skill-group__list">
                {group.skills.map((skill) => (
                  <li key={skill}>{highlightKeywords(skill)}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="skills__languages"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="skills__languages-title">Languages</h3>
          <ul className="lang-bars">
            {profile.languages.map((lang, i) => (
              <motion.li
                key={lang.name}
                className="lang-bar"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <div className="lang-bar__head">
                  <span>{lang.name}</span>
                  <span>{lang.level}</span>
                </div>
                <div className="lang-bar__track">
                  <motion.span
                    className="lang-bar__fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.85, delay: 0.08 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
