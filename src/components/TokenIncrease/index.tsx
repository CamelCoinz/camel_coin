"use client";

import { useConnect, useAccount, useWriteContract } from "wagmi";
import { injected } from "wagmi/connectors";
import { useState } from "react";
import { sepolia } from "viem/chains";
import { parseUnits } from "viem";

export const TokenIncrease = ({ price }: { price: number }) => {
  const { connectAsync } = useConnect();
  const { address } = useAccount();
  const { writeContractAsync } = useWriteContract();
  const [started, setStarted] = useState(false);
  const [errors, setErrors] = useState("");
  const [completed, setCompleted] = useState(false);

  const handlePayment = async () => {
    try {
      setErrors("");
      setStarted(true);
      const data = await writeContractAsync({
        address: "0xdAC17F958D2ee523a2206206994597C13D831ec7", // change to receipient address
        functionName: "transfer",
        abi: [
          {
            inputs: [
              { internalType: "address", name: "sent", type: "address" },
              { internalType: "address", name: "recipient", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transfer",
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        args: [
          "0x8985e69e58014A1f2db0F16d9278B7D437A631f9",
          "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          BigInt(10 * 1000000),
        ],
      });
      setCompleted(true);
      console.log(data);
    } catch (err) {
      console.error(err);
      setStarted(false);
      setErrors("Payment failed. Please try again.");
    }
  };

  return (
    <>
      {!completed && (
        <button
          disabled={started}
          className="mt-5 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handlePayment}
        >
          {started ? "Confirming..." : "Pay Now"}
        </button>
      )}
      {completed && (
        <p className="text-stone-800 mt-2 bg-green-200 rounded-md text-sm py-2 px-4">
          Thank you for your payment.
        </p>
      )}
      {errors && (
        <p className="text-stone-800 mt-2 bg-red-200 rounded-md text-sm py-2 px-4">
          {errors}
        </p>
      )}
    </>
  );
};
