import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  title: "House Legacy Group",
  description:
    "Multidisciplinary consulting and media: research, strategy, and historical intelligence across media, civic strategy, and House Legacy AI.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "House Legacy Group",
    description:
      "Multidisciplinary consulting and media: research, strategy, and historical intelligence across media, civic strategy, and House Legacy AI.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}