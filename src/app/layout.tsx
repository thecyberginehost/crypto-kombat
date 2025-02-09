import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crypto Kombat - The Ultimate Trading Battle",
  description: "Compete in high-stakes crypto trading battles and claim your victory!",
  metadataBase: new URL("https://cryptokombat.xyz"), // Updated with your final domain
  icons: {
    icon: "/favicon.ico", // Ensure this file exists in /public folder
  },
  openGraph: {
    title: "Crypto Kombat",
    description: "The most intense crypto trading competition!",
    url: "https://cryptokombat.xyz", // Updated final domain
    siteName: "Crypto Kombat",
    images: [
      {
        url: "/og-image.png", // Ensure this exists in the public folder
        width: 1200,
        height: 630,
        alt: "Crypto Kombat Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@CryptoKombatHQ", // Update with your official Twitter handle
    title: "Crypto Kombat",
    description: "Join the ultimate crypto trading battle!",
    images: ["https://cryptokombat.xyz/og-image.png"], // Ensure the image URL is correct
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Crypto Kombat - The Ultimate Trading Battle" />
        <meta property="og:description" content="Compete in high-stakes crypto trading battles and claim your victory!" />
        <meta property="og:image" content="https://cryptokombat.xyz/og-image.png" />
        <meta property="og:url" content="https://cryptokombat.xyz" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Crypto Kombat" />
        <meta name="twitter:description" content="Join the ultimate crypto trading battle!" />
        <meta name="twitter:image" content="https://cryptokombat.xyz/og-image.png" />
      </head>
      <body className="bg-black text-white">
        <Navbar />
        <main className="pt-16 pb-12">{children}</main> {/* Ensures content isn’t behind navbar/footer */}
        <Footer />
      </body>
    </html>
  );
}
