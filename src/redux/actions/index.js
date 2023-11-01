import { GET_ALL_PRODUCTS } from "../../actions-types";
import axios from "axios";

export function getAllProducts() {
  return async function (dispatch) {
    try {
      const url = "http://localhost:4000/getAllProducts";
      const response = await axios.get(url);
      console.log(response.data);
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}
