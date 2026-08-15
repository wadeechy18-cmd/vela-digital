"use client";

import { useEffect, useRef, useState } from "react";
import { useContactModal } from "@/components/contact/ContactModalContext";
import { CheckIcon, CloseIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

const SERVICE_OPTIONS = [
  "Video Editing",
  "Reels & Shorts",
  "Social Media Content",
  "Promotional Videos",
  "Graphic Design",
  "Logo & Branding",
  "Posters & Flyers",
  "Menus & Catalogs",
  "Presentations",
  "Business Website",
  "Excel & Data Work",
  "Simple Automation",
  "Online Research",
  "Something else / Not sure",
];

const BUDGET_OPTIONS = [
  "Under ৳1,000",
  "৳1,000 – ৳5,000",
  "৳5,000 – ৳15,000",
  "৳15,000+",
  "Not sure yet",
];

type Status = "idle" | "submitting" | "success";

export default function ContactModal() {
  const { isOpen, closeModal, presetService } = useContactModal();
  const [status, setStatus] = useState<Status>("idle");
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => firstFieldRef.current?.focus(), 50);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      window.clearTimeout(timer);
    };
  }, [isOpen, closeModal]);

  useEffect(() => {
    if (!isOpen) {
      const timer = window.setTimeout(() => setStatus("idle"), 300);
      return () => window.clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    // No backend yet — simulate a brief submit and show a success state.
    window.setTimeout(() => setStatus("success"), 700);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-4"
      role="presentation"
    >
      <button
        type="button"
        aria-label="Close dialog"
        onClick={closeModal}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        className="relative z-10 max-h-[92vh] w-full overflow-y-auto rounded-t-3xl border border-border-strong bg-elevated p-6 shadow-2xl sm:max-w-lg sm:rounded-3xl sm:p-8"
      >
        <button
          type="button"
          onClick={closeModal}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition hover:border-border-strong hover:text-foreground"
        >
          <CloseIcon className="h-4 w-4" />
        </button>

        {status === "success" ? (
          <div className="flex flex-col items-center py-8 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <CheckIcon className="h-7 w-7" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-foreground">
              Thanks — your request is in.
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              We&apos;ve received your project details. Our team typically replies within
              24 hours with a quote and next steps. Feel free to reach out on WhatsApp in the
              meantime if it&apos;s urgent.
            </p>
            <button
              type="button"
              onClick={closeModal}
              className="mt-8 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:brightness-110"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <h3 id="contact-modal-title" className="pr-8 text-2xl font-semibold text-foreground">
              Get a free quote
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Tell us a bit about your project. No commitment — we&apos;ll get back to you
              with pricing and timeline.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Name" htmlFor="cf-name">
                  <input
                    ref={firstFieldRef}
                    id="cf-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className={inputClass}
                  />
                </Field>
                <Field label="Business name" htmlFor="cf-business">
                  <input
                    id="cf-business"
                    name="business"
                    type="text"
                    placeholder="Optional"
                    className={inputClass}
                  />
                </Field>
              </div>

              <Field label="Email or WhatsApp" htmlFor="cf-contact">
                <input
                  id="cf-contact"
                  name="contact"
                  type="text"
                  required
                  placeholder="you@example.com or +8801…"
                  className={inputClass}
                />
              </Field>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Service needed" htmlFor="cf-service">
                  <select
                    id="cf-service"
                    name="service"
                    required
                    defaultValue={presetService ?? ""}
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICE_OPTIONS.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Budget" htmlFor="cf-budget">
                  <select id="cf-budget" name="budget" className={inputClass} defaultValue="">
                    <option value="" disabled>
                      Select a range
                    </option>
                    {BUDGET_OPTIONS.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Project description" htmlFor="cf-description">
                <textarea
                  id="cf-description"
                  name="description"
                  required
                  rows={4}
                  placeholder="What do you need help with?"
                  className={`${inputClass} resize-none`}
                />
              </Field>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 flex w-full items-center justify-center rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "submitting" ? "Sending…" : "Submit Request"}
              </button>

              <p className="text-center text-xs text-muted">
                Prefer chat? Email{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-foreground underline underline-offset-2">
                  {siteConfig.email}
                </a>{" "}
                directly.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted/70 outline-none transition focus:border-accent focus:ring-1 focus:ring-accent";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-medium text-muted">
        {label}
      </label>
      {children}
    </div>
  );
}
