import React from "react";
import Link from "next/link";
import ReviewRoomIcon from "../../public/icons/review_room.svg";

const BottomNav = () => {
  return (
    <footer
      className={`fixed bottom-0 bg-white border-t w-screen border-[#EEEEEE] h-[51px] mb-[34px] 
      flex px-5 items-center pt-[7px]
      `}
    >
      <Link href={"/"} className={`flex flex-col items-center gap-1`}>
        <ReviewRoomIcon width={"24px"} height={"24px"} fill={"none"} />
        <span className={`capitalize text-[10px]`}>review room</span>
      </Link>
    </footer>
  );
};

export default BottomNav;
