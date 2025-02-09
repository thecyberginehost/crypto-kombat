"use client";

import { useState, useEffect } from "react";

export default function Leaderboard() {
  const [countdown, setCountdown] = useState("");
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const tournamentDate = new Date("2025-03-01T00:00:00Z").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeLeft = tournamentDate - now;

      if (timeLeft <= 0) {
        setCountdown("The battle has begun!");
        setIsLive(true);
      } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    };

    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-6 bg-gray-900">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-yellow-500">🏆 Tournament Leaderboard</h1>

      {/* Tournament Status - Now Syncs Properly */}
      {!isLive ? (
        <div className="mt-4 bg-red-600 text-white text-lg px-6 py-2 rounded-lg">
          🚀 Tournament is <span className="font-bold">Coming Soon</span> - Live results will update automatically when it starts.
          <br />
          ⏳ Next Tournament Starts In: <span className="font-bold">{countdown}</span>
        </div>
      ) : (
        <div className="mt-4 bg-green-600 text-white text-lg px-6 py-2 rounded-lg">
          ✅ Tournament is <span className="font-bold">LIVE</span>! Rankings are updating in real-time.
        </div>
      )}

      {/* Leaderboard Table */}
      <div className="mt-8 w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-yellow-400 text-center">Current Standings</h2>
        <p className="text-sm text-gray-400 text-center mt-2">
          🕒 Real-time leaderboard updates will begin when the tournament goes live.
        </p>

        <table className="w-full mt-4 border-collapse">
          <thead>
            <tr className="bg-gray-700">
              <th className="py-3 px-4 border-b text-left">Rank</th>
              <th className="py-3 px-4 border-b text-left">Player</th>
              <th className="py-3 px-4 border-b text-right">Profit ($)</th>
              <th className="py-3 px-4 border-b text-right">Trades</th>
            </tr>
          </thead>
          <tbody>
            {/* Placeholder Entries */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rank) => (
              <tr key={rank} className="hover:bg-gray-700 transition">
                <td className="py-3 px-4 border-b">{rank}</td>
                <td className="py-3 px-4 border-b">Player {rank}</td>
                <td className="py-3 px-4 border-b text-right">${(10000 / rank).toFixed(2)}</td>
                <td className="py-3 px-4 border-b text-right">{Math.floor(Math.random() * 100)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Placeholder Past Winners Section */}
      <div className="mt-10 w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-yellow-400 text-center">🏅 Past Winners</h2>
        <p className="mt-3 text-gray-300 text-center">
          🕒 Historical tournament results will be displayed here after the first event is completed.
        </p>
      </div>
    </div>
  );
}
