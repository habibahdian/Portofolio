import { motion } from "framer-motion";
import { useState } from "react";
import { profile } from "../data/profile";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="section__inner contact__inner">
        <SectionHeading
          label="Contact"
          title="Let's connect"
          subtitle="Open to research collaboration, internships, and meaningful healthcare-tech conversations."
        />

        <motion.div
          className="contact__card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
        >
          <a className="contact__email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <button type="button" className="btn btn--primary" onClick={copyEmail}>
            {copied ? "Copied!" : "Copy email"}
          </button>
          <p className="contact__location">
            {profile.location} · {profile.nationality}
          </p>
        </motion.div>

        <motion.form
          className="contact__form"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const subject = encodeURIComponent(String(data.get("subject") || "Portfolio inquiry"));
            const body = encodeURIComponent(String(data.get("message") || ""));
            window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <label>
            <span>Subject</span>
            <input name="subject" type="text" placeholder="Collaboration / Research" required />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows={4} placeholder="Hello Dian…" required />
          </label>
          <button type="submit" className="btn btn--ghost">
            Open in email app
          </button>
        </motion.form>
      </div>
    </section>
  );
}
