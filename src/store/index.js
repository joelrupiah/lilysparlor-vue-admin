import { createStore, createLogger, } from 'vuex'
import admin from './modules/admin'
import auth from './modules/auth/index'
// import createPersistedState from "vuex-persistedstate"
import VuexPersistence from 'vuex-persist'

// const debug = process.env.NODE_ENV !== 'production'

const store = createStore({
  modules: {
    auth,
    admin,
  },
  plugins: [new VuexPersistence().plugin],
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
  // plugins: [createPersistedState()]
})

export default store