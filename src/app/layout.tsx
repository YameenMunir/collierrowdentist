import type { Metadata, Viewport } from "next";
import FloatingActions from "@/components/FloatingActions";
import SiteBehavior from "@/components/SiteBehavior";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Dentist in Collier Row | Collier Row Dental Practice",
  // Concept design, not the practice's official website: keep it out of search results.
  robots: { index: false, follow: false },
  icons: { icon: "/img/favicon.svg" },
  openGraph: { type: "website" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#05090d",
};

// Runs before first paint so the saved theme and motion preferences never flash.
const preHydrate = `(function(){var d=document.documentElement;try{var t=localStorage.getItem('crdp-theme-v2');if(t==='light')d.setAttribute('data-theme','light');}catch(e){}d.classList.add('js');if(!matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('motion');if(window.CSS&&CSS.supports('animation-timeline: view()'))d.classList.add('sda');}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: the pre-hydration script above adds classes/attributes to <html>.
    // data-scroll-behavior: the stylesheet sets `scroll-behavior: smooth`; this tells Next to
    // skip smooth scrolling only during route transitions.
    <html lang="en-GB" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Same Google Fonts the original design uses (Newsreader, Hanken Grotesk, DM Mono). */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400&family=Hanken+Grotesk:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;1,6..72,300;1,6..72,400&display=swap"
        />
        <script dangerouslySetInnerHTML={{ __html: preHydrate }} />
      </head>
      {/* suppressHydrationWarning: browser extensions (e.g. Grammarly) inject attributes onto <body> before React hydrates. */}
      <body suppressHydrationWarning>
        <a className="skip" href="#main">
          Skip to main content
        </a>
        <div className="progress" aria-hidden="true"></div>
        <SiteHeader />
        {children}
        <SiteFooter />
        <FloatingActions />
        <SiteBehavior />
      </body>
    </html>
  );
}
