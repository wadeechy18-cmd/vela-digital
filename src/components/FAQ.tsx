"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { ChevronDownIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

const FAQS = [
  {
    question: "What services do you offer?",
    answer:
      "We handle video editing, reels & shorts, social media content, promotional videos, graphic design, logo & branding, posters & flyers, menus & catalogs, presentations, business websites, Excel & data work, simple automation, and online research.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Most single-deliverable projects (like a video edit or a design) are completed within a few days. Larger projects like websites or ongoing content plans take longer — we'll give you a clear timeline in your quote.",
  },
  {
    question: "Do you work with businesses outside Bangladesh?",
    answer:
      "Yes. We work with small businesses everywhere and communicate over email and WhatsApp, so location isn't a barrier.",
  },
  {
    question: "Can I request a custom project?",
    answer:
      "Absolutely. If your project doesn't fit neatly into a package, choose \"Custom\" and describe what you need — we'll scope it and send a tailored quote.",
  },
  {
    question: "Do you offer revisions?",
    answer:
      "Yes, reasonable revisions are included so the final work matches what you had in mind. The exact number of rounds depends on the package and will be confirmed upfront.",
  },
  {
    question: "How do I get a quote?",
    answer: `Click "Get a Free Quote" anywhere on this page, fill in a few details about your project, and we'll respond with pricing. You can also reach us directly at ${siteConfig.email}.`,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">FAQ</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Common questions
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-elevated/40">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7"
                  >
                    <span className="text-sm font-semibold text-foreground sm:text-base">
                      {faq.question}
                    </span>
                    <ChevronDownIcon
                      className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-accent" : ""
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  className={`grid overflow-hidden px-5 transition-all duration-300 ease-out sm:px-7 ${
                    isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                  style={{ display: "grid" }}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm leading-relaxed text-muted">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
