import React from "react";
import Container from "../Container";
import Image from "next/image";
import { TokenBox } from "./TokenBox";

export const Tokenomics = () => {
  return (
    <div className="bg-[url('/Vectors/bg-tokenomics.svg')] bg-contain bg-no-repeat w-full pt-7 relative flex justify-center">
      <span
        id="tokenomics"
        className=" absolute -top-10 lg:-top-[5px] sr-only"
      />
      <Container>
        <h1 className="text-txt_brown  text-2xl lg:text-5xl font-bold lg:mt-16 w-full">
          Tokenomics
        </h1>
        <div className="bg-[url('/Vectors/wood-sign-sm.webp')] lg:bg-[url('/Vectors/wood-sign.webp')] bg-contain bg-no-repeat mt-5 lg:mt-12 h-56 lg:h-80 mx-auto bg-center">
          <div className="sr-only">Total Supply: 1,000,000,000 Camel Coins</div>
        </div>
        <div className="flex flex-wrap gap-5 justify-center mt-7 lg:mt-14">
          <TokenBox percent="25%" title="Presale">
            <Image
              alt="me"
              width={50}
              height={50}
              src={`/Vectors/stone_2.svg`}
              className="object-cover object-center w-16 lg:w-[90px] absolute -left-5 lg:-left-9 -bottom-4"
            />
          </TokenBox>
          <TokenBox percent="25%" title="Liquidity" />
          <TokenBox percent="20%" title="Marketing">
            <Image
              alt="me"
              width={50}
              height={50}
              src={`/Vectors/stone.svg`}
              className="object-cover object-center lg:w-[70px] absolute lg:-right-7 -right-5 -bottom-2"
            />
          </TokenBox>
          <TokenBox percent="15%" title="Rewards" />
          <TokenBox percent="15%" title="Treasury">
            <Image
              alt="me"
              width={50}
              height={50}
              src={`/Vectors/vector.svg`}
              className="object-cover object-center lg:w-[70px] absolute -right-5 -bottom-2"
            />
          </TokenBox>
        </div>
        <p className="text-[#6B3200] mt-3 lg:mt-10 text-sm lg:text-lg">
          Camel Coin tokenomics is carefully designed to ensure long-term
          growth, stability, and sustainability within the ecosystem. By
          strategically allocating tokens across key sectors, Camel Coin aims to
          fuel innovation, incentivize community participation, and create a
          robust decentralized economy. Each allocation is tailored to meet the
          evolving needs of the ecosystem, fostering liquidity, development, and
          long-term value for holders.
        </p>
        <Image
          alt="me"
          width={50}
          height={50}
          src="/Vectors/camel-tokenomics.svg"
          className="object-contain w-full absolute left-0"
        />
        <section className="relative py-10 mt-[20%] md:mt-[25%]">
          <span
            id="who-is"
            className=" absolute top-9 lg:top-[200px] sr-only "
          />
          <h1 className="text-txt_brown text-2xl lg:text-5xl font-bold ">
            Who is Crypto Camel?
          </h1>
          <p className="text-brown_34 mt-5">
            <span className="text-[#9D4500]">
              <span className="text-[#9D4500] pr-1">Crypto Camel</span>
            </span>
            is more than just a traveler of the Blockchain Desert. He is a
            symbol of persistence, wisdom, and vision in the unpredictable world
            of cryptocurrency. With sharp intellect and unmatched determination,
            <span className="text-[#9D4500] mx-1">Crypto Camel</span> represents
            those who dare to explore the unknown, navigate market volatility,
            and unlock the treasures hidden within blockchain technology. Having
            crossed the treacherous Mirage Markets and solved the riddles of
            ancient cryptographic puzzles, Crypto Camel discovered the legendary
            Camel Coins and decided to share them with the world. His mission is
            to empower all adventurers—traders, nomads, and merchants alike—by
            offering them the tools to succeed in the decentralized future.
            <br />
            <span className="font-extrabold text-xl">
              Are you ready to join Crypto Camel on his journey through the
              digital dunes?
            </span>
          </p>
          <a href="/Whitepaper.pdf" download>
            <button className="rounded-full hover:scale-90 duration-300 text-sm px-8 py-3 shadow-xl bg-[url('/Vectors/btn-bg.svg')] bg-cover bg-no-repeat text-white mt-3">
              Read the Whitepaper
            </button>
          </a>
        </section>
        <Image
          alt="me"
          width={120}
          height={50}
          src={`/Vectors/arrow.svg`}
          className="object-cover object-center w-[35vw] md:w-[20vw]  absolute right-5 md:right-28 -bottom-28 md:-bottom-40 animate-pulse"
        />
      </Container>
    </div>
  );
};
