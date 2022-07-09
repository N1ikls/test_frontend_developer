import Vue from 'vue'
import Vuex, {Store} from 'vuex'
import menu from './modules/menu/index'
Vue.use(Vuex)

export default () =>  new Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    menu
  },
})
