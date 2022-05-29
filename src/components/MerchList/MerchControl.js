import React from "react";
import MerchList from "./MerchList";
import MerchDetails from "../NewMerchForm/MerchDetails";

const MerchControl = () => {
  return (
    <div className="container">
      <h1 className={"text-center"}>Merch Control</h1>
      <div className="row">
        <div className="col">
          <h2>Inventory:</h2>
          <MerchList />
        </div>
        <div className="col">
          <h2>Item Details:</h2>
          <MerchDetails />
        </div>
      </div>
    </div>
  );
};

export default MerchControl;
