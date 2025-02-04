"use client";

export default function Tokenomics() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-6 bg-gray-900">
      {/* Page Title */}
      <h1 className="text-5xl font-extrabold text-yellow-500">📊 Crypto Kombat Tokenomics</h1>

      {/* Tournament Tokenomics */}
      <div className="mt-10 w-full max-w-5xl bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-yellow-400">⚔️ Tournament-Based Tokenomics</h2>
        <p className="mt-4 text-gray-300 text-lg leading-relaxed">
          Each Crypto Kombat tournament operates on a temporary token (e.g., $CKROUND1, $CKROUND2), ensuring fairness and a fresh start for every round.
        </p>

        {/* Tournament Format */}
        <div className="mt-6 bg-gray-700 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-yellow-500">🏆 Tournament Structure</h3>
          <p className="mt-2 text-lg text-gray-300">Each tournament consists of 3 rounds, each lasting 4 days (unless otherwise noted).</p>
          <p className="mt-2 text-lg text-gray-300">Devs & Owners CANNOT participate.</p>
          <p className="mt-2 text-lg text-gray-300">The top 5 traders and the biggest loser win rewards.</p>
        </div>

        {/* $CKROUND Tokenomics Breakdown */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-yellow-500">💰 Entry & Prize Pool</h3>
            <p className="mt-2 text-lg text-gray-300">Players must buy in to enter.</p>
            <p className="mt-2 text-lg text-gray-300">Funds from buy-ins seed liquidity and grow the prize pool.</p>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-yellow-500">🚀 Buy & Sell Tax (10%)</h3>
            <p className="mt-2 text-lg text-gray-300">A 10% tax applies to all buys & sells within each $CKROUND round.</p>
            <div className="mt-4 flex flex-col space-y-4 text-lg">
              <div className="bg-gray-600 p-4 rounded-lg">
                <p className="text-yellow-400 font-bold">5% - Dev Salaries & Prize Pool</p>
                <p className="text-gray-300">A portion is redistributed to winners & the biggest loser.</p>
              </div>
              <div className="bg-gray-600 p-4 rounded-lg">
                <p className="text-yellow-400 font-bold">3% - Liquidity Pool Injection</p>
                <p className="text-gray-300">Ensures stability throughout the round.</p>
              </div>
              <div className="bg-gray-600 p-4 rounded-lg">
                <p className="text-yellow-400 font-bold">2% - Marketing & Game Development</p>
                <p className="text-gray-300">Funds advertising, partnerships, and game expansion.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-yellow-500">🔒 Liquidity Lock</h3>
            <p className="mt-2 text-lg text-gray-300">Liquidity in each $CKROUND token is locked for the full round.</p>
            <p className="mt-2 text-lg text-gray-300">This prevents rug pulls and ensures fair trading.</p>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-yellow-500">📢 Mandatory Mass Sell-Off</h3>
            <p className="mt-2 text-lg text-gray-300">In the last hour of Day 4, a mandatory sell-off will be called on X and Telegram.</p>
            <p className="mt-2 text-lg text-gray-300">When liquidity unlocks, any remaining liquidity is transferred to the Prize Pool, increasing winnings.</p>
          </div>
        </div>
      </div>

      {/* $KOMBAT - Ecosystem Token */}
      <div className="mt-10 w-full max-w-5xl bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-yellow-400">🔥 $KOMBAT - Ecosystem Token</h2>
        <p className="mt-4 text-gray-300 text-lg leading-relaxed">
          $KOMBAT is still in development and will serve as the long-term ecosystem token, enabling additional tournament rewards, staking, governance, and future game integrations.
        </p>

        {/* $KOMBAT Tax Structure */}
        <div className="mt-6 bg-gray-700 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-yellow-500">🔄 Buy & Sell Tax (5%)</h3>
          <p className="mt-2 text-lg text-gray-300">A 5% tax applies to all $KOMBAT transactions to support the ecosystem.</p>
          <div className="mt-4 flex flex-col space-y-4 text-lg">
            <div className="bg-gray-600 p-4 rounded-lg">
              <p className="text-yellow-400 font-bold">3% - Liquidity Pool Injection</p>
              <p className="text-gray-300">Ensures market stability & prevents extreme volatility.</p>
            </div>
            <div className="bg-gray-600 p-4 rounded-lg">
              <p className="text-yellow-400 font-bold">2% - Marketing & Game Development</p>
              <p className="text-gray-300">Funds advertising, expansion, and future Crypto Kombat updates.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Future NFT Rewards */}
      <div className="mt-10 w-full max-w-5xl bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-yellow-400">🎖️ NFT Rewards (Coming Soon)</h2>
        <p className="mt-4 text-gray-300 text-lg leading-relaxed">
          In future tournaments, winners will also receive exclusive NFTs that represent their achievements and grant access to special perks in the ecosystem.
        </p>
      </div>
    </div>
  );
}
