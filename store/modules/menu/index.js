export default {
  namespaced: true,
  state: {
    menu: [
      {
        link: '',
        title: 'dsadsa',
        description: 'dsaadaadas',
        price: 230,
      },
    ],
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
