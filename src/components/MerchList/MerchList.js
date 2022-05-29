import React from "react";
import Merch from "../../data/Merch";
import MerchItem from "./MerchItem";

const MerchList = () => {
  return (
    <div className="row">
      {Merch.map((item) => (
        <MerchItem
          key={item.id}
          item={item.item}
          size={item.size}
          color={item.color}
          quantity={item.quantity}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default MerchList;
