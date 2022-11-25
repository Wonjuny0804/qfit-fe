import React from "react";

interface Props {
  name: string;
  distance: string;
  address: string;
}

const ListItem = ({ name, distance, address }: Props) => {
  return <div>ListItem</div>;
};

export default ListItem;
