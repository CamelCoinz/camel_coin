import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-brown_34 h-full mt-5">
      <div className="bg-[url('/Vectors/footer.webp')] bg-contain sm:bg-cover bg-no-repeat w-100 pb-24 relative flex justify-center">
        <div className="mt-40 sm:mt-64 lg:mt-[470px] text-center">
          <h1 className="text-white text-2xl lg:text-5xl font-bold">
            Follow Us on Social Media
          </h1>
          <p className="text-[#FFB566] font-bold lg:w-[30vw] mx-auto text-sm lg:text-lg">
            Stay updated with the latest news, developments, and announcements
            by following us on social media:
          </p>
          <div className="grid grid-cols-2 place-items-center lg:grid-cols-2 mt-10 gap-y-2 md:gap-3">
            <div className="bg-[url('/Vectors/X.webp')] hover:scale-90 duration-300 cursor-pointer text-xs lg:text-lg w-44 h-10 lg:w-80 lg:h-20 bg-contain bg-no-repeat flex gap-x-2 justify-center items-center text-[#7C3B1D] font-bold">
              <Image
                alt="me"
                width={30}
                height={30}
                src="/Vectors/X_logo.webp"
                className="max-md:w-6"
              />
              <div className="">CryptoCamelCoin</div>
            </div>
            <div className="bg-[url('/Vectors/Youtube.webp')] hover:scale-90 duration-300 cursor-pointer text-xs lg:text-lg w-44 h-10 lg:w-80 lg:h-20 bg-contain bg-no-repeat flex gap-x-2 justify-center items-center text-[#7C3B1D] font-bold">
              <Image
                alt="me"
                width={30}
                height={30}
                src="/Vectors/youtube_logo.webp"
                className="max-md:w-6"
              />
              <div>CryptoCamelCoin</div>
            </div>
            <div className="bg-[url('/Vectors/facebook.webp')] hover:scale-90 duration-300 cursor-pointer text-xs lg:text-lg w-44 h-10 lg:w-80 lg:h-20 bg-cover bg-no-repeat flex gap-x-2 justify-center items-center text-[#7C3B1D] font-bold">
              <Image
                alt="me"
                width={30}
                height={30}
                src="/Vectors/facebook_logo.webp"
                className="max-md:w-6"
              />
              <div>CryptoCamel</div>
            </div>
            <div className="bg-[url('/Vectors/Skype.webp')] hover:scale-90 duration-300 cursor-pointer text-xs lg:text-lg w-44 h-10 lg:w-80 lg:h-20 bg-contain bg-no-repeat flex gap-x-2 justify-center items-center text-[#7C3B1D] font-bold">
              <Image
                alt="me"
                width={30}
                height={30}
                src="/Vectors/skype_logo.webp"
                className="max-md:w-6"
              />
              <div>CryptoCamelCoin</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
