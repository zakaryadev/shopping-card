import React, { useContext } from "react";
import { ShopContext } from "../context";
import GoodItem from "./GoodItem";

function GoodList() {
  const { goods } = useContext(ShopContext);
  console.log(goods);
  if (goods.length <= 0) {
    return <h3>Nothing here!</h3>;
  }
  return (
    <div className="container">
      <div className="grid">
        {goods.map((item) => (
          <GoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default GoodList;
