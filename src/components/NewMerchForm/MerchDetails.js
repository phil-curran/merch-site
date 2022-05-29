import React from "react";
import Merch from "../../data/Merch";
import PropTypes from "prop-types";

const Merch1 = {
  item: "Tshirt",
  size: "X-Small",
  color: "Black",
  quantity: 1,
  price: 20,
};

const MerchDetails = (Merch) => {
  const { merch } = Merch;
  return (
    <>
      <h1>Description: {Merch1.item}</h1>
      <h2>Size: {Merch1.size}</h2>
      <p>Color: {Merch1.color}</p>
      <p>Price: {Merch1.price}</p>
    </>
  );
};

export default MerchDetails;
