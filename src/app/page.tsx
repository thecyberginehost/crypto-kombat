"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const tournamentDate = new Date("2025-02-21T00:00:00Z").getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeLeft = tournamentDate - now;

      if (timeLeft < 0) {
        setCountdown("The battle has begun!");
        return;
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen text-white text-center p-6 bg-cover bg-center font-sans"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Dark Overlay for Readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center space-y-12 w-full max-w-5xl">
        
        {/* What is Crypto Kombat? (Shortened) */}
        <div className="bg-gray-900 bg-opacity-90 p-6 rounded-lg shadow-lg text-center w-full max-w-3xl animate-fadeIn">
          <h3 className="text-4xl font-bold text-yellow-400">What is Crypto Kombat?</h3>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Crypto Kombat is a high-stakes crypto trading competition where players battle for profits in short, intense tournaments. 
            The best traders win big, while the biggest loser also takes home a prize from the prize pool.
          </p>
          <Link href="/about">
            <p className="mt-4 text-lg text-yellow-500 hover:text-yellow-400 font-semibold cursor-pointer transition">
              Click for more details →
            </p>
          </Link>
        </div>

        {/* Countdown Section */}
        <div className="text-center">
          <h1 className="text-7xl font-extrabold uppercase text-red-500 drop-shadow-lg animate-fadeIn">
            IT HAS BEGUN!
          </h1>
          <p className="text-5xl font-bold mt-2 text-yellow-500 drop-shadow-md animate-fadeIn">
            {countdown}
          </p>
        </div>

        {/* Call to Action Button */}
        <a
          href="/leaderboard"
          className="mt-4 px-8 py-4 text-xl font-bold text-black bg-yellow-500 hover:bg-yellow-600 rounded-lg transition duration-300 shadow-md hover:shadow-lg hover:scale-105 animate-bounce"
        >
          View Leaderboard 🏆
        </a>

        {/* ROADMAP SECTION */}
        <div className="bg-gray-900 bg-opacity-90 p-8 rounded-lg shadow-lg text-center w-full max-w-5xl animate-slideUp">
          <h3 className="text-4xl font-bold text-yellow-400">Crypto Kombat Roadmap</h3>
          <p className="mt-2 text-lg text-gray-300 leading-relaxed">
            Here’s the future of Crypto Kombat.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Phase 1 (In Progress) */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-900 p-6 rounded-lg shadow-md border border-green-400">
              <h4 className="text-2xl font-bold text-white">Phase 1: Launch (In Progress)</h4>
              <ul className="mt-3 text-gray-300 text-lg leading-relaxed">
                <li>🔹 Branding & website deployment</li>
                <li>🔹 First tournament initiation</li>
                <li>🔹 Community building & marketing push</li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-bold text-yellow-500">Phase 2: Expansion</h4>
              <ul className="mt-3 text-gray-300 text-lg leading-relaxed">
                <li>🔹 Tokenomics launch ($KOMBAT)</li>
                <li>🔹 Exchange listings & liquidity pool</li>
                <li>🔹 Enhanced tournament features</li>
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-bold text-blue-500">Phase 3: Scaling</h4>
              <ul className="mt-3 text-gray-300 text-lg leading-relaxed">
                <li>🔹 Referral system & staking</li>
                <li>🔹 Strategic partnerships</li>
                <li>🔹 UX/UI improvements</li>
              </ul>
            </div>

            {/* Phase 4 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-bold text-purple-500">Phase 4: Game Integration</h4>
              <ul className="mt-3 text-gray-300 text-lg leading-relaxed">
                <li>🔹 In-game $KOMBAT rewards</li>
                <li>🔹 Competitive rank system</li>
                <li>🔹 Special high-stakes tournaments</li>
              </ul>
            </div>

            {/* Phase 5 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-bold text-green-500">Phase 5: PvP Trading Mode</h4>
              <ul className="mt-3 text-gray-300 text-lg leading-relaxed">
                <li>🔹 PvP head-to-head trading battles</li>
                <li>🔹 Advanced statistics & analytics</li>
                <li>🔹 Cross-chain functionality</li>
              </ul>
            </div>

            {/* Phase 6 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-bold text-teal-500">Phase 6: Ecosystem Expansion</h4>
              <ul className="mt-3 text-gray-300 text-lg leading-relaxed">
                <li>🔹 Metaverse & gaming integrations</li>
                <li>🔹 Full Crypto Kombat ecosystem</li>
                <li>🔹 Large-scale competitive tournaments</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
