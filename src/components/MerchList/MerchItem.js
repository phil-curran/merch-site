import React from "react";
import PropTypes from "prop-types";

const MerchItem = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("item details clicked: " + props.size);
  };
  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.item}</h5>
          <p>Size: {props.size}</p>
          <p>Color: {props.color}</p>
          <p>Quantity: {props.quantity}</p>
          <p>Price: ${props.price}</p>
          <a href="#" className="btn btn-primary" onClick={handleClick}>
            Details
          </a>
        </div>
      </div>
    </div>
  );
};

MerchItem.propTypes = {
  item: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
  id: PropTypes.string,
};

export default MerchItem;
