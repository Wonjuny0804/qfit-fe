import React from "react";
import Layout from "src/components/common/Layout";
import ChevronLeftIcon from "../../public/icons/chevronLeft.svg";
import Link from "next/link";
import CirclePlus from "../../public/icons/circle.svg";
import { useRouter } from "next/router";
import mockData from "../../public/mockData.json";
import ListItem from "src/components/ReviewRoom/ListItem";

const ReviewRoomListPage = () => {
  const router = useRouter();

  return (
    <Layout showNav={false}>
      <div
        className={`flex items-center justify-center 
        border-b border-[#EEEEEE]
        h-[55px] px-5
        `}
      >
        <button
          type="button"
          className={`absolute left-5`}
          onClick={() => router.back()}
        >
          <ChevronLeftIcon className={`w-6 h-6`} />
        </button>

        <h1 className={`font-[600]`}>삼성동</h1>

        <Link
          href={"#"}
          className={`flex items-center gap-1 absolute right-5 text-sm`}
        >
          <CirclePlus className={`w-4 h-4`} />
          센터등록
        </Link>
      </div>

      <ul className={`px-6`}>
        {mockData.map((data, index) => (
          <li key={`review-room-data-${index}`} className={`border-b border-1`}>
            <ListItem name={data.name} distance={""} address={data.address} />
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default ReviewRoomListPage;
