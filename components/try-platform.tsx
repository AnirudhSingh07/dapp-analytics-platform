"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useAccount } from "wagmi"
import { logUserAction } from "@/lib/ao"

interface Platform {
  id: string
  title: string
  description: string
  category: string
  budget: string
  status: "active" | "pending" | "completed"
}

interface TryPlatformProps {
  platform: Platform
  onTryPlatform?: (platformId: string) => void
}

export function TryPlatform({ platform, onTryPlatform }: TryPlatformProps) {
  const { address, isConnected } = useAccount()

  const handleTryPlatform = async () => {
    console.log("[v0] User clicked Try Platform:", platform.id)

    if (isConnected && address) {
      await logUserAction(address, "CONNECT_PLATFORM", {
        platformId: platform.id,
        platformName: platform.title,
        category: platform.category,
        timestamp: Date.now(),
      })
    }

    if (onTryPlatform) {
      onTryPlatform(platform.id)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-accent text-accent-foreground"
      case "pending":
        return "bg-secondary text-secondary-foreground"
      case "completed":
        return "bg-muted text-muted-foreground"
      default:
        return "bg-primary text-primary-foreground"
    }
  }

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
      <CardHeader className="p-4 pb-0">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">{platform.title}</CardTitle>
          <Badge variant="secondary" className={getStatusColor(platform.status)}>
            {platform.status.charAt(0).toUpperCase() + platform.status.slice(1)}
          </Badge>
        </div>
        <CardDescription className="mt-2">{platform.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-4">
        <div className="flex flex-col space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Category:</span>
            <span className="font-medium text-foreground">{platform.category}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Testing Budget:</span>
            <span className="font-medium text-foreground">{platform.budget}</span>
          </div>
          <Button 
            onClick={handleTryPlatform} 
            className="mt-4 w-full"
            variant="default"
          >
            Try Platform
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
