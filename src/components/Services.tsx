import Reveal from "@/components/Reveal";
import {
  AutomationIcon,
  BadgeIcon,
  BookIcon,
  ClapperIcon,
  CodeIcon,
  FlyerIcon,
  GlobeIcon,
  MegaphoneIcon,
  PaletteIcon,
  PresentationIcon,
  SearchIcon,
  ShareIcon,
  SmartphoneIcon,
  TableIcon,
  VideoIcon,
  type IconProps,
} from "@/components/icons";

type Service = {
  name: string;
  description: string;
  icon: (props: IconProps) => React.ReactElement;
};

type Category = {
  id: string;
  title: string;
  description: string;
  services: Service[];
};

const CATEGORIES: Category[] = [
  {
    id: "content",
    title: "Content",
    description: "Scroll-stopping video and social content that gets watched.",
    services: [
      {
        name: "Video Editing",
        description: "Clean, engaging edits for any platform or purpose.",
        icon: VideoIcon,
      },
      {
        name: "Reels & Shorts",
        description: "TikTok, Reels, and YouTube Shorts built for retention.",
        icon: ClapperIcon,
      },
      {
        name: "Social Media Content",
        description: "Ongoing posts and creative that keep your feed active.",
        icon: ShareIcon,
      },
      {
        name: "Promotional Videos",
        description: "Product and service videos that drive action.",
        icon: MegaphoneIcon,
      },
    ],
  },
  {
    id: "design",
    title: "Design",
    description: "Visuals that make your business look established and trustworthy.",
    services: [
      {
        name: "Graphic Design",
        description: "On-brand visuals for anything you need to communicate.",
        icon: PaletteIcon,
      },
      {
        name: "Logo & Branding",
        description: "A simple, memorable identity for your business.",
        icon: BadgeIcon,
      },
      {
        name: "Posters & Flyers",
        description: "Print-ready designs for promotions and events.",
        icon: FlyerIcon,
      },
      {
        name: "Menus & Catalogs",
        description: "Organized, appetizing layouts for menus and product lists.",
        icon: BookIcon,
      },
      {
        name: "Presentations",
        description: "Investor decks and pitch presentations that land well.",
        icon: PresentationIcon,
      },
    ],
  },
  {
    id: "digital",
    title: "Digital",
    description: "The behind-the-scenes work that keeps your business running smoothly.",
    services: [
      {
        name: "Business Websites",
        description: "Fast, simple websites that turn visitors into customers.",
        icon: GlobeIcon,
      },
      {
        name: "App Development",
        description: "Simple mobile and web apps built around what your business needs.",
        icon: SmartphoneIcon,
      },
      {
        name: "Software Development",
        description: "Custom tools and small software builds for specific business problems.",
        icon: CodeIcon,
      },
      {
        name: "Excel & Data Work",
        description: "Spreadsheet cleanup, formatting, and organization.",
        icon: TableIcon,
      },
      {
        name: "Simple Automation",
        description: "Small workflow automations that save you manual hours.",
        icon: AutomationIcon,
      },
      {
        name: "Online Research",
        description: "Data entry and research so you can focus on the business.",
        icon: SearchIcon,
      },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            What we do
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            One team for content, design, and digital work.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Instead of juggling freelancers, get everything your business needs from a single,
            affordable partner.
          </p>
        </Reveal>

        <div className="mt-14 space-y-14">
          {CATEGORIES.map((category, catIndex) => (
            <Reveal key={category.id} delay={catIndex * 60}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                <p className="text-sm text-muted">{category.description}</p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {category.services.map((service) => (
                  <div
                    key={service.name}
                    className="group rounded-2xl border border-border bg-elevated/60 p-5 transition duration-300 hover:-translate-y-1 hover:border-border-strong hover:bg-elevated"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-accent-foreground">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <h4 className="mt-4 text-sm font-semibold text-foreground">{service.name}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
