import Reveal from "@/components/Reveal";

const STEPS = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description: "Share a few details about your project through a quick form or WhatsApp.",
  },
  {
    number: "02",
    title: "Get a Quote",
    description: "We review your request and send back clear pricing and a timeline.",
  },
  {
    number: "03",
    title: "We Create It",
    description: "Our team gets to work and keeps you updated along the way.",
  },
  {
    number: "04",
    title: "You Receive the Final Work",
    description: "You get the finished files, ready to use — with revisions if needed.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            How it works
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From idea to finished work in four steps.
          </h2>
        </Reveal>

        <div className="relative mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-border lg:block" />
          {STEPS.map((step, index) => (
            <Reveal key={step.number} delay={index * 80} className="relative">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border-strong bg-background text-sm font-bold text-accent">
                {step.number}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
