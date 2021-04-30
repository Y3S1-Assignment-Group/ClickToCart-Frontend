import api from "../apis/ItemAPI";

export const ACTION_TYPES = {
  ADD_ITEM: "ADD_ITEM",
  UPDATE_ITEM: "UPDATE_ITEM",
  DELETE_ITEM: "DELETE_ITEM",
  FETCH_ALL_ITEMS: "FETCH_ALL_ITEMS",
};

export const fetchAllItems = () => (dispatch) => {
  api
    .items()
    .fetchAll()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FETCH_ALL_ITEMS,
        payload: response.data,
      });
    })
    .catch(() => {});
};

export const addItem = (data, OnSuccess, OnFailure) => (dispatch) => {
  api
    .items()
    .create(data)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.ADD_ITEM,
        payload: response.data,
      });
      OnSuccess();
    })
    .catch(() => {
      OnFailure();
    });
};

export const updateItem = (data, OnSuccess, OnFailure) => (dispatch) => {
  api
    .items()
    .update(data)
    .then(() => {
      dispatch({
        type: ACTION_TYPES.UPDATE_ITEM,
        payload: { ...data },
      });
      OnSuccess();
    })
    .catch(() => {
      OnFailure();
    });
};

export const deleteItem = (id, OnSuccess, OnFailure) => (dispatch) => {
  api
    .items()
    .delete(id)
    .then(() => {
      dispatch({
        type: ACTION_TYPES.DELETE_ITEM,
        payload: { id },
      });
      OnSuccess();
    })
    .catch(() => {
      OnFailure();
    });
};
