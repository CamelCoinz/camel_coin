"use client";
import React, { useEffect, useState } from "react";
import { JsonRpcProvider, Contract, ethers } from "ethers";
import toast from "react-hot-toast";
import { useAccount } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import Container from "../Container";
import Countdown from "./Countdown";
import Image from "next/image";

const provider = new JsonRpcProvider(
  "https://mainnet.infura.io/v3/e7ccfd98439644339ca4b785a9a9defb"
);
const USDT_ADDRESS = "0x968f8AAF19A02Cca7c06d4F0672Fb076A59408BA"; // USDT contract address
const ERC20_ABI = ["function balanceOf(address owner) view returns (uint256)"];
const EXCHANGE_RATE = 100000;

export const TokenIncrease = () => {
  const [camelCoinValue, setCamelCoinValue] = useState(0);
  const [usdtValue, setUsdtValue] = useState(0);
  const [walletUSDT, setWalletUSDT] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { address, isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();

  useEffect(() => {
    if (isConnected) getUSDTBalance();
  }, [isConnected]);

  const getUSDTBalance = async () => {
    if (!isConnected) return displayConnectWalletToast();

    try {
      toast.loading("Fetching Balance...");
      setIsLoading(true);

      const contract = new Contract(USDT_ADDRESS, ERC20_ABI, provider);
      const balance = await contract.balanceOf(address);
      const balanceInUSDT = Number(ethers.formatUnits(balance, 6));

      setUsdtValue(balanceInUSDT);
      setWalletUSDT(balanceInUSDT);
      setCamelCoinValue(balanceInUSDT * EXCHANGE_RATE);
    } catch (error) {
      toast.error("Error fetching balance.");
    } finally {
      setIsLoading(false);
      toast.dismiss();
    }
  };

  const displayConnectWalletToast = () => {
    toast.custom(
      <div className="flex items-center bg-[#e9a449] text-white rounded-md px-3 py-1 gap-2">
        <span>Connect Your Wallet First</span>
        <button
          onClick={openConnectModal}
          className="flex text-sm gap-x-1 p-2 lg:p-3 w-fit place-self-end rounded-lg border-2 border-main_border bg-btn_green"
        >
          Connect Wallet
        </button>
      </div>
    );
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    isUSDT: boolean
  ) => {
    if (isConnected) {
      const input = removeCommas(event.target.value);
      const numericValue = parseFloat(input) || 0;

      if (numericValue > walletUSDT)
        return toast.error("You don't have enough USDT");

      if (isUSDT) {
        setUsdtValue(numericValue);
        setCamelCoinValue(numericValue * EXCHANGE_RATE);
      } else {
        setCamelCoinValue(numericValue);
        setUsdtValue(numericValue / EXCHANGE_RATE);
      }
    } else {
      return displayConnectWalletToast();
    }
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(USDT_ADDRESS);
    toast.success("Copied to clipboard!", {
      duration: 4000,
      style: { background: "#e9a449", color: "#fff" },
    });
  };

  const removeCommas = (value: string) => value.replace(/,/g, "");

  const handleBuyCoin = () =>
    isConnected ? getUSDTBalance() : openConnectModal?.();

  return (
    <div className="bg-[url('/Vectors/desert.webp')] bg-cover bg-no-repeat w-100   relative flex justify-center py-9">
      <span
        id="token-price"
        className=" absolute -top-8 lg:-top-[70px] sr-only "
      />
      <Container>
        <h1 className="text-txt_brown text-2xl lg:text-5xl font-bold ">
          Token Price Increase In:
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 gap-12">
          <div className="flex flex-col-reverse lg:flex-col">
            <Countdown />
            <div className="flex gap-5 my-9 justify-start">
              <div className="flex">
                <Image
                  width={25}
                  height={25}
                  className="w-6 h-6 object-contain"
                  alt="camel-coins"
                  src="/icons/money.svg"
                />
                <div className="block mb-1 text-xl w-32 font-bold text-brown_34">
                  USD raised: $0 / $
                </div>
              </div>
              <div className="bg-white w-56 md:w-full h-6 rounded-full">
                <div className="bg-[#6B3200] w-24 md:w-48 h-6 rounded-full text-white text-end pr-10 md:pr-14 text-xs py-1">
                  34%
                </div>
              </div>
            </div>
            <Image
              width={400}
              height={400}
              className="w-[250px] md:w-[80%]  mx-auto "
              alt="camel-coins"
              src="/Vectors/camel-coins.webp"
            />
          </div>
          <div className="">
            <div className="grid grid-cols-2 gap-2 lg:gap-7">
              <div>
                <label
                  htmlFor="zip-input"
                  className="block mb-1 text-sm md:text-lg font-bold text-brown_34"
                >
                  Selet currency to spend:
                </label>
                <div className="relative">
                  <label className="sr-only" htmlFor="USDT">
                    First name:
                  </label>
                  <select
                    id="USDT"
                    value="1"
                    onChange={() => console.log("USDT")}
                    className="appearance-none text-brown_34 w-full md:text-xl font-bold px-4 py-3 md:py-5 pl-14 bg-[#FBDBA4] border-[3px] border-[#964512] rounded-xl shadow-sm outline-none cursor-pointer"
                  >
                    <option value="1">USDT </option>
                  </select>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Image
                      width={20}
                      height={20}
                      className="w-10"
                      alt="plus"
                      src="/icons/USDT.svg"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5">
                    <svg
                      width="11"
                      height="7"
                      viewBox="0 0 11 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.32593 0.247437H10.619V1.68816L5.67938 6.01035L0.739746 1.68816V0.247437H4.03284H7.32593Z"
                        fill="#341800"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="zip-input"
                  className="block mb-1  text-sm md:text-lg font-bold text-brown_34"
                >
                  Selet payment method:
                </label>
                <div className="relative">
                  <label className="sr-only" htmlFor="ETH">
                    First name:
                  </label>
                  <select
                    id="ETH"
                    value="1"
                    onChange={() => console.log("ETH")}
                    className="appearance-none text-brown_34 w-full md:text-xl font-bold px-4 py-3 md:py-5 pl-14 bg-[#FBDBA4] border-[3px] border-[#964512] rounded-xl shadow-sm outline-none cursor-pointer"
                  >
                    <option value="1">ETH</option>
                  </select>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Image
                      width={20}
                      height={20}
                      className="w-10"
                      alt="plus"
                      src="/icons/ETH.svg"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5">
                    <svg
                      width="11"
                      height="7"
                      viewBox="0 0 11 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.32593 0.247437H10.619V1.68816L5.67938 6.01035L0.739746 1.68816V0.247437H4.03284H7.32593Z"
                        fill="#341800"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-7 mt-3">
              {/* USDT Input */}
              <div>
                <label
                  htmlFor="to_pay"
                  className="block mb-1 text-sm md:text-lg text-brown_34"
                >
                  USDT you pay:
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <img
                      width={20}
                      height={20}
                      className="w-10"
                      alt="plus"
                      src="/icons/USDT.svg"
                    />
                  </div>
                  <input
                    type="text" // Change to text for better formatting
                    id="to_pay"
                    aria-describedby="helper-text-explanation"
                    className="bg-white text-gray-400 outline-none text-xl rounded-xl block w-full px-16 py-3 md:py-5"
                    placeholder={usdtValue.toString()}
                    value={usdtValue} // Show the raw input, with commas if needed
                    onChange={(e) => handleInputChange(e, true)}
                  />
                  <div className="text-[#627D2B] font-bold absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 text-sm pointer-events-none">
                    Max
                  </div>
                </div>
              </div>

              {/* Camel Coin Input */}
              <div>
                <label
                  htmlFor="to_get"
                  className="block mb-1 text-sm md:text-lg font-bold text-brown_34"
                >
                  $CAMEL you get:
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <img
                      width={20}
                      height={20}
                      className="w-10"
                      alt="plus"
                      src="/Vectors/Camel_Coin.webp"
                    />
                  </div>
                  <input
                    type="text" // Change to text for better formatting
                    id="to_get"
                    aria-describedby="helper-text-explanation"
                    className="bg-white text-gray-400 outline-none text-xl rounded-xl block w-full px-16 py-3 md:py-5"
                    placeholder="0"
                    value={camelCoinValue} // Format camel coin value with commas
                    onChange={(e) => handleInputChange(e, false)}
                  />
                  <div className="text-[#627D2B] font-bold absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 text-sm pointer-events-none">
                    Max
                  </div>
                </div>
              </div>
            </div>
            <div className="text-brown_34 my-3 font-bold md:text-xl text-sm">
              Buy $CAMEL tokens now:
            </div>
            <button
              onClick={handleBuyCoin}
              disabled={isConnected ? (walletUSDT <= 0 ? true : false) : false}
              className={`gap-x-1 p-3 text-center  md:text-xl font-bold rounded-lg border-2  text-white  w-full ${
                isLoading
                  ? "hover:scale-95 duration-300 bg-blue-500 border-blue-700"
                  : !isConnected
                  ? "bg-orange-500 border-orange-700"
                  : walletUSDT > 0
                  ? "border-main_border  bg-btn_green"
                  : "cursor-not-allowed bg-red-500 border-red-700"
              }`}
            >
              {!isConnected
                ? "Connect Your Wallet to Buy"
                : isLoading
                ? "Waiting..."
                : walletUSDT > 0
                ? "Buy Now"
                : "not enough USDT to Buy"}
            </button>
            <div className="text-brown_34 my-3 font-bold md:text-xl text-sm">
              ...or send desired amount of crypto to this address:
            </div>
            <div className="flex items-center bg-[#BB6410]/30 text-white rounded-xl px-2 w-full ">
              {/* Address Input */}
              <label className="sr-only" htmlFor="address">
                wallet address:
              </label>
              <input
                id="address"
                type="text"
                defaultValue={USDT_ADDRESS}
                className="bg-transparent text-brown_34 px-1 py-2 w-full outline-none truncate"
              />
              {/* Copy Button */}
              <button
                onClick={handleCopyAddress}
                className="rounded-full flex items-center justify-center ml-2"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 40 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.1135 3.16541H18.9081C16.0969 3.16539 13.8701 3.16536 12.1274 3.38312C10.3339 3.60722 8.8822 4.07939 7.73739 5.14336C6.59259 6.20732 6.08452 7.55645 5.84339 9.22331C5.60908 10.8429 5.60912 12.9124 5.60913 15.5251V24.1358C5.60913 26.3603 7.07507 28.2666 9.15812 29.0658C9.05091 27.7244 9.05099 25.8421 9.05108 24.2761V17.0272V16.8867C9.05097 14.9962 9.05086 13.3674 9.23956 12.063C9.44179 10.665 9.89785 9.32502 11.0673 8.23813C12.2368 7.15122 13.6787 6.72738 15.1828 6.53944C16.5864 6.36407 18.3391 6.36416 20.3732 6.36426L20.5242 6.36428H25.1135L25.2646 6.36426C27.2987 6.36416 29.0475 6.36407 30.4511 6.53944C29.6115 4.56343 27.5382 3.16541 25.1135 3.16541Z"
                    fill="#341800"
                  />
                  <path
                    d="M11.3457 17.0269C11.3457 13.0056 11.3457 10.995 12.6899 9.74582C14.034 8.49658 16.1974 8.49658 20.5242 8.49658H25.1135C29.4403 8.49658 31.6037 8.49658 32.9479 9.74582C34.292 10.995 34.292 13.0057 34.292 17.0269V24.1355C34.292 28.1567 34.292 30.1674 32.9479 31.4166C31.6037 32.6658 29.4403 32.6658 25.1135 32.6658H20.5242C16.1974 32.6658 14.034 32.6658 12.6899 31.4166C11.3457 30.1674 11.3457 28.1567 11.3457 24.1355V17.0269Z"
                    fill="#341800"
                  />
                </svg>
                <span className="sr-only">copy</span>
              </button>
            </div>
            <p className="text-[#444444] text-xs mt-3">
              I have done my own research and understand that investing in
              cryptocurrency involves risk and may result in loss of investment.
              By participating in the presale, I fully agree to the terms of the
              presale.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};