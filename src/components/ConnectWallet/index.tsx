"use client";

import { useEffect, useRef } from "react";
import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect } from "wagmi";
import Image from "next/image";
import { useBalanceData } from "@/app/BalanceProvider";

export const ConnectWallet = () => {
  const balanceData = useBalanceData();
  const { isConnecting, isConnected, chain } = useAccount();

  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { openChainModal } = useChainModal();
  const { disconnect } = useDisconnect();

  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  if (!isConnected) {
    return (
      <button
        onClick={async () => {
          if (isConnected) {
            disconnect();
          }
          openConnectModal?.();
        }}
        disabled={isConnecting}
        className="flex gap-x-1 p-2 lg:p-3 w-fit place-self-end rounded-lg border-2 border-main_border  bg-btn_green "
      >
        <Image src="/Vectors/wallet.webp" alt="wallet" width={25} height={25} />
        {isConnecting ? (
          "Connecting..."
        ) : (
          <span className="lg:block hidden">Connect Wallet</span>
        )}
      </button>
    );
  }

  if (isConnected && !chain) {
    return (
      <button
        className="flex gap-x-1 cursor-pointer hover:scale-90 duration-300 p-2 lg:p-3 w-fit place-self-end rounded-lg border-2 border-red-800  bg-red-500"
        onClick={openChainModal}
      >
        Wrong network
      </button>
    );
  }

  return (
    <div className="flex">
      <div
        className="flex gap-x-1 cursor-pointer hover:bg-[#298669] duration-300 p-2 lg:p-3 w-fit place-self-end rounded-l-lg border-2 border-main_border border-r-0 bg-btn_green"
        onClick={async () => openAccountModal?.()}
      >
        <Image src="/icons/user.svg" alt="user" width={25} height={25} />
        <p>{balanceData ? balanceData?.formatted + " ETH" : "Loading..."}</p>
      </div>
      <button
        className="flex gap-x-1 cursor-pointer hover:bg-[#298669] duration-300 p-2 lg:p-3 w-fit place-self-end rounded-r-lg border-2 border-main_border  bg-btn_green "
        onClick={openChainModal}
      >
        <Image src="/icons/switch.svg" alt="switch" width={25} height={25} />
        <span className="hidden lg:block">Switch Networks</span>
      </button>
    </div>
  );
};
