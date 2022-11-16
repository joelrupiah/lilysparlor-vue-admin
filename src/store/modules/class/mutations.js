import { SET_CLASSES_MUTATION, SET_CLASSES_ERRORS_MUTATION, SET_SINGLE_CLASS_MUTATION } from "../../storeConstants";

export default {
    [SET_CLASSES_MUTATION](state, payload) {
        state.proclasses = payload
        state.errors = null
    },

    [SET_CLASSES_ERRORS_MUTATION](state, payload) {
        state.errors = payload
    },

    [SET_SINGLE_CLASS_MUTATION](state, payload) {
        state.proclass = payload
    }
}
