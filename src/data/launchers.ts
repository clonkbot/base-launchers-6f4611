export interface Launcher {
  name: string;
  description: string;
  icon: string;
  category: string;
  features: string[];
  tokensLaunched: string;
  tvl: string;
  url: string;
  verified: boolean;
}

export const launchers: Launcher[] = [
  {
    name: "Virtuals Protocol",
    description: "Create and launch AI agents as tokenized assets on Base. Build autonomous AI characters with their own economies.",
    icon: "🤖",
    category: "Launchpad",
    features: ["AI Agents", "Tokenized Assets", "Revenue Sharing", "Agent Ecosystem"],
    tokensLaunched: "15K+",
    tvl: "$450M+",
    url: "https://virtuals.io",
    verified: true
  },
  {
    name: "Clanker",
    description: "Deploy tokens directly through Farcaster. Just mention @clanker with your token details and it handles the rest.",
    icon: "🎯",
    category: "Fair Launch",
    features: ["Farcaster Native", "Auto Deploy", "LP Locked", "No Code"],
    tokensLaunched: "50K+",
    tvl: "$120M+",
    url: "https://clanker.world",
    verified: true
  },
  {
    name: "ape.store",
    description: "Simple and fair token launcher with bonding curve mechanics. Launch meme tokens with anti-rug protections built-in.",
    icon: "🦍",
    category: "Bonding Curve",
    features: ["Bonding Curve", "Anti-Rug", "Low Fees", "Instant Launch"],
    tokensLaunched: "25K+",
    tvl: "$85M+",
    url: "https://ape.store",
    verified: true
  },
  {
    name: "WOW.xyz",
    description: "Social token launchpad backed by a16z. Create tokens linked to your social identity with built-in creator tools.",
    icon: "✨",
    category: "Launchpad",
    features: ["Social Tokens", "Creator Tools", "a16z Backed", "Identity Linked"],
    tokensLaunched: "10K+",
    tvl: "$60M+",
    url: "https://wow.xyz",
    verified: true
  },
  {
    name: "Pump.fun",
    description: "The OG bonding curve launcher now on Base. Create meme tokens with fair launch mechanics in seconds.",
    icon: "🎪",
    category: "Bonding Curve",
    features: ["Bonding Curve", "Meme Focused", "Fast Launch", "Community Driven"],
    tokensLaunched: "100K+",
    tvl: "$200M+",
    url: "https://pump.fun",
    verified: true
  },
  {
    name: "Uniswap",
    description: "The leading DEX for launching and trading tokens. Create liquidity pools and launch tokens on Base.",
    icon: "🦄",
    category: "DEX",
    features: ["V3 Pools", "Concentrated Liquidity", "Auto Router", "Hooks"],
    tokensLaunched: "500K+",
    tvl: "$1B+",
    url: "https://app.uniswap.org",
    verified: true
  },
  {
    name: "friend.tech",
    description: "Trade keys of your favorite creators. Social tokens with real utility and direct creator connections.",
    icon: "🔑",
    category: "Launchpad",
    features: ["Social Keys", "Creator Economy", "Club Access", "Trading"],
    tokensLaunched: "2M+",
    tvl: "$50M+",
    url: "https://friend.tech",
    verified: true
  },
  {
    name: "Aerodrome",
    description: "The central trading and liquidity hub on Base. ve(3,3) mechanics with optimized emissions.",
    icon: "✈️",
    category: "DEX",
    features: ["ve(3,3)", "Liquidity Hub", "Vote Escrow", "Emissions"],
    tokensLaunched: "30K+",
    tvl: "$800M+",
    url: "https://aerodrome.finance",
    verified: true
  },
  {
    name: "Based.markets",
    description: "Prediction markets and token launches combined. Bet on outcomes and launch tokens around events.",
    icon: "📊",
    category: "Launchpad",
    features: ["Predictions", "Event Tokens", "Market Making", "Outcomes"],
    tokensLaunched: "5K+",
    tvl: "$25M+",
    url: "https://based.markets",
    verified: true
  },
  {
    name: "Base Bridge",
    description: "Official Base bridge for bringing assets from Ethereum. Fast and secure bridging with low fees.",
    icon: "🌉",
    category: "DEX",
    features: ["Official Bridge", "ETH Native", "Low Fees", "Fast Finality"],
    tokensLaunched: "N/A",
    tvl: "$2B+",
    url: "https://bridge.base.org",
    verified: true
  },
  {
    name: "Dexscreener",
    description: "Track all Base token launches in real-time. Charts, analytics, and trading tools for new tokens.",
    icon: "📈",
    category: "DEX",
    features: ["Real-time Charts", "Token Analytics", "Trending", "Alerts"],
    tokensLaunched: "N/A",
    tvl: "N/A",
    url: "https://dexscreener.com/base",
    verified: true
  },
  {
    name: "Flaunch",
    description: "Fair launch platform with built-in anti-snipe and anti-bot protection. Community-first launches.",
    icon: "🚀",
    category: "Fair Launch",
    features: ["Anti-Snipe", "Anti-Bot", "Fair Distribution", "Stealth Mode"],
    tokensLaunched: "8K+",
    tvl: "$35M+",
    url: "https://flaunch.gg",
    verified: true
  },
  {
    name: "Moonwell",
    description: "Lending and borrowing protocol on Base. Launch tokens as collateral assets in DeFi.",
    icon: "🌙",
    category: "Launchpad",
    features: ["Lending", "Borrowing", "Collateral", "Yield"],
    tokensLaunched: "50+",
    tvl: "$400M+",
    url: "https://moonwell.fi",
    verified: true
  },
  {
    name: "Extra Finance",
    description: "Leveraged yield farming and liquidity provision. Launch LP tokens with boosted returns.",
    icon: "⚡",
    category: "DEX",
    features: ["Leverage", "Yield Farming", "Auto-compound", "LP Tokens"],
    tokensLaunched: "200+",
    tvl: "$150M+",
    url: "https://extra.finance",
    verified: true
  },
  {
    name: "Coinbase Wallet",
    description: "Native wallet support for Base. Create and manage tokens directly from the Coinbase ecosystem.",
    icon: "💼",
    category: "Launchpad",
    features: ["Self-custody", "Native Base", "DApp Browser", "Easy Onboard"],
    tokensLaunched: "N/A",
    tvl: "N/A",
    url: "https://wallet.coinbase.com",
    verified: true
  },
  {
    name: "Mint Club",
    description: "Create bonding curve tokens with customizable curves. Design your own tokenomics.",
    icon: "🎨",
    category: "Bonding Curve",
    features: ["Custom Curves", "NFT Support", "Multi-chain", "No Code"],
    tokensLaunched: "20K+",
    tvl: "$40M+",
    url: "https://mint.club",
    verified: true
  },
  {
    name: "BaseSwap",
    description: "Native DEX built specifically for Base. Trade and launch tokens with Base-optimized features.",
    icon: "🔄",
    category: "DEX",
    features: ["Base Native", "V3 AMM", "Farms", "Launchpad"],
    tokensLaunched: "15K+",
    tvl: "$75M+",
    url: "https://baseswap.fi",
    verified: true
  },
  {
    name: "Sound.xyz",
    description: "Music NFT and token platform. Artists launch tokens alongside their music releases.",
    icon: "🎵",
    category: "Launchpad",
    features: ["Music NFTs", "Artist Tokens", "Listening Party", "Royalties"],
    tokensLaunched: "5K+",
    tvl: "$20M+",
    url: "https://sound.xyz",
    verified: true
  }
];
