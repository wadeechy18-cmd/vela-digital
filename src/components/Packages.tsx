"use client";

import { useContactModal } from "@/components/contact/ContactModalContext";
import { CheckIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

type Plan = {
  name: string;
  description: string;
  price: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Starter",
    description: "For small one-off projects.",
    price: `Starting from ${siteConfig.currency}1,000`,
    features: [
      "Single deliverable (video, design, or asset)",
      "1–2 revision rounds",
      "Fast turnaround",
    ],
    cta: "Get Started",
  },
  {
    name: "Business",
    description: "For businesses that need regular digital content.",
    price: `Starting from ${siteConfig.currency}5,000`,
    features: [
      "Ongoing monthly content or design",
      "Priority turnaround",
      "Dedicated point of contact",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Custom",
    description: "For websites, automation, large projects, and custom requirements.",
    price: "Tailored to your project",
    features: [
      "Business websites & automation",
      "Multi-part or ongoing projects",
      "Scoped after a short discovery chat",
    ],
    cta: "Request a Quote",
  },
];

export default function Packages() {
  const { openModal } = useContactModal();

  return (
    <section id="packages" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Simple packages
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Straightforward pricing, no surprises.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Every project is different, so these are starting points. We&apos;ll always confirm
            exact pricing before any work begins.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl border p-7 ${
                plan.highlighted
                  ? "border-accent bg-elevated shadow-[0_0_0_1px_var(--accent)]"
                  : "border-border bg-elevated/60"
              }`}
            >
              {plan.highlighted && (
                <span className="mb-4 w-fit rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-accent-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
              <p className="mt-1.5 text-sm text-muted">{plan.description}</p>
              <p className="mt-6 text-2xl font-bold text-foreground">{plan.price}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-muted">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => openModal()}
                className={`mt-8 w-full rounded-full px-5 py-3 text-sm font-semibold transition ${
                  plan.highlighted
                    ? "bg-accent text-accent-foreground hover:brightness-110"
                    : "border border-border-strong text-foreground hover:bg-elevated-2"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
