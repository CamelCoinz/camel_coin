import React from "react";

export const ToBuyBox: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="bg-[#FFFFFF]/70 rounded-md w-full h-20 py-3 text-sm px-4 flex gap-x-3 items-center">
      {children}
    </div>
  );
};
