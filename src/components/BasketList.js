import React from "react";
import BasketItem from "./BasketItem";

export default function BasketList(props) {
  const {
    order = [],
    handleBasketShow,
    removeFromBasket,
    decrementQuantity,
    incrementQuantity,
  } = props;
  let totalPrice = 0;
  const totalPriceSum = () => {
    order.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };
  return (
    <div className="modal-bg">
      <div
        id="modal1"
        className="modal rounded"
        style={{ zIndex: "10", display: "block" }}
      >
        <div className="modal-content">
          <ul className="collection">
            <li className="collection-item active most-color center-align">
              BASKET
            </li>
            <span className="hideg">
              {order.length ? (
                order.map((item) => {
                  return (
                    <BasketItem
                      key={item.id}
                      {...item}
                      removeFromBasket={removeFromBasket}
                      incrementQuantity={incrementQuantity}
                      decrementQuantity={decrementQuantity}
                    />
                  );
                })
              ) : (
                <li className="collection-item">Basket is empty!</li>
              )}
            </span>

            <li className="collection-item active  most-color">
              Total Price: {totalPriceSum()}$
            </li>

            <i className="material-icons close-btn" onClick={handleBasketShow}>
              close
            </i>
          </ul>
        </div>
      </div>
    </div>
  );
}
