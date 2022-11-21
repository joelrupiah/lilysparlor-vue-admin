import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const service = {
  namespaced: true,
  state() {
    return {
      services: [],
      service: {},
      errors: null
    }
  },
  mutations,
  getters,
  actions
}

export default service
