import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Valor Financial Advisors | Holistic Financial Planning",
  description:
    "Your whole picture. One trusted plan. Valor Financial Advisors offers holistic financial planning, investment management, insurance, and retirement strategies for high-net-worth individuals in Franklin, TN.",
  keywords:
    "financial advisor, fiduciary, investment management, retirement planning, Franklin TN, holistic financial planning",
  openGraph: {
    title: "Valor Financial Advisors | Holistic Financial Planning",
    description:
      "Your whole picture. One trusted plan. Comprehensive financial services from a trusted fiduciary advisor.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
