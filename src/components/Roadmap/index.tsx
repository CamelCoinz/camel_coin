import Image from "next/image";
import React from "react";
import Container from "../Container";

const Roadmap = () => {
  return (
    <Container className="relative">
      <span id="roadmap" className=" absolute -top-20 lg:-top-24 sr-only " />
      <h1 className="text-txt_brown text-2xl lg:text-5xl font-bold font-HoboStd">
        Roadmap
      </h1>
      <p className="text-dark_brown font-bold text-[#6B3200]">
        Our journey with Camel Coins is just beginning. Here&apos;s a look at
        what&apos;s coming next:
      </p>
      <Image
        alt="me"
        width={900}
        height={700}
        src="/Vectors/Roadmap.webp"
        className="object-cover object-center my-10 mx-auto"
      />
    </Container>
  );
};

export default Roadmap;
