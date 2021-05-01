import api from "../apis/CartAPI";

export const ACTION_TYPES = {
    ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
    GET_ITEM_FROM_CART: "GET_ITEM_FROM_CART",
  };

  export const addItemToCart = (data,onSuccess,onFailure) => (dispatch) => {
    api
      .cartItems()
      .addItemsToCart(data)
      .then((response) => {
        dispatch({
          type: ACTION_TYPES.ADD_ITEM_TO_CART,
          payload: response.data,
        });
        onSuccess();
      })
      .catch(() => {
        onFailure();
      });
  };

  export const getItemFromCart = (id) => (dispatch) => {
    api
      .cartItems()
      .fetchCartItemsForUser(id)
      .then((response) => {
        dispatch({
          type: ACTION_TYPES.GET_ITEM_FROM_CART,
          payload: response.data,
        });

      })
      .catch(() => {

      });
  };