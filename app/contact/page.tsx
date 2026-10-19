"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowDown, Mail } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { personal } from "@/data/personal";
import styles from "./contact.module.css";

const contactLinks = [
  { label: "Email", href: `mailto:${personal.email}`, value: personal.email, icon: Mail },
];

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function createMailtoHref(formData: typeof initialState) {
  const subject = encodeURIComponent(formData.subject.trim());
  const body = encodeURIComponent(
    `From: ${formData.name.trim()} <${formData.email.trim()}>\n\n${formData.message.trim()}`,
  );
  return `mailto:${personal.email}?subject=${subject}&body=${body}`;
}

export default function ContactPage() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "error" | "ready">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onChange = (field: keyof typeof initialState, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
    setStatus("idle");
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!formData.name.trim()) nextErrors.name = "Name is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) nextErrors.email = "Enter a valid email.";
    if (!formData.subject.trim()) nextErrors.subject = "Subject is required.";
    if (!formData.message.trim()) nextErrors.message = "Please add a message.";
    return nextErrors;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      return;
    }

    window.location.href = createMailtoHref(formData);
    setStatus("ready");
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.pageGrid} aria-hidden="true" />
      <div className={styles.content}>
        <Reveal className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              <span /> CONTACT
            </p>
            <h1>Let’s talk about build ideas, projects, and learning.</h1>
            <p className={styles.heroIntro}>
              A simple contact experience for people who want to reach out about product work, collaboration, or thoughtful conversations about software.
            </p>
          </div>
          <div className={styles.heroAside} aria-hidden="true">
            <span className={styles.heroAsideLabel}>CONNECT</span>
            <span className={styles.heroGlyph}>C</span>
            <div className={styles.orbit}>
              <i />
              <i />
              <i />
            </div>
            <span className={styles.heroAsideIndex}>CONTACT / 01</span>
          </div>
          <a className={styles.scrollCue} href="#contact-shell" aria-label="Scroll to contact information and form">
            <ArrowDown aria-hidden="true" size={14} />
          </a>
        </Reveal>

        <Reveal className={styles.section} delay={0.03}>
          <section id="contact-shell" aria-labelledby="contact-title">
            <SectionHeading
              id="contact-title"
              index="01"
              eyebrow="CONTACT LINKS"
              title="Reach out"
              description="Send a message using your email app, or contact me directly."
            />
            <div className={styles.contactLayout}>
              <div className={styles.linkList}>
                {contactLinks.map(({ label, href, value, icon: Icon }) => (
                  <a key={label} href={href} className={styles.linkCard}>
                    <Icon aria-hidden="true" size={16} />
                    <div>
                      <span>{label}</span>
                      <strong>{value}</strong>
                    </div>
                  </a>
                ))}
              </div>

              <form className={styles.formWrap} onSubmit={onSubmit} noValidate aria-label="Contact form">
                <div className={styles.formGrid}>
                  <label>
                    <span>Name</span>
                    <input
                      id="contact-name"
                      autoComplete="name"
                      maxLength={100}
                      required
                      value={formData.name}
                      onChange={(event) => onChange("name", event.target.value)}
                      placeholder="Name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                    />
                    {errors.name && <small id="contact-name-error">{errors.name}</small>}
                  </label>
                  <label>
                    <span>Email</span>
                    <input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      maxLength={254}
                      required
                      value={formData.email}
                      onChange={(event) => onChange("email", event.target.value)}
                      placeholder="Email"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "contact-email-error" : undefined}
                    />
                    {errors.email && <small id="contact-email-error">{errors.email}</small>}
                  </label>
                  <label className={styles.fullWidth}>
                    <span>Subject</span>
                    <input
                      id="contact-subject"
                      maxLength={150}
                      required
                      value={formData.subject}
                      onChange={(event) => onChange("subject", event.target.value)}
                      placeholder="Subject"
                      aria-invalid={Boolean(errors.subject)}
                      aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                    />
                    {errors.subject && <small id="contact-subject-error">{errors.subject}</small>}
                  </label>
                  <label className={styles.fullWidth}>
                    <span>Message</span>
                    <textarea
                      id="contact-message"
                      maxLength={5000}
                      required
                      value={formData.message}
                      onChange={(event) => onChange("message", event.target.value)}
                      placeholder="Message"
                      rows={6}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "contact-message-error" : undefined}
                    />
                    {errors.message && <small id="contact-message-error">{errors.message}</small>}
                  </label>
                </div>

                <div className={styles.formActions}>
                  <button type="submit">
                    Open email app
                  </button>
                  {status === "ready" && (
                    <p className={styles.success} role="status">
                      Your email app should open with the message ready. Send it there to complete delivery. If it did not open,{" "}
                      <a href={createMailtoHref(formData)}>try the email link again</a>.
                    </p>
                  )}
                  {status === "error" && (
                    <p className={styles.error} role="alert">
                      Please fix the highlighted fields and try again.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
