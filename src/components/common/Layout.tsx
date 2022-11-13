import React from "react";
import BottomNav from "./BottomNav";
import NavBar from "./NavBar";

interface Props {
  showNav: boolean;
  children: React.ReactNode;
  withDefaultPadding?: boolean;
}

const Layout = ({ showNav, children, withDefaultPadding }: Props) => {
  return (
    <>
      {showNav && <NavBar />}
      <main
        className={`font-SpoqaHanSansNeo ${withDefaultPadding ? "px-5" : ""}`}
      >
        {children}
      </main>
      {showNav && <BottomNav />}
    </>
  );
};

export default Layout;
