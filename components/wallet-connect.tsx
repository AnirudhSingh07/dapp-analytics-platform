"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { logUserAction } from "@/lib/ao"
import { useArweaveWallet } from "@/hooks/useArweaveWallet"

export function WalletConnect() {
  const { address, connectWallet, disconnectWallet } = useArweaveWallet()
  const [hasLoggedConnection, setHasLoggedConnection] = useState(false)

  useEffect(() => {
    if (address && !hasLoggedConnection) {
      logUserAction(address, "WALLET_CONNECTED", {
        address,
        timestamp: Date.now(),
      })
      setHasLoggedConnection(true)
      console.log("[AO] Arweave wallet connected and logged:", address)
    }
  }, [address, hasLoggedConnection])

  useEffect(() => {
    if (!address) {
      setHasLoggedConnection(false)
    }
  }, [address])

  const handleDisconnect = async () => {
    if (address) {
      logUserAction(address, "WALLET_DISCONNECTED", {
        address,
        timestamp: Date.now(),
      })
      console.log("[AO] Arweave wallet disconnected:", address)
    }
    await disconnectWallet()
  }

  if (address) {
    return (
     
          <Button onClick={handleDisconnect} variant="destructive" className="w-full">
            Disconnect Wallet
          </Button>
    )
  }

  return (
    
        <Button
          onClick={connectWallet}
          className="w-50 bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          Connect Arweave Wallet
        </Button>
  )
}
