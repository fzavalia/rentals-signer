import { initializeConnector } from "@web3-react/core";
import { WalletConnect } from "@web3-react/walletconnect";

export const [walletConnect, hooks] = initializeConnector<WalletConnect>(
  (actions) =>
    new WalletConnect({
      actions,
      options: {
        rpc: {
          1: "https://rpc.decentraland.org/mainnet",
          5: "https://rpc.decentraland.org/goerli",
        },
      },
    })
);
