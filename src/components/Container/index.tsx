import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ id, children, className }) => {
  return (
    <div id={id} className="flex justify-center w-full">
      <div className={`lg:max-w-[1440px] w-[90%]   ${className ?? ""}`}>
        {children}
      </div>
    </div>
  );
};

export default Container;
