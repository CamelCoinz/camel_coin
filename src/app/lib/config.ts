"use client";

import { http, createStorage, cookieStorage } from "wagmi";
import { mainnet } from "wagmi/chains";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";

const projectId = "fc7a1e3470ae8000ded8d8cd0e286e4b";

export const config = getDefaultConfig({
  appName: "WalletConnection",
  projectId,
  chains: [mainnet] as any,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: {
    [mainnet.id]: http(),
  },
});
