import {
  createStore,
  createLogger,
} from 'vuex'
import auth from './modules/auth/index'
import role from './modules/spatie/roles/index'
import permission from './modules/spatie/permissions/index'
import category from './modules/category/index'
import proclass from './modules/class/index'
// import createPersistedState from "vuex-persistedstate"
// import VuexPersistence from 'vuex-persist'

// const debug = process.env.NODE_ENV !== 'production'

const store = createStore({
  modules: {
    auth,
    role,
    permission,
    category,
    proclass
  },
  // plugins: [new VuexPersistence().plugin],
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
  // plugins: [createPersistedState()]
})

export default store
