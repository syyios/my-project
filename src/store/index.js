import Vue from "vue";
import Vuex from "vuex"
import countOptions from "./count"
import personOptions from "./person"

//应用插件Vuex
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions,
    }
})