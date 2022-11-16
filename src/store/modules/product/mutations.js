import { SET_PRODUCTS_MUTATION, SET_PRODUCTS_ERRORS_MUTATION, SET_SINGLE_PRODUCT_MUTATION } from "../../storeConstants";

export default {
    [SET_PRODUCTS_MUTATION](state, payload) {
        state.products = payload
        state.errors = null
    },

    [SET_PRODUCTS_ERRORS_MUTATION](state, payload) {
        state.errors = payload
    },

    [SET_SINGLE_PRODUCT_MUTATION](state, payload) {
        state.product = payload
    }
}
