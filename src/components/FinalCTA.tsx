"use client";

import { useContactModal } from "@/components/contact/ContactModalContext";
import { ArrowRightIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";

export default function FinalCTA() {
  const { openModal } = useContactModal();

  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Tell us what you need and we&apos;ll send you a quote.
          </p>
          <button
            type="button"
            onClick={() => openModal()}
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground transition hover:brightness-110"
          >
            Get a Free Quote
            <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
