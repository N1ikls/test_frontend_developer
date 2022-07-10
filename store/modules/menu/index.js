import { set } from 'vue'
export default {
  namespaced: true,
  state: {
    menu: [],
    values_form: {
      title: '',
      link: '',
      price: '',
      description: '',
    },
    editing_element: null,
  },
  mutations: {
    set(state, [variable, value]) {
      state[variable] = value
    },
    setPush(state, value) {
      state.menu.push(value)
    },
    setValuesForm(state, [variable, value]) {
      state.values_form[variable] = value
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
    values_form(state) {
      return state.values_form
    },
    validateCard(state) {
      if (
        state.values_form.title &&
        state.values_form.link &&
        state.values_form.price
      ) {
        return false
      } else {
        return true
      }
    },
    validateMenu: (getters) => (value) => {
      const menu = getters.menu.forEach((i) => {
        if (i[`${value}`] === '') {
          return true
        }
      })
      return menu
    },
  },
}
