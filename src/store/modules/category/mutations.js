import { SET_CATEGORIES_MUTATION } from "../../storeConstants";

export default {
    [SET_CATEGORIES_MUTATION](state, payload){
        state.categories = payload
    }
}
