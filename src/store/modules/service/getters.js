import { GET_SERVICES_GETTER, GET_SINGLE_SERVICE_GETTER } from "../../storeConstants";

export default {
    [GET_SERVICES_GETTER]: (state) => {
        return state.services
    },

    [GET_SINGLE_SERVICE_GETTER]: (state) => {
      return state.service
    }
}
