import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const proclass = {
  namespaced: true,
  state() {
    return {
      proclasses: [],
      proclass: {},
      errors: null
    }
  },
  mutations,
  getters,
  actions
}

export default proclass
