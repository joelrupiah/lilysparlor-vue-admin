import { GET_CLASSES_GETTER, GET_SINGLE_CLASS_GETTER } from "../../storeConstants";

export default {
    [GET_CLASSES_GETTER]: (state) => {
        return state.proclasses
    },

    [GET_SINGLE_CLASS_GETTER]: (state) => {
      return state.proclass
    }
}
