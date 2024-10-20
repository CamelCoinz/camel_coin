import React from "react";

interface props {
  percent: string;
  title: string;
  children?: React.ReactNode;
}
export const TokenBox: React.FC<props> = ({ percent, title, children }) => {
  return (
    <div>
      <div className="bg-[url('/Vectors/paper.webp')] bg-contain bg-no-repeat w-[190px] h-[140px]  relative flex items-center justify-center animate-zoom">
        <div className="md:text-[40px] text-4xl font-extrabold">{percent}</div>
        {children}
      </div>
      <div className="text-center font-bold  md:text-xl text-[#341800]">
        <strong>{title}</strong>
      </div>
    </div>
  );
};
