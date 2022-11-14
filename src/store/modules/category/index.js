import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const category = {
  namespaced: true,
  state() {
    return {
      categories: [],
      category: {},
      errors: null
    }
  },
  mutations,
  getters,
  actions
}

export default category
