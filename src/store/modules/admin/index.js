import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const admin = {
  namespaced: true,
  state() {
    return {
      admins: [],
      admin: {}
    }
  },
  mutations,
  getters,
  actions
}

export default admin
