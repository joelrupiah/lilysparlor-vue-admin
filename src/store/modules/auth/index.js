import actions from './actions'
import getters from './getters'
import mutations  from './mutations'

const auth = {
    namespaced: true,
    state() {
        return {
            token: JSON.parse(localStorage.getItem('adminData')).token,
            id: JSON.parse(localStorage.getItem('adminData')).id,
            email: JSON.parse(localStorage.getItem('adminData')).email,
            name: JSON.parse(localStorage.getItem('adminData')).name,
            avatar: JSON.parse(localStorage.getItem('adminData')).avatar
        }
    },
    mutations,
    getters,
    actions
}

export default auth
