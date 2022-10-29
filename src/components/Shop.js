import React, { useState, useEffect } from "react";
import { API_URL, API_AUTH_KEY } from "../Config";
import BasketList from "./BasketList";
import GoodList from "./GoodList";
import Loader from "./Loader";
import ShoppingCart from "./ShoppingCart";
import { toast } from "react-toastify";
export default function Shop(props) {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const notify = () =>
    toast.success("Item added to basket", {
      theme: "colored",
      icon: "😊",
    });
  const thanks = () =>
    toast.success("Thanksss!!!", {
      theme: "colored",
      icon: "😊",
    });
  const thanksBack = () =>
    toast.error("thanks", {
      theme: "colored",
      icon: "🥲",
    });
  const addToBasket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
  };
  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };
  const removeFromBasket = (itemId) => {
    const newOrder = order.filter((item) => item.id !== itemId);
    setOrder(newOrder);
  };
  const incrementQuantity = (itemID) => {
    const newOrder = order.map((el) => {
      if (el.id === itemID) {
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity,
        };
      } else {
        return el;
      }
    });
    thanks();
    setOrder(newOrder);
  };
  const decrementQuantity = (itemID) => {
    const newOrder = order.map((el) => {
      if (el.id === itemID) {
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return el;
      }
    });
    thanksBack();
    setOrder(newOrder);
  };
  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_AUTH_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);
  return (
    <div className="content">
      {isBasketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      )}
      <ShoppingCart
        quantity={order.length}
        handleBasketShow={handleBasketShow}
      />
      {loading ? (
        <Loader />
      ) : (
        <GoodList goods={goods} addToBasket={addToBasket} notify={notify} />
      )}
    </div>
  );
}
