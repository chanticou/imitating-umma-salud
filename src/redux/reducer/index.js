import * as actionTypes from "../../actions-types";
const initialState = {
  allProducts: [],
  allProductsFilter: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case actionTypes.GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: payload,
        allProductsFilter: payload,
      };
    default:
      return state;
  }
}
