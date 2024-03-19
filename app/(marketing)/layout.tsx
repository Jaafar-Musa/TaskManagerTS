import React, { FC } from "react";
import { MarketingLayoutProps } from "./type";

const MarketingLayout: FC<MarketingLayoutProps> = ({ children }) => {
  return (
    <div className="h-full bg-slate-100">
      <main className="pt-40 pb-20 bg-slate-100">{children}</main>
    </div>
  );
};

export default MarketingLayout;