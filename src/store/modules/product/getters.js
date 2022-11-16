import { GET_PRODUCTS_GETTER, GET_SINGLE_PRODUCT_GETTER } from "../../storeConstants";

export default {
    [GET_PRODUCTS_GETTER]: (state) => {
        return state.products
    },

    [GET_SINGLE_PRODUCT_GETTER]: (state) => {
      return state.product
    }
}
