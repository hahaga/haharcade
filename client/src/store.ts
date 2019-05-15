/* tslint:disable */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ctx: null,
  },
  mutations: {
    setContext(state, context) {
      state.ctx = context;
    }
  },
  actions: {

  },
});
