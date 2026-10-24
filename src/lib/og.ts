import type { Metadata } from "next";

// Link previews (iMessage, Slack, LinkedIn) need absolute URLs, and the GitHub Pages
// mirror lives under a different path, so previews always point at the main domain.
export const SITE_URL = "https://asainz.xyz";

// og:video plays as a muted loop in Messages on iOS and macOS. Apps that don't play
// video fall back to og:image, so both use the same 1200x630 frame.
// Next replaces a page's whole `openGraph` object instead of merging it with the
// layout's, so spread these into every page that sets its own `openGraph`.
export const siteOpenGraph = {
  siteName: "Adriana Navarro Sainz",
  type: "website",
  images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Adriana Navarro Sainz, selected work" }],
  videos: [{ url: `${SITE_URL}/og.mp4`, secureUrl: `${SITE_URL}/og.mp4`, type: "video/mp4", width: 1200, height: 630 }],
} satisfies Metadata["openGraph"];

export const siteTwitter = {
  card: "summary_large_image",
  images: ["/og.jpg"],
} satisfies Metadata["twitter"];
