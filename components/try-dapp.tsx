"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useAccount } from "wagmi"
import { logUserAction } from "@/lib/ao"

interface DApp {
  id: string
  title: string
  description: string
  category: string
  budget: string
  status: "active" | "pending" | "completed"
}

interface TryDAppProps {
  dapp: DApp
  onTryDApp?: (dappId: string) => void
}

export function TryDApp({ dapp, onTryDApp }: TryDAppProps) {
  const { address, isConnected } = useAccount()

  const handleTryDApp = async () => {
    console.log("[v0] User clicked Try DApp:", dapp.id)

    if (isConnected && address) {
      await logUserAction(address, "CONNECT_DAPP", {
        dappId: dapp.id,
        dappName: dapp.title,
        category: dapp.category,
        timestamp: Date.now(),
      })
    }

    if (onTryDApp) {
      onTryDApp(dapp.id)
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
        return "bg-secondary text-secondary-foreground"
    }
  }

  return (
    <Card className="h-full hover:shadow-lg transition-all duration-200 hover:scale-105">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold">{dapp.title}</CardTitle>
          <Badge className={getStatusColor(dapp.status)}>{dapp.status}</Badge>
        </div>
        <CardDescription className="text-sm">{dapp.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Category:</span>
          <Badge variant="outline">{dapp.category}</Badge>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Testing Budget:</span>
          <span className="font-semibold text-primary">{dapp.budget}</span>
        </div>
        <Button
          onClick={handleTryDApp}
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
          disabled={dapp.status !== "active"}
        >
          {dapp.status === "active" ? "Try DApp" : "Not Available"}
        </Button>
        {!isConnected && (
          <p className="text-xs text-muted-foreground text-center">Connect wallet to track your testing activity</p>
        )}
      </CardContent>
    </Card>
  )
}
