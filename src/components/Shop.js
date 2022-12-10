import React, { useEffect, useContext } from "react";
import { API_URL, API_AUTH_KEY } from "../Config";
import BasketList from "./BasketList";
import GoodList from "./GoodList";
import Loader from "./Loader";
import ShoppingCart from "./ShoppingCart";
import { ShopContext } from "../context";

export default function Shop(props) {
  const { value } = useContext(ShopContext);
  const { isBasketShow, loaded, setGoods } = value;
  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_AUTH_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.featured);
      });
  }, []);
  return (
    <div className="content">
      {isBasketShow ? <BasketList /> : null}
      <ShoppingCart />
      {loaded ? <GoodList /> : <Loader />}
    </div>
  );
}
