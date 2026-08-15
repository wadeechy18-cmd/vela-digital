import Reveal from "@/components/Reveal";

const BENEFITS = [
  {
    title: "Affordable",
    description: "Professional work without agency-level pricing.",
  },
  {
    title: "Fast",
    description: "Quick turnaround for most projects.",
  },
  {
    title: "Flexible",
    description: "One agency for multiple digital needs.",
  },
  {
    title: "Business-Focused",
    description: "We create work designed to help businesses look better and operate better.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Why choose us
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built for small businesses, not enterprise budgets.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 70} className="bg-background p-7">
              <span className="text-sm font-mono text-accent">0{index + 1}</span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{benefit.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
