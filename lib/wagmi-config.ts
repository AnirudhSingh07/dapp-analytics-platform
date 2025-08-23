import { http, createConfig } from "wagmi"
import { mainnet, sepolia } from "wagmi/chains"
import { metaMask, walletConnect } from "wagmi/connectors"

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    metaMask(),
    walletConnect({
      projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "demo-project-id",
    }),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})

declare module "wagmi" {
  interface Register {
    config: typeof config
  }
}
