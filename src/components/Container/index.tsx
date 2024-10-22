import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  id?: string;
  parentClass?: string;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  id,
  children,
  parentClass,
  className,
}) => {
  return (
    <div id={id} className={`flex justify-center w-full ${parentClass ?? ""}`}>
      <div className={`lg:max-w-[1440px] w-[90%]   ${className ?? ""}`}>
        {children}
      </div>
    </div>
  );
};

export default Container;
