import Vue from 'vue'
// import Vuex from 'vuex'
import Vuex, {Store} from 'vuex'

import login from './login'

Vue.use(Vuex)

const store = new Store({
  modules: {
    login
  }
})

export default store
