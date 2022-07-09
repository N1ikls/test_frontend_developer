export default {
  namespaced: true,
  state: {
    menu: [],
    editing_element: null,
  },
  mutations: {
    set(state, [variable, value]) {
      state[variable] = value
    },
  },
  action: {},
  getters: {
    menu(state) {
      return state.menu
    },
  },
}
