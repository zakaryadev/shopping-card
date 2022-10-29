import React from "react";
import GoodItem from "./GoodItem";

function GoodList(props) {
  const { goods = [], addToBasket, notify } = props;
  if (!goods.length) {
    return <h3>Nothing here!</h3>;
  }
  return (
    <div className="container">
      <div className="grid">
        {goods.map((item) => (
          <GoodItem key={item.id} {...item} addToBasket={addToBasket} notify={notify} />
        ))}
      </div>
    </div>
  );
}

export default GoodList;
