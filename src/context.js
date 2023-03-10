import React, { createContext } from "react";
import { toast } from "react-toastify";
import { useReducer } from "react";
import reducer from "./reducer";
export const ShopContext = createContext();
const initialState = {
  goods: [],
  loaded: false,
  order: [],
  isBasketShow: false,
};
export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);
  value.addToBasket = (item) => {
    toast.success("Good is successfully added to basket");
    dispatch({ type: "ADD_TO_BASKET", payload: item });
  };
  value.incrementQuantity = (itemID) => {
    dispatch({ type: "INCR_QUANTITY", payload: { id: itemID } });
  };
  value.decrementQuantity = (itemID) => {
    dispatch({ type: "DECR_QUANTITY", payload: { id: itemID } });
  };
  value.decrementQuantity = (itemID) => {
    dispatch({ type: "DECR_QUANTITY", payload: { id: itemID } });
  };
  value.handleBasketShow = () => {
    dispatch({ type: "TOGGLE_BASKET" });
  };
  value.removeFromBasket = (itemID) => {
    toast.error("The element removed successfully!");
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { id: itemID } });
  };
  value.setGoods = (data) => {
    dispatch({ type: "SET_GOODS", payload: data });
  };

  return (
    <ShopContext.Provider value={{ dispatch: dispatch, value: value }}>
      {children}
    </ShopContext.Provider>
  );
};
