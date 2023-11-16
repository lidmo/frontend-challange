// store/auth.js
import axios from 'axios'

export default {
  state: {
    token: null
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    logout(state) {
      state.token = null
    }
  },
  actions: {
    async login({ commit }, credentials) {
      const response = await axios.post(
        'https://challenge.lidmo.com.br/api/login',
        credentials
      )
      const { token } = response.data
      localStorage.setItem('tokenAuth', token)
      commit('setToken', token)
    },
    logout({ commit }) {
      localStorage.removeItem('tokenAuth')
      commit('logout')
    }
  }
}
