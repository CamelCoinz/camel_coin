import React from "react";
import Container from "../Container";
import Image from "next/image";
import { ToBuyBox } from "./ToBuyBox";

const HowToBuy = () => {
  return (
    <div className="bg-[url('/Vectors/camel-bg.svg')] bg-contain lg:bg-cover bg-no-repeat w-100 relative flex justify-center">
      <Container className="relative mt-40 md:mt-[350px] lg:mt-[550px] pb-10 lg:pb-32">
        <h1 className="text-txt_brown text-2xl lg:text-5xl font-bold">
          How to Buy Camel Coins
        </h1>
        <p className="text-[#6B3200] font-bold">
          Buying Camel Coins is easy! Follow these steps to become part of the
          adventure:
        </p>
        <div className="flex lg:hidden flex-wrap justify-center mt-5 gap-2">
          <ToBuyBox>
            <svg
              width="32"
              height="32"
              viewBox="0 0 7 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.10306 15.076C2.10306 11.452 2.36706 8.476 2.36706 5.716C2.36706 3.652 0.399063 3.772 0.399063 2.956C0.399063 2.38 2.29506 0.675999 4.81506 0.675999C5.31906 0.675999 6.27906 0.964 6.27906 1.636C6.27906 2.092 5.60706 5.02 5.60706 8.86C5.60706 12.124 6.39906 16.012 6.39906 20.212C6.39906 20.62 4.04706 20.86 2.79906 20.86C2.36706 20.86 2.10306 21.004 2.10306 15.076Z"
                fill="#341800"
              />
            </svg>
            <div className="text-brown_34">
              Set up a digital wallet <br /> (
              <span className="text-[#AF000F]">MetaMask, Trust Wallet</span>, or
              another ERC-20 compatible wallet).
            </div>
          </ToBuyBox>
          <ToBuyBox>
            <svg
              width="32"
              height="32"
              viewBox="0 0 12 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.15106 16.108C4.15106 16.54 4.41506 16.66 4.63106 16.66C4.94306 16.66 5.23106 16.372 6.02306 16.372C7.29506 16.372 8.30306 16.852 8.92706 16.852C9.83906 16.852 10.6071 16.012 10.6071 14.836C10.6071 14.284 10.2471 13.756 10.5111 13.756C10.7031 13.756 11.8551 15.1 11.8551 16.78C11.8551 19.18 9.83906 20.86 8.35106 20.86C7.17506 20.86 5.27906 20.212 4.19906 20.212C2.99906 20.212 1.67906 20.86 1.07906 20.86C0.311063 20.86 0.143063 20.236 0.143063 19.564C0.143063 11.236 8.25506 10.18 8.25506 6.46C8.25506 5.116 7.65506 3.916 6.19106 3.916C3.69506 3.916 2.71106 7.684 2.25506 7.684C2.01506 7.684 0.551063 5.044 0.551063 4.78C0.551063 3.556 2.71106 0.675999 6.11906 0.675999C9.38306 0.675999 11.7591 2.524 11.7591 5.836C11.7591 11.788 4.15106 13.54 4.15106 16.108Z"
                fill="#341800"
              />
            </svg>
            <div className="text-brown_34">
              Fund your wallet with Ethereum
              <span className="text-[#AF000F]"> (ETH) </span> or Binance Coin
              <span className="text-[#AF000F]"> (BNB) </span> for gas fees.
            </div>
          </ToBuyBox>
          <ToBuyBox>
            <svg
              width="32"
              height="32"
              viewBox="0 0 12 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.15906 1.036H10.0791C10.7031 1.036 11.4951 0.868 11.4951 1.732C11.4951 5.668 7.87106 7.9 7.87106 8.428C7.87106 9.052 11.8551 9.364 11.8551 14.02C11.8551 17.764 9.45506 20.86 5.56706 20.86C2.08706 20.86 0.143063 18.46 0.143063 18.148C0.143063 17.956 2.39906 14.884 2.63906 14.884C3.14306 14.884 3.83906 16.588 5.85506 16.588C7.22306 16.588 8.35106 15.148 8.35106 13.828C8.35106 11.62 6.28706 10.66 3.59906 10.66C3.28706 10.66 2.75906 10.54 2.75906 10.156C2.75906 9.22 7.31906 5.236 7.31906 4.516C7.31906 4.084 6.59906 4.108 6.16706 4.108C4.27106 4.108 2.27906 4.972 1.82306 4.972C1.46306 4.972 0.959063 2.092 0.959063 1.564C0.959063 0.915999 1.70306 1.036 2.15906 1.036Z"
                fill="#341800"
              />
            </svg>

            <div className="text-brown_34">
              Visit a decentralized exchange (like
              <span className="text-[#AF000F]"> Uniswap </span> or
              <span className="text-[#AF000F]"> PancakeSwap </span>).
            </div>
          </ToBuyBox>
          <ToBuyBox>
            <svg
              width="32"
              height="32"
              viewBox="0 0 14 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3831 19.26C10.3831 19.668 8.31906 19.86 7.35906 19.86C6.78306 19.86 6.61506 19.668 6.63906 18.948C6.63906 17.508 7.04706 16.188 7.04706 14.556C7.04706 14.028 6.61506 13.956 6.18306 13.956C4.50306 13.956 2.34306 14.748 1.74306 14.748C0.639063 14.748 0.543063 13.548 0.543063 12.444C0.543063 7.98 6.20706 0.0359988 7.62306 0.0359988H10.2631C10.4551 0.0359988 11.1031 0.0359988 11.1031 0.491999C11.1031 0.923999 4.26306 6.612 4.26306 10.764C4.26306 11.052 4.38306 11.124 4.79106 11.124C5.31906 11.124 7.26306 10.74 7.50306 9.66C8.46306 5.484 10.5031 3.78 11.2951 3.78C11.4391 3.78 11.5351 3.9 11.5351 4.02C11.5351 4.236 10.7671 6.036 10.7671 8.34C10.7671 10.236 11.1031 10.356 12.6391 10.356C13.5031 10.356 13.5511 10.02 13.5511 13.068C13.5511 13.74 13.5031 14.004 13.2391 14.004C12.7831 14.004 12.0391 13.764 11.4631 13.764C10.6231 13.764 10.2871 13.98 10.2871 16.164C10.2871 17.244 10.3831 17.916 10.3831 19.26Z"
                fill="#341800"
              />
            </svg>

            <div className="text-brown_34">
              Swap your ETH or BNB for Camel Coins
              <span className="text-[#AF000F]"> (CMC)</span>
            </div>
          </ToBuyBox>
          <ToBuyBox>
            <svg
              width="32"
              height="32"
              viewBox="0 0 12 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.15906 1.036H10.0791C10.7031 1.036 11.4951 0.868 11.4951 1.732C11.4951 5.668 7.87106 7.9 7.87106 8.428C7.87106 9.052 11.8551 9.364 11.8551 14.02C11.8551 17.764 9.45506 20.86 5.56706 20.86C2.08706 20.86 0.143063 18.46 0.143063 18.148C0.143063 17.956 2.39906 14.884 2.63906 14.884C3.14306 14.884 3.83906 16.588 5.85506 16.588C7.22306 16.588 8.35106 15.148 8.35106 13.828C8.35106 11.62 6.28706 10.66 3.59906 10.66C3.28706 10.66 2.75906 10.54 2.75906 10.156C2.75906 9.22 7.31906 5.236 7.31906 4.516C7.31906 4.084 6.59906 4.108 6.16706 4.108C4.27106 4.108 2.27906 4.972 1.82306 4.972C1.46306 4.972 0.959063 2.092 0.959063 1.564C0.959063 0.915999 1.70306 1.036 2.15906 1.036Z"
                fill="#341800"
              />
            </svg>

            <div className="text-brown_34">
              <span className="text-[#AF000F]"> HODL </span> or trade your Camel
              Coins and join the growing community!
            </div>
          </ToBuyBox>
        </div>

        <div className="hidden lg:flex flex-wrap justify-center mt-14 gap-10">
          <Image
            alt="me"
            width={500}
            height={500}
            src="/Vectors/1.webp"
            className="object-contain object-center md:w-[500px]"
          />
          <Image
            alt="me"
            width={500}
            height={500}
            src="/Vectors/2.webp"
            className="object-contain object-center md:w-[500px]"
          />
          <Image
            alt="me"
            width={500}
            height={500}
            src="/Vectors/3.webp"
            className="object-contain object-center md:w-[500px]"
          />
          <Image
            alt="me"
            width={500}
            height={500}
            src="/Vectors/4.webp"
            className="object-contain object-center md:w-[500px]"
          />
          <Image
            alt="me"
            width={500}
            height={500}
            src="/Vectors/5.webp"
            className="object-contain object-center md:w-[500px]"
          />
        </div>
      </Container>
    </div>
  );
};

export default HowToBuy;
