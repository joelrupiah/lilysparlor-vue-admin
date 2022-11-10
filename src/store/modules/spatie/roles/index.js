import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const role = {
  namespaced: true,
  state() {
    return {
      name: ''
    }
  },
  actions,
  mutations,
  getters
}

export default roles
