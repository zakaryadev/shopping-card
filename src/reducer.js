import { toast } from "react-toastify";
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_BASKET": {
      const itemIndex = state.order.findIndex(
        (orders) => orders.id === payload.id
      );
      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItems, index) => {
          if (index === itemIndex) {
            return {
              ...orderItems,
              quantity: orderItems.quantity + 1,
            };
          } else {
            return orderItems;
          }
        });
      }
      toast.success("Items added to basket");
      return {
        ...state,
        order: newOrder,
      };
    }

    case "INCR_QUANTITY": {
      let newOrder = state.order.map((orderItem) => {
        if (orderItem.id === payload.id) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });

      return {
        ...state,
        order: newOrder,
      };
    }

    case "DECR_QUANTITY": {
      let newOrder = state.order.map((orderItem) => {
        if (orderItem.id === payload.id) {
          const newQuantity = orderItem.quantity - 1;
          return {
            ...orderItem,
            quantity: newQuantity < 1 ? 1 : newQuantity,
          };
        } else {
          return orderItem;
        }
      });

      return {
        ...state,
        order: newOrder,
      };
    }

    case "TOGGLE_BASKET":
      toast.success("AWA");
      return {
        ...state,
        isBasketShow: state.isBasketShow ? false : true,
      };

    case "REMOVE_FROM_BASKET": {
      toast.error("The element removed successfully!");
      return {
        ...state,
        order: state.order.filter((orderItem) => orderItem.id !== payload.id),
      };
    }

    case "SET_GOODS": {
      return {
        ...state,
        goods: payload || [],
        loaded: true,
      };
    }
    default:
      return state;
  }
};

export default reducer;
