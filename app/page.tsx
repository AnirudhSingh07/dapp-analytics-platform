"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WalletConnect } from "@/components/wallet-connect"
import { TryPlatform } from "@/components/try-platform"
import Link from "next/link"
import { useArweaveWallet } from "@/hooks/useArweaveWallet"
import FooterGlow  from "@/components/FooterGlow"
import StarOnGithub from "@/components/star-on-github"

// Mock Platform data
const mockPlatforms = [
  {
    id: "social-feed",
    title: "Social Feed",
    description: "Share posts, photos and updates with your network in a decentralized social feed.",
    category: "Social Feed",
    budget: "$2,500",
    status: "active" as const,
  },
  {
    id: "community-forum",
    title: "Community Forum",
    description: "Engage in discussions with community members in organized topic-based forums.",
    category: "Communities",
    budget: "$1,800",
    status: "active" as const,
  },
  {
    id: "messaging-platform",
    title: "Messaging Platform",
    description: "Private and secure messaging with end-to-end encryption on the permaweb.",
    category: "Messaging",
    budget: "$3,200",
    status: "active" as const,
  },
  {
    id: "social-connect",
    title: "Social Connect",
    description: "Build your professional network with decentralized identity and connections.",
    category: "Social",
    budget: "$1,500",
    status: "pending" as const,
  },
  {
    id: "content-hub",
    title: "Content Hub",
    description: "Create, share and monetize content directly with your audience.",
    category: "Content",
    budget: "$2,000",
    status: "active" as const,
  },
  {
    id: "event-platform",
    title: "Event Platform",
    description: "Organize and participate in social events with decentralized ticketing and hosting.",
    category: "Social",
    budget: "$2,800",
    status: "completed" as const,
  },
]

export default function HomePage() {
  const handleTryPlatform = (platformId: string) => {
    console.log("[v0] User wants to try platform:", platformId)
    // This would integrate with AO logging
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-4 left-0 right-0 mx-auto max-w-6xl bg-black/80 backdrop-blur-md border border-green-500/20 rounded-xl shadow-lg z-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center border border-green-500/50">
                  <span className="text-green-500 font-bold text-sm">SA</span>
                </div>
                <span className="font-bold text-xl text-white">Socia Analytics</span>
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/" className="text-white hover:text-green-500 transition-colors">
                  Home
                </Link>
                <Link href="/dashboard" className="text-white hover:text-green-500 transition-colors">
                  Dashboard
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <StarOnGithub />
              <WalletConnect />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Social Media Analytics
            <span className="text-green-500 block">for the Permaweb</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Connecting social platforms with valuable insights, improving user experience, and driving
            adoption through data-driven decisions on Arweave.
          </p>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Choose Your Path</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Platforms / Companies */}
            <Card className="hover:shadow-lg transition-all duration-200 border-green-500/20 shadow-green-500/5">
              <CardHeader>
                <CardTitle className="text-2xl text-green-500">For Platforms & Companies</CardTitle>
                <CardDescription className="text-base">
                  Register your platform and get valuable user insights
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Register your platform with detailed information</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Set testing budget and requirements</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Get detailed analytics and user feedback</span>
                  </div>
                </div>
                
                  <WalletConnect />
              </CardContent>
            </Card>

            {/* Testers */}
            <Card className="hover:shadow-lg transition-all duration-200 border-green-500/20 shadow-green-500/5">
              <CardHeader>
                <CardTitle className="text-2xl text-green-500">For Testers</CardTitle>
                <CardDescription className="text-base">
                  Connect your wallet and earn rewards by testing platforms
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Connect your wallet securely</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Browse and test suggested platforms</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
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

      {/* Featured Platforms Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Platforms</h2>
            <p className="text-lg text-muted-foreground">Discover and test the latest <span className="text-green-500">social media platforms</span></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockPlatforms.map((platform) => (
              <TryPlatform key={platform.id} platform={platform} onTryPlatform={handleTryPlatform} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-500 mb-2">1,247</div>
              <div className="text-sm text-muted-foreground">Active Testers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-500 mb-2">23</div>
              <div className="text-sm text-muted-foreground">Registered Platforms</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-500 mb-2">3,891</div>
              <div className="text-sm text-muted-foreground">Total Connections</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-500 mb-2">68.5%</div>
              <div className="text-sm text-muted-foreground">Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      <FooterGlow/>
    </div>
  )
}

