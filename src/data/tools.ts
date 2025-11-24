import arcPrivyImg from "@/assets/arc-privy.jpg";
import rearcAmmImg from "@/assets/rearc-amm.jpg";
import defiOnArcImg from "@/assets/defi-on-arc.jpg";
import arcdexImg from "@/assets/arcdex.jpg";
import arcbondImg from "@/assets/arcbond.jpg";
import baglessImg from "@/assets/bagless.jpg";
import arcnftImg from "@/assets/arcnft.jpg";
import arcclotImg from "@/assets/arcclot.jpg";
import aiVoiceVaultImg from "@/assets/ai-voice-vault.jpg";
import floeImg from "@/assets/floe.jpg";
import arcclientVoiceImg from "@/assets/arcclient-voice.jpg";
import arcIdImg from "@/assets/arc-id.jpg";
import arcPayrollImg from "@/assets/arc-payroll.jpg";
import payarcImg from "@/assets/payarc.jpg";

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
    imageUrl: arcPrivyImg,
    link: "https://arc-privy-simple-backend.vercel.app/",
    twitter: "yoshinokuna"
  },
  {
    id: "rearc",
    name: "Rearc AMM",
    description: "DeFi platform featuring token swaps, liquidity pools, and an integrated AI assistant. Built for the Lablab AI NYC Hackathon.",
    category: "Dapps",
    imageUrl: rearcAmmImg,
    link: "https://rearc.xyz/",
    twitter: "bastiankoh"
  },
  {
    id: "defi-on-arc",
    name: "DeFi on Arc",
    description: "Comprehensive DeFi solution offering token swapping, liquidity provision, and cross-chain bridging from Sepolia.",
    category: "Dapps",
    imageUrl: defiOnArcImg,
    link: "https://defi-on-arc.netlify.app/",
    twitter: "realchriswilder"
  },
  {
    id: "arcdex",
    name: "ArcDex",
    description: "Decentralized exchange with Circle CCTP cross-chain bridging, batch payment processing, and instant payment link generation.",
    category: "Dapps",
    imageUrl: arcdexImg,
    link: "https://arcdex.netlify.app/",
    twitter: "0xohzsh"
  },
  {
    id: "arcbond",
    name: "ArcBond",
    description: "On-chain bonding protocol combining DEX and bridge functionality. Features CCTP-powered cross-chain USDC transfers, fixed-rate instruments, and transparent treasury.",
    category: "Dapps",
    imageUrl: arcbondImg,
    link: "https://arcbond.vercel.app/",
    twitter: "buiminhtoan1985"
  },
  {
    id: "bagless",
    name: "Bagless",
    description: "All-in-one platform for launching new tokens and trading them in a unified marketplace.",
    category: "Dapps",
    imageUrl: baglessImg,
    link: "https://bagless.cc/",
    twitter: "baglessapp"
  },
  // NFTs
  {
    id: "arcnft",
    name: "Arc NFT Marketplace",
    description: "Full-featured NFT marketplace with watchlist functionality, offer making, and comprehensive trading tools.",
    category: "NFTs",
    imageUrl: arcnftImg,
    link: "https://arcnft.lovable.app/",
    twitter: "jojo62562095"
  },
  // Gaming
  {
    id: "arcclot",
    name: "ArcClot",
    description: "On-chain slot machine delivering instant USDC-based gaming experiences.",
    category: "Gaming",
    imageUrl: arcclotImg,
    link: "https://arcclot.vercel.app/",
    twitter: "lynnthelight"
  },
  // Voice Apps
  {
    id: "ai-voice-vault",
    name: "AI Voice Vault",
    description: "Voice-controlled DeFi platform leveraging AI for hands-free transactions through natural speech commands. Lablab AI Hackathon submission.",
    category: "Voice Apps",
    imageUrl: aiVoiceVaultImg,
    link: "https://ai-voice-vault.vercel.app/",
    twitter: "_abdulbasit110"
  },
  {
    id: "floe",
    name: "Floe",
    description: "AI-driven voice payment system enabling autonomous transactions and frictionless cross-chain USDC movement through CCTP.",
    category: "Voice Apps",
    imageUrl: floeImg,
    link: "https://floe.onrender.com/",
    twitter: "mystic_mti"
  },
  {
    id: "arcclient-voice",
    name: "ArcClient Voice",
    description: "Voice-activated micropayment solution built for seamless small-value transactions.",
    category: "Voice Apps",
    imageUrl: arcclientVoiceImg,
    link: "https://arcclient.vercel.app/auth",
    twitter: "kraken41_"
  },
  // Utility
  {
    id: "arc-id",
    name: "ArcID",
    description: "Decentralized identity passport with Worldcoin verification and Storacha security.",
    category: "Utility",
    imageUrl: arcIdImg,
    link: "https://arc-id.vercel.app/",
    twitter: "DefiPreacherr"
  },
  {
    id: "arc-payroll",
    name: "Arc Payroll Platform",
    description: "All-in-one Arc toolkit featuring token swaps, smart contract deployment, liquidity management, and more.",
    category: "Utility",
    imageUrl: arcPayrollImg,
    link: "https://arc-payroll-platform.vercel.app/",
    twitter: "eyeofquantum"
  },
  {
    id: "payarc",
    name: "PayArc",
    description: "Transparent on-chain invoicing system for creating and processing payments with full blockchain visibility.",
    category: "Utility",
    imageUrl: payarcImg,
    link: "https://payarc.vercel.app/",
    twitter: "Sercan0x"
  }
];
