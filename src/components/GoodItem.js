import React from "react";

export default function GoodItem(props) {
  const {
    id,
    name,
    description,
    price,
    full_background,
    addToBasket,
    notify,
  } = props;
  return (
    <div className="card">
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          className="btn most-color"
          onClick={() => {
            addToBasket({ id, name, price });
            notify();
          }}
        >
          Buy
        </button>
        <span className="right" style={{ fontSize: "1.8rem" }}>
          {price}$
        </span>
      </div>
    </div>
  );
}
