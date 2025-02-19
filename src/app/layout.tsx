"use client";

import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./components/ThemeContext";
import { I18nextProvider } from "react-i18next";
import i18n from "./components/i18n/i18n";

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
      <body className={inter.className}>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider>{children}</ThemeProvider>
        </I18nextProvider>
        <Analytics />
      </body>
    </html>
  );
}
