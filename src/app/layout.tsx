import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./components/ThemeContext";
import I18nProvider from "./components/i18n/I18NProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Davi Zheng",
  description: "Davi's website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/_next/static/css/app/page.css" as="style" />
      </head>
      <body className={inter.className}>
        <I18nProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  );
}
