import {
  createStore,
  createLogger,
} from 'vuex'
import admin from './modules/admin/index'
import auth from './modules/auth/index'
import role from './modules/spatie/roles/index'
import permission from './modules/spatie/permissions/index'
import category from './modules/category/index'
import proclass from './modules/class/index'
import product from './modules/product/index'
import service from './modules/service/index'
import order from './modules/order/index'
// import createPersistedState from "vuex-persistedstate"
// import VuexPersistence from 'vuex-persist'

// const debug = process.env.NODE_ENV !== 'production'

const store = createStore({
  modules: {
    admin,
    auth,
    role,
    permission,
    category,
    proclass,
    product,
    service,
    order
  },
  // plugins: [new VuexPersistence().plugin],
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
  // plugins: [createPersistedState()]
})

export default store
