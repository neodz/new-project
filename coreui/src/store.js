import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  sidebarShow: 'responsive',
  sidebarMinimize: false,
  auth : null
}

const mutations = {
  toggleSidebarDesktop (state) {
    const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarOpened ? false : 'responsive'
  },
  toggleSidebarMobile (state) {
    const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarClosed ? true : 'responsive'
  },
  set (state, [variable, value]) {
    state[variable] = value
  }
};

const getters = {
  getAuth ( state )  {
    return state.auth;
  }


};

const actions = {
  
  _setAuth  ({commit} , auth )  {
      commit('set' , ['auth',auth]);
  }
};


export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})