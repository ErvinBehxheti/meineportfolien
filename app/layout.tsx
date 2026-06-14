import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import localFont from "next/font/local";
import type { Metadata, Viewport } from "next";
import "./globals.css";

const sfPro = localFont({
  src: [
    {
      path: "../public/fonts/sf-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/sf-medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-sf",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ervin.vercel.app"),
  title: "Ervin Behxheti — JavaScript Engineer",
  description:
    "JavaScript Engineer building high-performance web products with Next.js, React, TypeScript, and Node.js. Based in Riga, Latvia.",
  keywords: [
    "JavaScript Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Frontend Developer",
    "Full-Stack Developer",
    "Riga",
  ],
  openGraph: {
    title: "Ervin Behxheti — JavaScript Engineer",
    description:
      "Building polished interfaces, dashboard systems, and production-ready web applications with Next.js, React, TypeScript, and Node.js.",
    url: "https://ervin.vercel.app",
    siteName: "Ervin Behxheti",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#06070d" },
    { media: "(prefers-color-scheme: light)", color: "#f2f5fb" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${sfPro.variable} font-sans antialiased bg-[var(--background)] text-[var(--text-primary)]`}
      >
        {/* Atmosphere – aurora depth + film grain behind everything */}
        <div className="aurora" aria-hidden>
          <div className="aurora-blob" />
          <div className="aurora-blob" />
          <div className="aurora-blob" />
        </div>
        <div className="noise" aria-hidden />

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster
              position="top-right"
              toastOptions={{
                style: {
                  background: "var(--surface-1)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  fontSize: "0.875rem",
                },
              }}
            />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
