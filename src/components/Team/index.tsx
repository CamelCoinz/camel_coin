"use client";

import Image from "next/image";
import React from "react";
import Container from "../Container";

const Team = () => {
  const images = [
    {
      label: "Ali Al-Sahra",
      role: "Founder & CEO",
      url: "Al-Sahra",
    },
    {
      label: "Layla Ahmed",
      role: "Lead Developer",
      url: "Layla",
    },
    {
      label: "Omar Khalid",
      role: "Blockchain Engineer",
      url: "Khalid",
    },
    {
      label: "Fatima Zayed",
      role: "Community Manager",
      url: "Fatima",
    },
    {
      label: "Yusuf Khan",
      role: "Marketing & Partnerships",
      url: "Yusuf",
    },
  ];
  return (
    <Container>
      <h1 className="text-txt_brown text-2xl lg:text-5xl font-bold">
        Meet the Team
      </h1>
      <p className="text-dark_brown font-bold text-[#6B3200] text-sm lg:text-base max-sm:mb-10">
        The team behind Camel Coin consists of passionate developers,
        experienced traders, and visionary leaders, all working together to
        bring you a decentralized future powered by the Blockchain Desert&apos;s
        finest currency.
      </p>
      <div className="flex md:mt-5 flex-wrap justify-center gap-5 lg:gap-16 lg:w-2/3 mx-auto">
        {images.map((img, index) => {
          return (
            <div key={index + 1} className="text-center">
              <Image
                alt="me"
                width={250}
                height={250}
                src={`/Team/${img.url}.webp`}
                className="object-contain object-center"
              />
              <div className="text-brown_34 font-bold text-xl mt-1">
                {img.label}
              </div>
              <div className="text-dark_brown text-xs font-bold ">
                {img.role}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Team;
