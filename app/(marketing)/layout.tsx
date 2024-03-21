import React, { FC } from "react";
import { MarketingLayoutProps } from "./type";
import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";

const MarketingLayout: FC<MarketingLayoutProps> = ({ children }) => {
  return (
    <div className="h-full bg-slate-100">
      <Navbar/>
      <main className="pt-40 pb-20 bg-slate-100">{children}</main>
      <Footer/>
    </div>
  );
};

export default MarketingLayout;
