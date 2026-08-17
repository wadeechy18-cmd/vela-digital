import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { mailtoLink, siteConfig, whatsappLink } from "@/config/site";

const SERVICE_LINKS = [
  "Video Editing",
  "Graphic Design",
  "Logo & Branding",
  "Business Websites",
  "App & Software Development",
  "Social Media Content",
  "Excel & Automation",
];

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-border bg-elevated/40">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#top" className="text-lg font-bold tracking-tight text-foreground">
              {siteConfig.name}
              <span className="text-accent">.</span>
            </a>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              Affordable video editing, graphic design, websites, and digital services built for
              small and growing businesses.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialLink href={siteConfig.instagramUrl} label="Instagram">
                <InstagramIcon className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={siteConfig.facebookUrl} label="Facebook">
                <FacebookIcon className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={mailtoLink} label="Email">
                <MailIcon className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={whatsappLink} label="WhatsApp">
                <WhatsAppIcon className="h-4 w-4" />
              </SocialLink>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICE_LINKS.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-muted transition hover:text-foreground"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Get in touch</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>
                <a href={mailtoLink} className="transition hover:text-foreground">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={whatsappLink} className="transition hover:text-foreground">
                  WhatsApp us
                </a>
              </li>
              <li>{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted sm:flex-row">
          <p>
            © {YEAR} {siteConfig.name}. All rights reserved.
          </p>
          <p>Digital services for growing businesses.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition hover:border-border-strong hover:text-foreground"
    >
      {children}
    </a>
  );
}
