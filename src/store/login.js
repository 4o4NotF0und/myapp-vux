import {login} from '@/api/login'
export default {
  state: {
    isLogin: false
  },
  getters: {

  },
  actions: {
    getLoginState (loginState) {
      console.log(loginState)
      login((data) => { loginState.commit('changeLoginState', data) })
    }
  },
  mutations: {
    changeLoginState (state, data) {
      state.isLogin = data
    }
  }
}
