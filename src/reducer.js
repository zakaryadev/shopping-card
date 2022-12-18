const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_BASKET": {
      console.log("ADD_TO_BASKET");
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

    case "TOGGLE_BASKET": {
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };
    }

    case "REMOVE_FROM_BASKET": {
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
