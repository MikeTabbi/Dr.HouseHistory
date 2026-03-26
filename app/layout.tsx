import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "House Legacy Group — Subcontractor Portal",
  description: "Apply to join the House Legacy Group AI training network.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
