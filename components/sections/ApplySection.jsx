"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { ctaPrimary, contactEmail, formOptions, instagramHandle, instagramUrl } from "@/data/site";
import { submitInquiry } from "@/lib/formspree";

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

const inputClass =
  "w-full rounded-sm border border-white/[0.08] bg-rebirth-void/80 px-4 py-4 text-base text-rebirth-white outline-none transition duration-luxury placeholder:text-rebirth-white/25 focus:border-white/20 sm:text-sm";

export function ApplySection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    brand: "",
    links: "",
    help: "",
    budget: "",
    details: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function updateField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    setSubmitted(false);
    setSubmitError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!form.email.trim() || !isValidEmail(form.email)) nextErrors.email = "A valid email is required.";
    if (!form.brand.trim()) nextErrors.brand = "Business / brand is required.";
    if (!form.help.trim()) nextErrors.help = "Tell us what you need help with.";
    if (!form.budget) nextErrors.budget = "Select a budget range.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setSubmitting(true);
    setSubmitError("");

    try {
      await submitInquiry(form);
      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        brand: "",
        links: "",
        help: "",
        budget: "",
        details: "",
      });
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or email us directly."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Section id="booking" className="bg-rebirth-void">
      <div className="panel-editorial relative grid gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <Label>{ctaPrimary}</Label>
          <h2 className="heading-display text-4xl sm:text-5xl lg:text-6xl">
            If you are building something serious, we should talk.
          </h2>
          <p className="body-muted mt-8 max-w-md">
            Share your vision, scope, and timeline. We review every inquiry with care and respond with clear next steps.
          </p>
          <p className="mt-6 text-sm text-rebirth-muted">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-rebirth-white"
            >
              {instagramHandle}
            </a>
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
            {[
              ["name", "Name", "text"],
              ["email", "Email", "email"],
              ["brand", "Business / Brand", "text"],
              ["links", "Instagram / Website", "text"],
            ].map(([key, label, type]) => (
              <label key={key} className="block">
                <span className="label-caps mb-2 block">
                  {label}
                </span>
                <input
                  type={type}
                  name={key}
                  value={form[key]}
                  onChange={(e) => updateField(key, e.target.value)}
                  aria-invalid={Boolean(errors[key])}
                  className={inputClass}
                />
                {errors[key] ? <p className="mt-1.5 text-xs text-red-300/90">{errors[key]}</p> : null}
              </label>
            ))}
            <label className="block">
              <span className="label-caps mb-2 block">
                What do you need help with?
              </span>
              <input
                type="text"
                name="help"
                value={form.help}
                onChange={(e) => updateField("help", e.target.value)}
                aria-invalid={Boolean(errors.help)}
                className={inputClass}
              />
              {errors.help ? <p className="mt-1.5 text-xs text-red-300/90">{errors.help}</p> : null}
            </label>
            <label className="block">
              <span className="label-caps mb-2 block">
                Budget Range
              </span>
              <select
                name="budget"
                value={form.budget}
                onChange={(e) => updateField("budget", e.target.value)}
                aria-invalid={Boolean(errors.budget)}
                className={inputClass}
              >
                <option value="">Select a range</option>
                {formOptions.budgetRanges.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              {errors.budget ? <p className="mt-1.5 text-xs text-red-300/90">{errors.budget}</p> : null}
            </label>
            <label className="block">
              <span className="label-caps mb-2 block">
                Project Details
              </span>
              <textarea
                name="details"
                rows={5}
                value={form.details}
                onChange={(e) => updateField("details", e.target.value)}
                placeholder="Timeline, scope, references, and what success looks like."
                className={`${inputClass} resize-none`}
              />
            </label>
            <Button type="submit" className="w-full sm:w-auto" disabled={submitting}>
              {submitting ? "Sending…" : "Submit inquiry"}
            </Button>
            {submitError ? (
              <p className="text-sm leading-relaxed text-red-300/90" role="alert">
                {submitError}{" "}
                <a href={`mailto:${contactEmail}`} className="underline transition hover:text-rebirth-white">
                  {contactEmail}
                </a>
              </p>
            ) : null}
            {submitted ? (
              <p
                className="rounded-sm border border-white/[0.08] bg-rebirth-elevated px-4 py-3 text-sm leading-relaxed text-rebirth-muted"
                role="status"
              >
                Thank you. Your inquiry is received. We will review it and respond with next steps.
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
