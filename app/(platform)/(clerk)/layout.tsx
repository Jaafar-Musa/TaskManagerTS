import { WithChildren } from "@/types/WithChildren";
import React, { FC } from "react";

const ClerkLayout: FC<WithChildren> = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-full">{children}</div>
  );
};

export default ClerkLayout;
