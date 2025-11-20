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
    description: "A DeFi project submitted to the Lablab AI NYC Hackathon. In this dApp, you can swap tokens, add liquidity, and there is an AI agent.",
    category: "Dapps",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    link: "https://rearc.xyz/",
    twitter: "bastiankoh"
  },
  {
    id: "defi-on-arc",
    name: "DeFi on Arc",
    description: "A dApp on Arc Testnet where you can swap tokens, add Liquidity, and bridge from Sepolia.",
    category: "Dapps",
    imageUrl: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=300&fit=crop",
    link: "https://defi-on-arc.netlify.app/",
    twitter: "realchriswilder"
  },
  {
    id: "arcdex",
    name: "ArcDex",
    description: "A DEX and Bridge application on Arc. This dApp offers cross-chain bridging via Circle CCTP, batch payments, and one-click payment links for liquidity.",
    category: "Dapps",
    imageUrl: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=400&h=300&fit=crop",
    link: "https://arcdex.netlify.app/",
    twitter: "yoshinokuna"
  },
  {
    id: "arcbond",
    name: "ArcBond",
    description: "An on-chain Bond protocol, DEX and Bridge on Arc Testnet. It uses CCTP for cross-chain USDC, offering fixed-rate DeFi instruments and a verifiable treasury.",
    category: "Dapps",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
    link: "https://arcbond.vercel.app/",
    twitter: "buiminhtoan1985"
  },
  {
    id: "bagless",
    name: "Bagless",
    description: "A platform for token creation and trading them together in the same place.",
    category: "Dapps",
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
    link: "https://bagless.cc/",
    twitter: "baglessapp"
  },
  // NFTs
  {
    id: "arcnft",
    name: "Arc NFT Marketplace",
    description: "An NFT marketplace on the Arc Testnet with many features like watchlist, make offers for NFTs, etc.",
    category: "NFTs",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
    link: "https://arcnft.lovable.app/",
    twitter: "jojo62562095"
  },
  // Gaming
  {
    id: "arcclot",
    name: "ArcClot",
    description: "An on-chain slot machine. This is providing fast USDC gaming on Arc.",
    category: "Gaming",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
    link: "https://arcclot.vercel.app/",
    twitter: "lynnthelight"
  },
  // Voice Apps
  {
    id: "ai-voice-vault",
    name: "AI Voice Vault",
    description: "An AI-powered voice-autonomous DeFi platform on the Arc network that uses natural voice commands. Submitted to Lablab AI Hackathon.",
    category: "Voice Apps",
    imageUrl: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=300&fit=crop",
    link: "https://ai-voice-vault.vercel.app/",
    twitter: "_abdulbasit110"
  },
  {
    id: "floe",
    name: "Floe",
    description: "Uses AI agents for voice-controlled, autonomous payments and seamless cross-chain USDC transfers via CCTP.",
    category: "Voice Apps",
    imageUrl: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=400&h=300&fit=crop",
    link: "https://floe.onrender.com/",
    twitter: "mystic_mti"
  },
  {
    id: "arcclient-voice",
    name: "ArcClient Voice",
    description: "A voice-controlled micropayments system on Arc Testnet.",
    category: "Voice Apps",
    imageUrl: "https://images.unsplash.com/photo-1616509091215-57bbece93654?w=400&h=300&fit=crop",
    link: "https://arcclient.vercel.app/auth",
    twitter: "kraken41_"
  },
  // Utility
  {
    id: "arc-id",
    name: "ArcID",
    description: "An on-chain identity passport, verified via Worldcoin and secured by Storacha.",
    category: "Utility",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
    link: "https://arc-id.vercel.app/",
    twitter: "DefiPreacherr"
  },
  {
    id: "arc-payroll",
    name: "Arc Payroll Platform",
    description: "An Everything App for Arc Testnet. There are many options, such as token swaps, contract deployments, adding liquidity, etc.",
    category: "Utility",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop",
    link: "https://arc-payroll-platform.vercel.app/",
    twitter: "eyeofquantum"
  },
  {
    id: "payarc",
    name: "PayArc",
    description: "An on-chain Invoice Payment System on Arc Testnet. It allows users to create and pay invoices transparently.",
    category: "Utility",
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
    link: "https://payarc.vercel.app/",
    twitter: "Sercan0x"
  }
];
