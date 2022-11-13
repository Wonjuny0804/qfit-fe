import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className={`bg-black flex justify-center h-[56px] items-center px-5`}>
      <Link href={"/"}>
        <h1 className={`font-bold text-green text-xl`}>Q FIT</h1>
      </Link>
    </nav>
  );
};

export default NavBar;
