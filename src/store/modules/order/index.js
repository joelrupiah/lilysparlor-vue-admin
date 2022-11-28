import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const order = {
  namespaced: true,
  state() {
    return {
      orders: [],
      order: {}
    }
  },
  mutations,
  getters,
  actions
}

export default order
