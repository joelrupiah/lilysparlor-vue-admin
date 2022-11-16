import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const product = {
  namespaced: true,
  state() {
    return {
      products: [],
      product: {},
      errors: null
    }
  },
  mutations,
  getters,
  actions
}

export default product
