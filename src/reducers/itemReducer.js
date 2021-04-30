import { ACTION_TYPES } from "../actions/ItemActions";

const initialState = {
  itemList: [],
  filterItemList: [],
  newItem: "",
  updatedItem: "",
  deletedItem: "",
};

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL_ITEMS:
      return {
        ...state,
        itemList: [...action.payload],
        filterItemList: [...action.payload],
      };
    case ACTION_TYPES.FETCH_FILTER_ITEMS:
      return {
        ...state,
        filterItemList: [...action.payload],
      };
    case ACTION_TYPES.ADD_ITEM:
      return {
        ...state,
        itemList: [...state.itemList, action.payload],
        newItem: action.payload,
      };
    case ACTION_TYPES.UPDATE_ITEM:
      return {
        ...state,
        itemList: state.itemList.map((x) =>
          x.id === action.payload.id ? action.payload : x
        ),
        updatedItem: action.payload,
      };
    case ACTION_TYPES.DELETE_ITEM:
      return {
        ...state,
        itemList: state.itemList.filter((x) => x.id !== action.payload.id),
        deletedItem: action.payload.id,
      };
    default:
      return state;
  }
};
