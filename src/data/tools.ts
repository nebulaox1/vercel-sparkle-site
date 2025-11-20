export interface Project {
  id: string;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  link: string;
  twitter?: string;
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
    description: "DeFi platform featuring token swaps, liquidity pools, and an integrated AI assistant. Built for the Lablab AI NYC Hackathon.",
    category: "Dapps",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    link: "https://rearc.xyz/",
    twitter: "bastiankoh"
  },
  {
    id: "defi-on-arc",
    name: "DeFi on Arc",
    description: "Comprehensive DeFi solution offering token swapping, liquidity provision, and cross-chain bridging from Sepolia.",
    category: "Dapps",
    imageUrl: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=300&fit=crop",
    link: "https://defi-on-arc.netlify.app/",
    twitter: "realchriswilder"
  },
  {
    id: "arcdex",
    name: "ArcDex",
    description: "Decentralized exchange with Circle CCTP cross-chain bridging, batch payment processing, and instant payment link generation.",
    category: "Dapps",
    imageUrl: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=400&h=300&fit=crop",
    link: "https://arcdex.netlify.app/",
    twitter: "yoshinokuna"
  },
  {
    id: "arcbond",
    name: "ArcBond",
    description: "On-chain bonding protocol combining DEX and bridge functionality. Features CCTP-powered cross-chain USDC transfers, fixed-rate instruments, and transparent treasury.",
    category: "Dapps",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
    link: "https://arcbond.vercel.app/",
    twitter: "buiminhtoan1985"
  },
  {
    id: "bagless",
    name: "Bagless",
    description: "All-in-one platform for launching new tokens and trading them in a unified marketplace.",
    category: "Dapps",
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
    link: "https://bagless.cc/",
    twitter: "baglessapp"
  },
  // NFTs
  {
    id: "arcnft",
    name: "Arc NFT Marketplace",
    description: "Full-featured NFT marketplace with watchlist functionality, offer making, and comprehensive trading tools.",
    category: "NFTs",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
    link: "https://arcnft.lovable.app/",
    twitter: "jojo62562095"
  },
  // Gaming
  {
    id: "arcclot",
    name: "ArcClot",
    description: "On-chain slot machine delivering instant USDC-based gaming experiences.",
    category: "Gaming",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
    link: "https://arcclot.vercel.app/",
    twitter: "lynnthelight"
  },
  // Voice Apps
  {
    id: "ai-voice-vault",
    name: "AI Voice Vault",
    description: "Voice-controlled DeFi platform leveraging AI for hands-free transactions through natural speech commands. Lablab AI Hackathon submission.",
    category: "Voice Apps",
    imageUrl: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=300&fit=crop",
    link: "https://ai-voice-vault.vercel.app/",
    twitter: "_abdulbasit110"
  },
  {
    id: "floe",
    name: "Floe",
    description: "AI-driven voice payment system enabling autonomous transactions and frictionless cross-chain USDC movement through CCTP.",
    category: "Voice Apps",
    imageUrl: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=400&h=300&fit=crop",
    link: "https://floe.onrender.com/",
    twitter: "mystic_mti"
  },
  {
    id: "arcclient-voice",
    name: "ArcClient Voice",
    description: "Voice-activated micropayment solution built for seamless small-value transactions.",
    category: "Voice Apps",
    imageUrl: "https://images.unsplash.com/photo-1616509091215-57bbece93654?w=400&h=300&fit=crop",
    link: "https://arcclient.vercel.app/auth",
    twitter: "kraken41_"
  },
  // Utility
  {
    id: "arc-id",
    name: "ArcID",
    description: "Decentralized identity passport with Worldcoin verification and Storacha security.",
    category: "Utility",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
    link: "https://arc-id.vercel.app/",
    twitter: "DefiPreacherr"
  },
  {
    id: "arc-payroll",
    name: "Arc Payroll Platform",
    description: "All-in-one Arc toolkit featuring token swaps, smart contract deployment, liquidity management, and more.",
    category: "Utility",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop",
    link: "https://arc-payroll-platform.vercel.app/",
    twitter: "eyeofquantum"
  },
  {
    id: "payarc",
    name: "PayArc",
    description: "Transparent on-chain invoicing system for creating and processing payments with full blockchain visibility.",
    category: "Utility",
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
    link: "https://payarc.vercel.app/",
    twitter: "Sercan0x"
  }
];
