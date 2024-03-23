import { WithChildren } from "@/types/WithChildren";
import { ClerkProvider } from "@clerk/nextjs";
import { FC } from "react";

const PlatformLayout :FC<WithChildren> = ({children}) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default PlatformLayout;
