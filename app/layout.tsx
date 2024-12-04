import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import localFont from "@next/font/local";
import "./globals.css";

export const metadata = {
  title: "Ervin Behxheti | Software Developer",
  description: "Ervin Behxheti's personal portfolio showcasing projects, skills, and experience in web development.",
};

const sfRegular = localFont({
  src: [
    {
      path: "../public/fonts/sf-regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-sfRegular",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${sfRegular.variable} font-custom bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
