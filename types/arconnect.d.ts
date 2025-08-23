export {};

declare global {
  interface Window {
    arweaveWallet?: {
      connect: (permissions: string[], appInfo?: { name: string }) => Promise<void>;
      disconnect: () => Promise<void>;
      getActiveAddress: () => Promise<string>;
      getAllAddresses: () => Promise<string[]>;
      sign: (transaction: any, options?: any) => Promise<any>;
    };
  }
}
