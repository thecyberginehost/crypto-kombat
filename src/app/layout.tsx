import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main className="pt-16 pb-12">{children}</main> {/* Ensures content isn’t behind navbar/footer */}
        <Footer />
      </body>
    </html>
  );
}
