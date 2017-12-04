import Vue from "vue";
import Vuex from "vuex";
import logger from "vuex/dist/logger";
import mutations from "./mutations";
import getters from "./getters"
Vue.use(Vuex);

const state={
  cartList:localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):[]
};
export default new Vuex.Store({
    state,
    getters,
    mutations,
    strict:true,
    plugins:[logger()],
})
