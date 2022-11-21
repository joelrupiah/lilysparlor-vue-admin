import { SET_SERVICES_MUTATION, SET_SERVICES_ERRORS_MUTATION, SET_SINGLE_SERVICE_MUTATION } from "../../storeConstants";

export default {
    [SET_SERVICES_MUTATION](state, payload) {
        state.services = payload
        state.errors = null
    },

    [SET_SERVICES_ERRORS_MUTATION](state, payload) {
        state.errors = payload
    },

    [SET_SINGLE_SERVICE_MUTATION](state, payload) {
        state.service = payload
    }
}
