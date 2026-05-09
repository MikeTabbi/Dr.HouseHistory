import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "House Legacy Group",
  description:
    "Multidisciplinary consulting and media: research, strategy, and historical intelligence across media, civic strategy, and House Legacy AI.",
  metadataBase: new URL("https://houselegacygroup.com"),
  openGraph: {
    title: "House Legacy Group",
    description:
      "Multidisciplinary consulting and media: research, strategy, and historical intelligence across media, civic strategy, and House Legacy AI.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "House Legacy Group LLC" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
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
