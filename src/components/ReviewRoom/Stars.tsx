import React from "react";
import StarFilled from "../../public/icons/star-filled.svg";
import StarOutline from "../../public/icons/star-outline.svg";

interface Props {
  stars: number;
  reviews: number;
  id: string | number;
  likes: number;
}

const Stars = ({ stars, reviews, id, likes }: Props) => {
  return (
    <div className={`flex gap-[2px] items-center`}>
      {[...Array(stars)].map((_, index) => (
        <StarFilled key={`${id}-starfilled-${index}`} />
      ))}
      {[...Array(5 - stars)].map((_, index) => (
        <StarOutline key={`${id}-outlined-stars-${index}`} />
      ))}
      <span className={`leading-[15px] ml-2`}>
        {stars}({reviews})
      </span>{" "}
      <span className={`w-[3px] h-[3px] rounded-full bg-[#bdbdbd] mx-2`}></span>
      <span className={`leading-[15px]`}>좋아요 {likes}</span>
    </div>
  );
};

export default Stars;
