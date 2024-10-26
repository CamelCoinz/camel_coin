import React from "react";

export const ToBuyBox: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="bg-[#FFFFFF]/70 rounded-md w-full min-h-32 py-3 text-sm px-4 grid grid-cols-4">
      {children}
    </div>
  );
};
