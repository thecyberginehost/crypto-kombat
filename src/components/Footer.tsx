"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-lg py-4 text-white text-center">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">&copy; 2025 Crypto Kombat. All Rights Reserved.</p>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-3 md:mt-0">
          <Link href="https://x.com/CryptoKombatHQ" target="_blank" rel="noopener noreferrer">
            <Image src="/twitter.png" alt="Twitter" width={30} height={30} />
          </Link>
          <Link href="https://t.me" target="_blank" rel="noopener noreferrer">
            <Image src="/telegram.png" alt="Telegram" width={30} height={30} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
