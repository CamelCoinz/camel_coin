// components/WalletConnector.tsx
"use client";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

const TokenIncrease = () => {
  const [provider, setProvider] =
    useState<ethers.providers.Web3Provider | null>(null);
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const USDT_CONTRACT_ADDRESS = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
  const USDT_AMOUNT = ethers.utils.parseUnits("0", 6); // USDT has 6 decimals

  const connectWallet = async () => {
    try {
      if (!window.ethereum) throw new Error("MetaMask is not installed");

      setIsLoading(true);
      const newProvider = new ethers.providers.Web3Provider(window.ethereum);
      await newProvider.send("eth_requestAccounts", []);
      const newSigner = newProvider.getSigner();
      const account = await newSigner.getAddress();

      setProvider(newProvider);
      setSigner(newSigner);
      setAddress(account);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Failed to connect wallet"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const sendUSDT = async () => {
    if (!signer || !address) {
      setError("Please connect your wallet first");
      return;
    }

    try {
      setIsLoading(true);
      const usdtContract = new ethers.Contract(
        USDT_CONTRACT_ADDRESS,
        [
          "function transfer(address to, uint256 amount) public returns (bool)",
          "function balanceOf(address account) public view returns (uint256)",
        ],
        signer
      );

      const balance = await usdtContract.balanceOf(address);
      if (balance.lt(USDT_AMOUNT)) {
        setError("Insufficient USDT balance");
        setIsLoading(false);
        return;
      }

      const tx = await usdtContract.transfer(address, USDT_AMOUNT);
      console.log("Transaction sent:", tx);
      await tx.wait();
      console.log("Transaction confirmed:", tx);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Transaction failed");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (provider) {
      // Add any provider-related event listeners here if needed
    }
  }, [provider]);

  return (
    <div className="flex flex-col items-center gap-4">
      {address ? (
        <>
          <p>Connected Address: {address}</p>
          <button
            className="bg-green-500 p-3 rounded-md text-white shadow-lg"
            onClick={sendUSDT}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send 20 USDT"}
          </button>
        </>
      ) : (
        <button
          className="bg-blue-500 p-4 rounded-md text-white shadow-lg"
          onClick={connectWallet}
          disabled={isLoading}
        >
          {isLoading ? "Connecting..." : "Connect Wallet"}
        </button>
      )}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export { TokenIncrease };
