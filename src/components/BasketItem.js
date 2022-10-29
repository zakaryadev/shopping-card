import React from "react";

export default function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket,
    decrementQuantity,
    incrementQuantity,
  } = props;
  return (
    <li className="collection-item" key={id}>
      <h6>
        {name} x{quantity} = <b>{price * quantity}$</b>
      </h6>
      <span className="secondary-content">
        <i
          className="material-icons most-txt-color  btn btn-custom most-color"
          onClick={() => incrementQuantity(id)}
        >
          exposure_plus_1
        </i>
        <i
          className="material-icons most-txt-color  btn btn-custom most-color"
          onClick={() => decrementQuantity(id)}
        >
          exposure_neg_1
        </i>
        <i
          className="material-icons most-txt-color  btn btn-custom most-color"
          onClick={() => removeFromBasket(id)}
        >
          delete
        </i>
      </span>
    </li>
  );
}
