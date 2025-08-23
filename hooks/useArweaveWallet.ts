import { useState } from "react";

export function useArweaveWallet() {
  const [address, setAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    try {
      if (!window.arweaveWallet) {
        alert("ArConnect extension not found. Please install it.");
        return;
      }

      await window.arweaveWallet.connect(["ACCESS_ADDRESS"], {
        name: "My Next.js DApp",
      });

      const activeAddr = await window.arweaveWallet.getActiveAddress();
      setAddress(activeAddr);
    } catch (error) {
      console.error("Wallet connection failed:", error);
    }
  };

  const disconnectWallet = async () => {
    try {
      await window.arweaveWallet?.disconnect();
      setAddress(null);
    } catch (error) {
      console.error("Wallet disconnect failed:", error);
    }
  };

  return { address, connectWallet, disconnectWallet };
}
