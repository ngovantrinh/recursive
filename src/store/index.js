import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    data: "heheh",
  },
  getters: {
    // something here
    listRoom: (state) => state.data,
  },
  mutations: {
    // something here
    pullData(state, params) {
      state.data = JSON.parse(JSON.stringify(params));
    },
  },
  actions: {
    // something here
    getData({ commit }, params) {
      commit("pullData", params);
    },
  },
});
