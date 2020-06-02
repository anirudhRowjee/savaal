import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    markingscheme: null,
    questions: null,
    answered: null,
    submitted_answerstring: null,
    correct_answerstring: null,
    timealotted: null,
    timetaken: null,
    totalmarks: null,
    studentmarks: null,


  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
