import React from "react";
import Container from "../Container";
import Header from "../Header";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-100 bg-[#FDB93C]">
      <Header />
      <Container className=" bg-main_gray rounded-xl">
        <div className="lg:absolute top-12 xl:top-[70px] md:mt-7 text-txt_brown">
          <h1 className="title-font text-2xl md:text-4xl xl:text-5xl mb-2 font-extrabold">
            Welcome to <span className="text-[#23672D]">Crypto Camel</span>:
            <br /> The Desert’s Digital Gold
          </h1>
          <p className="font-bold">
            Embark on a journey through the Blockchain Desert and uncover the
            legendary Camel Coins.
          </p>
        </div>
      </Container>
      <Image
        alt="me"
        width={50}
        height={50}
        src="/Vectors/hero-camel.svg"
        className="object-contain w-full"
      />
    </div>
  );
};

export default Hero;
