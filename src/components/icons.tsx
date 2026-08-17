// Hand-rolled line icons (no icon library dependency).
// All icons share a 24x24 viewBox and a consistent stroke style.

export type IconProps = {
  className?: string;
};

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function VideoIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="2.5" y="5.5" width="13" height="13" rx="2.2" />
      <path d="M15.5 10.2 21 7.3v9.4l-5.5-2.9" />
    </svg>
  );
}

export function ClapperIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M3 10.5h18V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7.5Z" />
      <path d="M3 10.5 4.2 5.8a1.6 1.6 0 0 1 1.9-1.2l12.6 2.8a1.6 1.6 0 0 1 1.2 1.9l-.4 1.2" />
      <path d="m7 5 2.3 4.6M12 4.2l2.3 4.6" />
    </svg>
  );
}

export function ShareIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="18" cy="5.5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="18.5" r="2.5" />
      <path d="m8.2 10.8 7.6-4.6M8.2 13.2l7.6 4.6" />
    </svg>
  );
}

export function MegaphoneIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M3 10v4a1 1 0 0 0 1 1h2l1.2 4.4a1 1 0 0 0 1 .6h1.3a1 1 0 0 0 .95-1.32L9.4 15" />
      <path d="M6 10v4h2.5L18 19V5l-9.5 5H6Z" />
      <path d="M18 9.5a2.5 2.5 0 0 1 0 5" />
    </svg>
  );
}

export function PaletteIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.8-.9 1.8-1.8 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-.9.7-1.6 1.6-1.6H16a4 4 0 0 0 4-4c0-4.5-3.6-8.2-8-8.2Z" />
      <circle cx="7.5" cy="11" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="9.5" cy="7.2" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="14.2" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="16.8" cy="10" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function BadgeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="9" r="5.5" />
      <path d="M8.5 13.5 7 21l5-2.5 5 2.5-1.5-7.5" />
    </svg>
  );
}

export function FlyerIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="4" y="3" width="16" height="18" rx="1.6" />
      <path d="M7.5 8h9M7.5 11.5h9M7.5 15h5.5" />
    </svg>
  );
}

export function BookIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4 4.5c2-.8 5-.8 8 .5v14c-3-1.3-6-1.3-8-.5v-14Z" />
      <path d="M20 4.5c-2-.8-5-.8-8 .5v14c3-1.3 6-1.3 8-.5v-14Z" />
    </svg>
  );
}

export function PresentationIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3" y="4" width="18" height="12" rx="1.6" />
      <path d="M12 16v4M8.5 20h7" />
      <path d="m7.5 12 2.6-3 2.2 2.2L16.5 8" />
    </svg>
  );
}

export function GlobeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.3 3.7 5.2 3.7 8.5s-1.3 6.2-3.7 8.5c-2.4-2.3-3.7-5.2-3.7-8.5S9.6 5.8 12 3.5Z" />
    </svg>
  );
}

export function TableIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3.5" y="4.5" width="17" height="15" rx="1.6" />
      <path d="M3.5 9.5h17M3.5 14.5h17M9.5 4.5v15" />
    </svg>
  );
}

export function AutomationIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="6" cy="7" r="2.3" />
      <circle cx="18" cy="17" r="2.3" />
      <path d="M8.3 7H15a3 3 0 0 1 3 3v4.7M15.7 17H9a3 3 0 0 1-3-3V9.3" />
    </svg>
  );
}

export function SmartphoneIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.2" />
      <path d="M10.5 18.2h3" />
    </svg>
  );
}

export function CodeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="m9 7.5-5 4.5 5 4.5M15 7.5l5 4.5-5 4.5" />
    </svg>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m19.5 19.5-4.3-4.3" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="m5.5 5.5 13 13M18.5 5.5l-13 13" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4.5 12h15M13.5 5.5 20 12l-6.5 6.5" />
    </svg>
  );
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg {...base} fill="currentColor" stroke="none" className={className} aria-hidden="true">
      <path d="M8 5.5v13l11-6.5-11-6.5Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="16.9" cy="7.1" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M13.8 8.2h1.7V5.6h-1.9c-2 0-3.1 1.2-3.1 3.1v1.7H8.9v2.7h1.6V19h2.7v-5.9h1.9l.4-2.7h-2.3V9.1c0-.6.3-.9.9-.9Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 6.5 8 6.2 8-6.2" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.6.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5C10 9 9.5 7.7 9.3 7.2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 .9-1 2.3s1 2.7 1.2 2.9c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.5-.3Z" />
      <path d="M12 2.5A9.5 9.5 0 0 0 3.6 17l-1.1 4 4.1-1.1A9.5 9.5 0 1 0 12 2.5Zm0 1.7a7.8 7.8 0 1 1 0 15.6 7.7 7.7 0 0 1-4-1.1l-.3-.2-2.5.7.7-2.4-.2-.3A7.8 7.8 0 0 1 12 4.2Z" />
    </svg>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 2.5 14.6 9l7 .5-5.4 4.4 1.9 6.8L12 17l-6.1 3.7 1.9-6.8L2.4 9.5l7-.5 2.6-6.5Z" />
    </svg>
  );
}
