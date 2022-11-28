import React from "react";
import LocationIcon from "../../public/icons/location.svg";
import Stars from "./Stars";

interface Props {
  name: string;
  distance: string;
  address: string;
}

const ListItem = ({ name, distance, address }: Props) => {
  return (
    <div className={`py-6`}>
      <div className={`flex items-end gap-[10px]`}>
        <h3 className={`font-bold text-lg`}>{name}</h3>
        <span className={`text-sm text-[#9e9e9e] leading-[24px]`}>6.3km</span>
      </div>
      <div className={`text-[#616161] flex items-center`}>
        <LocationIcon
          className={`text-[#616161] flex-shrink-0`}
          fill={"#616161"}
          width={"16px"}
          height={"16px"}
        />
        {address}
      </div>
      <div className={`mt-[10px]`}>
        <Stars stars={4} reviews={4} likes={25} />
      </div>
    </div>
  );
};

export default ListItem;
