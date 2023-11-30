import React, { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
};

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div className="mx-auto px-2.5 md:px-20">{children}</div>;
};
export default Wrapper;
