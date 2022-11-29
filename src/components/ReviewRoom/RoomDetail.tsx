import React from "react";

interface Props {
  title: string;
  address: string;
  phoneNumber: string;
  schedule: string;
  latlng: {
    lat: number;
    lng: number;
  };
  reviews: {
    stars: number;
    reviews: number;
  };
}

const RoomDetail = (props: Props) => {
  return <section>RoomDetail</section>;
};

export default RoomDetail;
