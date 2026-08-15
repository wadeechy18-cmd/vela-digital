"use client";

import { useContactModal } from "@/components/contact/ContactModalContext";
import { ArrowRightIcon, PlayIcon } from "@/components/icons";

const CHIPS = ["Video Editing", "Graphic Design", "Web & Automation", "Social Content"];

export default function Hero() {
  const { openModal } = useContactModal();

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <div className="reveal is-visible flex flex-wrap justify-center gap-2">
          {CHIPS.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-border bg-elevated/60 px-3.5 py-1.5 text-xs font-medium text-muted"
            >
              {chip}
            </span>
          ))}
        </div>

        <h1 className="reveal is-visible mt-8 text-center text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-[4.2rem]">
          We Create Digital Work That Helps Your{" "}
          <span className="text-accent">Business Stand Out.</span>
        </h1>

        <p
          className="reveal is-visible mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-muted sm:text-lg"
          style={{ animationDelay: "80ms" }}
        >
          Video editing, graphic design, websites, social media content, and digital services —
          delivered quickly and affordably.
        </p>

        <div
          className="reveal is-visible mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ animationDelay: "140ms" }}
        >
          <button
            type="button"
            onClick={() => openModal()}
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition hover:brightness-110 sm:w-auto"
          >
            Get a Free Quote
            <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </button>
          <a
            href="#portfolio"
            className="group flex w-full items-center justify-center gap-2 rounded-full border border-border-strong px-7 py-3.5 text-sm font-semibold text-foreground transition hover:bg-elevated sm:w-auto"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-foreground/10">
              <PlayIcon className="h-2.5 w-2.5 translate-x-px" />
            </span>
            View Our Work
          </a>
        </div>

        <p
          className="reveal is-visible mt-10 text-center text-xs text-muted"
          style={{ animationDelay: "200ms" }}
        >
          Trusted by small businesses that need great creative work without agency overhead.
        </p>
      </div>
    </section>
  );
}
