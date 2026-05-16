import { motion } from "framer-motion";

type Props = {
  label: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ label, title, subtitle }: Props) {
  return (
    <motion.header
      className="section-heading"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="section-heading__label">{label}</span>
      <h2 className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </motion.header>
  );
}
