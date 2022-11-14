import { SET_CATEGORIES_MUTATION, SET_CATEGORIES_ERRORS_MUTATION, SET_SINGLE_CATEGORY_MUTATION } from "../../storeConstants";

export default {
    [SET_CATEGORIES_MUTATION](state, payload) {
        state.categories = payload
        state.errors = null
    },

    [SET_CATEGORIES_ERRORS_MUTATION](state, payload) {
        state.errors = payload
    },

    [SET_SINGLE_CATEGORY_MUTATION](state, payload) {
        state.category = payload
    }
}
