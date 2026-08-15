"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import {
  BadgeIcon,
  ClapperIcon,
  GlobeIcon,
  ShareIcon,
} from "@/components/icons";
import type { IconProps } from "@/components/icons";

type Category = "Social Media" | "Video" | "Branding" | "Web Design";

type PortfolioItem = {
  title: string;
  category: Category;
  description: string;
  icon: (props: IconProps) => React.ReactElement;
  gradient: string;
};

const CATEGORY_ICON: Record<Category, (props: IconProps) => React.ReactElement> = {
  "Social Media": ShareIcon,
  Video: ClapperIcon,
  Branding: BadgeIcon,
  "Web Design": GlobeIcon,
};

const ITEMS: PortfolioItem[] = [
  {
    title: "Café Feed Refresh",
    category: "Social Media",
    description: "A cohesive month of post templates for a local café brand.",
    icon: ShareIcon,
    gradient: "from-[#cdff4d]/25 via-[#1a1a1e] to-[#0a0a0b]",
  },
  {
    title: "Product Launch Reel",
    category: "Video",
    description: "Fast-cut short-form edit concept for a product drop.",
    icon: ClapperIcon,
    gradient: "from-[#4dd2ff]/20 via-[#1a1a1e] to-[#0a0a0b]",
  },
  {
    title: "Studio Mark Concept",
    category: "Branding",
    description: "Logo and mark exploration for a boutique fitness studio.",
    icon: BadgeIcon,
    gradient: "from-[#ff8a4d]/20 via-[#1a1a1e] to-[#0a0a0b]",
  },
  {
    title: "Local Services Site",
    category: "Web Design",
    description: "One-page conversion site concept for a home services business.",
    icon: GlobeIcon,
    gradient: "from-[#cdff4d]/20 via-[#1a1a1e] to-[#0a0a0b]",
  },
  {
    title: "Restaurant Promo Cutdown",
    category: "Video",
    description: "15-second promotional cutdown concept for a weekend special.",
    icon: ClapperIcon,
    gradient: "from-[#ff4d9c]/18 via-[#1a1a1e] to-[#0a0a0b]",
  },
  {
    title: "Boutique Identity System",
    category: "Branding",
    description: "Logo, palette, and stationery concept for a retail boutique.",
    icon: BadgeIcon,
    gradient: "from-[#a24dff]/20 via-[#1a1a1e] to-[#0a0a0b]",
  },
  {
    title: "Clinic Booking Page",
    category: "Web Design",
    description: "Simple appointment-focused landing page concept for a clinic.",
    icon: GlobeIcon,
    gradient: "from-[#4dffb2]/18 via-[#1a1a1e] to-[#0a0a0b]",
  },
  {
    title: "Weekly Content Carousel",
    category: "Social Media",
    description: "Educational carousel template concept for consistent posting.",
    icon: ShareIcon,
    gradient: "from-[#4d9cff]/18 via-[#1a1a1e] to-[#0a0a0b]",
  },
];

const FILTERS: Array<"All" | Category> = ["All", "Social Media", "Video", "Branding", "Web Design"];

export default function Portfolio() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const visibleItems = filter === "All" ? ITEMS : ITEMS.filter((item) => item.category === filter);

  return (
    <section id="portfolio" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Portfolio
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A look at the kind of work we produce.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We&apos;re a growing studio — the examples below are concept projects created to
              demonstrate our style, not completed work for real clients.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2">
          {FILTERS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                filter === item
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border text-muted hover:border-border-strong hover:text-foreground"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visibleItems.map((item, index) => {
            const CategoryIcon = CATEGORY_ICON[item.category];
            return (
              <Reveal key={item.title} delay={(index % 4) * 60}>
                <div className="group overflow-hidden rounded-2xl border border-border bg-elevated/60 transition duration-300 hover:-translate-y-1 hover:border-border-strong">
                  <div
                    className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${item.gradient}`}
                  >
                    <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white/90 backdrop-blur-sm">
                      Concept Project
                    </div>
                    <item.icon className="h-11 w-11 text-foreground/70 transition duration-300 group-hover:scale-110 group-hover:text-accent" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-muted">
                      <CategoryIcon className="h-3.5 w-3.5" />
                      {item.category}
                    </div>
                    <h3 className="mt-2 text-sm font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-muted">
          All portfolio pieces above are original concept designs created to showcase our
          capabilities and are not attributed to any real client.
        </p>
      </div>
    </section>
  );
}
