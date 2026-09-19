import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Asmual AquaNature | Premium Fishes, Plants & Aquascaping",
  description:
    "Your premier aquatic sanctuary for freshwater & seawater fishes, exotic aquatic plants, bonsai, and accessories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-background text-foreground antialiased font-sans flex flex-col selection:bg-accent-soft selection:text-primary"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
