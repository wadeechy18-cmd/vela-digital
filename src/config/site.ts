/**
 * Central site configuration.
 * Update the values below to relaunch this site under a different name
 * or point it at real contact channels — nothing else in the codebase
 * needs to change.
 */

export const siteConfig = {
  name: "SolveIQ",
  shortName: "SolveIQ",
  tagline: "Digital Services for Growing Businesses",
  description:
    "Affordable video editing, graphic design, websites, social media content, and digital services for businesses.",

  // ---- Contact placeholders -------------------------------------------
  // Replace these four values with real details before launch.
  email: "wadeechy18@gmail.com",
  // Digits only, with country code, no spaces or symbols
  whatsappNumber: "8801752533287",
  // INSTAGRAM_PLACEHOLDER
  instagramUrl: "https://instagram.com/solveiq",
  // FACEBOOK_PLACEHOLDER
  facebookUrl: "https://facebook.com/solveiq",
  // -----------------------------------------------------------------------

  whatsappMessage: "Hi! I'd like to get a quote for a project.",
  location: "Remote — working with businesses worldwide",
  currency: "৳",
} as const;

export const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  siteConfig.whatsappMessage
)}`;

export const mailtoLink = `mailto:${siteConfig.email}`;
