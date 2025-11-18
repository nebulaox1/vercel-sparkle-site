export interface Project {
  id: string;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  link: string;
}

export const projects: Project[] = [
  // Dapps
  {
    id: "arc-privy",
    name: "Arc Privy",
    description: "Simple backend authentication solution for Arc ecosystem applications",
    category: "Dapps",
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
    link: "https://arc-privy-simple-backend.vercel.app/"
  },
  {
    id: "rearc",
    name: "Rearc AMM",
    description: "Automated Market Maker on Arc Testnet with swap, liquidity pools, and AI assistant",
    category: "Dapps",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    link: "https://rearc.xyz/"
  },
  {
    id: "defi-on-arc",
    name: "DeFi on Arc",
    description: "Comprehensive DeFi platform built on Arc blockchain infrastructure",
    category: "Dapps",
    imageUrl: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=300&fit=crop",
    link: "https://defi-on-arc.netlify.app/"
  },
  {
    id: "arcdex",
    name: "ArcDex",
    description: "Decentralized exchange for trading tokens on the Arc network",
    category: "Dapps",
    imageUrl: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=400&h=300&fit=crop",
    link: "https://arcdex.netlify.app/"
  },
  {
    id: "arcbond",
    name: "ArcBond",
    description: "Bonding protocol for Arc with advanced financial primitives",
    category: "Dapps",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
    link: "https://arcbond.vercel.app/"
  },
  {
    id: "bagless",
    name: "Bagless",
    description: "Bonding curve liquidity with deterministic finality. Launch and trade tokens instantly on Arc",
    category: "Dapps",
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
    link: "https://bagless.cc/"
  },
  // NFTs
  {
    id: "arcnft",
    name: "Arc NFT Marketplace",
    description: "Discover, create & trade digital art NFTs on Arc Testnet with fixed price listings and offers",
    category: "NFTs",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
    link: "https://arcnft.lovable.app/"
  },
  // Gaming
  {
    id: "arcclot",
    name: "ArcClot",
    description: "Gaming platform built on Arc blockchain with play-to-earn mechanics",
    category: "Gaming",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
    link: "https://arcclot.vercel.app/"
  },
  // Voice Apps
  {
    id: "ai-voice-vault",
    name: "AI Voice Vault",
    description: "Voice-powered AI application for secure voice interactions on Arc",
    category: "Voice Apps",
    imageUrl: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=300&fit=crop",
    link: "https://ai-voice-vault.vercel.app/"
  },
  {
    id: "floe",
    name: "Floe",
    description: "Voice application platform leveraging Arc blockchain technology",
    category: "Voice Apps",
    imageUrl: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=400&h=300&fit=crop",
    link: "https://floe.onrender.com/"
  },
  {
    id: "arcclient-voice",
    name: "ArcClient Voice",
    description: "Voice-enabled authentication and communication platform on Arc",
    category: "Voice Apps",
    imageUrl: "https://images.unsplash.com/photo-1616509091215-57bbece93654?w=400&h=300&fit=crop",
    link: "https://arcclient.vercel.app/auth"
  },
  // Utility
  {
    id: "arc-id",
    name: "ArcID",
    description: "Decentralized identity solution for seamless authentication across Arc dApps",
    category: "Utility",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
    link: "https://arc-id.vercel.app/"
  },
  {
    id: "arc-payroll",
    name: "Arc Payroll Platform",
    description: "Blockchain-based payroll management system for Arc ecosystem organizations",
    category: "Utility",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop",
    link: "https://arc-payroll-platform.vercel.app/"
  },
  {
    id: "payarc",
    name: "PayArc",
    description: "Payment processing solution built on Arc for instant and secure transactions",
    category: "Utility",
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
    link: "https://payarc.vercel.app/"
  }
];
