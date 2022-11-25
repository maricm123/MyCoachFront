import { createStore } from 'vuex'

export default createStore({
  getters: {
    // isAuthenticated (state) {
    //   return state.user
    // },
    // clientAuth: state => state.user.is_client === "True",
    coachAuth: state => state.is_coach

  },
  state: {
    isLoading: false,
    isAuthenticated: false,
    token: '',
    // refresh: '',
    is_coach: false

  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token')
        state.is_coach = localStorage.getItem('is_coach')
        state.isAuthenticated = true
      } else {
        state.token = ''
        state.isAuthenticated = false
      }
    },
    setIsLoading(state, status) {
      state.isLoading = status
    },
    setToken(state, token) {
      state.token = token
      state.isAuthenticated = true
    },
    removeToken(state) {
      state.token = ''
      state.is_coach = ''
      state.isAuthenticated = false
    },
    setCoach(state, is_coach) {
      console.log(state, is_coach)
      state.is_coach = is_coach
    }
  },
  actions: {
  },
  modules: {
  }
})
