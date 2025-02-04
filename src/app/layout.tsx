import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crypto Kombat - The Ultimate Trading Battle",
  description: "Compete in high-stakes crypto trading battles and claim your victory!",
  icons: {
    icon: "/favicon.ico", // Ensure this exists in the public folder
  },
  metadataBase: new URL("https://crypto-kombat.vercel.app"), // Update with actual domain after deployment
  openGraph: {
    title: "Crypto Kombat",
    description: "The most intense crypto trading competition!",
    url: "https://crypto-kombat.vercel.app", // Ensure it's your final domain
    siteName: "Crypto Kombat",
    images: [
      {
        url: "/og-image.png", // Add this image in the public folder for social previews
        width: 1200,
        height: 630,
        alt: "Crypto Kombat Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Kombat",
    description: "Join the ultimate crypto trading battle!",
    images: ["/og-image.png"], // Twitter preview image
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-black text-white">
        <Navbar />
        <main className="pt-16 pb-12">{children}</main> {/* Ensures content isn’t behind navbar/footer */}
        <Footer />
      </body>
    </html>
  );
}
