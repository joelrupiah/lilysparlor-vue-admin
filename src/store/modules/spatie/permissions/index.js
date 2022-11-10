import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const permission = {
  state() {
    return {
      name: ''
    }
  },
  actions,
  mutations,
  getters
}

export default permission
