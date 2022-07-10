
import { set } from 'vue'
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
    setPush(state, value) {
      state.menu.push(value)
    },
    setMenu(state, [variable, id, value]) {
      state.menu.forEach((elem, index) => {
        if (elem.id === id) set(state.menu[index], variable, value)
      })
    },
  },
  actions: {
    getlocalStorage({ commit }) {
      const items = JSON.parse(localStorage.getItem('menu')) || []
      commit('set', ['menu', items])
    },
    updateLocalStorage({ state }) {
      localStorage.setItem('menu', JSON.stringify(state.menu))
    },
  },
  getters: {
    menu(state) {
      return state.menu
    },
  },
}
