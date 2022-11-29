import React from "react";
import { GetServerSideProps } from "next";
import Layout from "src/components/common/Layout";
import ChevronLeftIcon from "../../public/icons/chevronLeft.svg";
import { useRouter } from "next/router";
import RoomDetail from "src/components/ReviewRoom/RoomDetail";

const ReviewRoomDetailPage = () => {
  const router = useRouter();

  return (
    <Layout showNav={false}>
      <nav
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
      </nav>

      <div>
        <RoomDetail
          title={`제이 피트니스`}
          address={`address address address`}
          phoneNumber={`01011111`}
          schedule={`schedule`}
          latlng={{ lat: 3, lng: 3 }}
          reviews={{
            stars: 4,
            reviews: 4,
          }}
        />
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default ReviewRoomDetailPage;
