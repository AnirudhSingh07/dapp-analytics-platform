"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WalletConnect } from "@/components/wallet-connect"
import { TryDApp } from "@/components/try-dapp"
import Link from "next/link"
import { useArweaveWallet } from "@/hooks/useArweaveWallet"

// Mock DApp data
const mockDApps = [
  {
    id: "defi-swap",
    title: "DeFi Swap",
    description: "Decentralized exchange for seamless token swapping with low fees and high liquidity.",
    category: "DeFi",
    budget: "$2,500",
    status: "active" as const,
  },
  {
    id: "nft-marketplace",
    title: "NFT Marketplace",
    description: "Buy, sell, and trade unique digital assets in our comprehensive NFT marketplace.",
    category: "NFT",
    budget: "$1,800",
    status: "active" as const,
  },
  {
    id: "gaming-platform",
    title: "Gaming Platform",
    description: "Play-to-earn gaming ecosystem with blockchain-based rewards and achievements.",
    category: "Gaming",
    budget: "$3,200",
    status: "active" as const,
  },
  {
    id: "social-dapp",
    title: "Social DApp",
    description: "Decentralized social network where users own their data and content.",
    category: "Social",
    budget: "$1,500",
    status: "pending" as const,
  },
  {
    id: "dao-governance",
    title: "DAO Governance",
    description: "Participate in decentralized autonomous organization decision-making processes.",
    category: "Governance",
    budget: "$2,000",
    status: "active" as const,
  },
  {
    id: "lending-protocol",
    title: "Lending Protocol",
    description: "Earn interest by lending crypto assets or borrow against your collateral.",
    category: "DeFi",
    budget: "$2,800",
    status: "completed" as const,
  },
]

export default function HomePage() {
  const handleTryDApp = (dappId: string) => {
    console.log("[v0] User wants to try DApp:", dappId)
    // This would integrate with AO logging
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">DA</span>
                </div>
                <span className="font-bold text-xl text-foreground">DApp Analytics</span>
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/" className="text-foreground hover:text-primary transition-colors">
                  Home
                </Link>
                <Link href="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                  Dashboard
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <WalletConnect />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Decentralized Analytics
            <span className="text-primary block">for DApp Testing</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Connect DApp developers with testers to gather valuable insights, improve user experience, and drive
            adoption through data-driven decisions.
          </p>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Choose Your Path</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* DApps / Companies */}
            <Card className="hover:shadow-lg transition-all duration-200">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">For DApps & Companies</CardTitle>
                <CardDescription className="text-base">
                  Register your DApp and get valuable user testing insights
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Register your DApp with detailed information</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Set testing budget and requirements</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Get detailed analytics and user feedback</span>
                  </div>
                </div>
                
                  <WalletConnect />
              </CardContent>
            </Card>

            {/* Testers */}
            <Card className="hover:shadow-lg transition-all duration-200">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">For Testers</CardTitle>
                <CardDescription className="text-base">
                  Connect your wallet and earn rewards by testing DApps
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Connect your wallet securely</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Browse and test suggested DApps</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Earn rewards for valuable feedback</span>
                  </div>
                </div>
                <div className="w-full">
                  <WalletConnect />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured DApps Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured DApps</h2>
            <p className="text-lg text-muted-foreground">Discover and test the latest decentralized applications</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockDApps.map((dapp) => (
              <TryDApp key={dapp.id} dapp={dapp} onTryDApp={handleTryDApp} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1,247</div>
              <div className="text-sm text-muted-foreground">Active Testers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">23</div>
              <div className="text-sm text-muted-foreground">Registered DApps</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">3,891</div>
              <div className="text-sm text-muted-foreground">Total Connections</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">68.5%</div>
              <div className="text-sm text-muted-foreground">Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">DA</span>
            </div>
            <span className="font-bold text-lg text-foreground">DApp Analytics</span>
          </div>
          <p className="text-muted-foreground text-sm">
            Empowering the decentralized future through data-driven insights
          </p>
        </div>
      </footer>
    </div>
  )
}
