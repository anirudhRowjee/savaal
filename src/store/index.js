import Vue from 'vue'
import Vuex from 'vuex'

import markingschemes from '@/assets/markingschemes.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    test :{
      markingscheme: null,
      timealotted: null,
      count_questions: null,

      questions: [],

      submitted_answerstring: null,
      generated_answerstring: null,

      timetaken: null,
      totalmarks: null,
      studentmarks: null,
    },

    global_markingSchemes: markingschemes

  },
  mutations: {
    setMarkingScheme(state, newMarkingScheme){
      state.test.markingscheme = newMarkingScheme
    },
    setCountQuestions(state, count){
      state.test.count_questions = count
    },
    setAlottedTime(state, time_minutes){
      // time in minutes here, convert to seconds to work
      state.test.timealotted = time_minutes * 60
    },
    setTotalMarks(state){
      state.test.totalmarks = state.test.markingscheme.correct * state.test.count_questions
    },
    setSubmittedAnswerString(state, sas){
      state.test.submitted_answerstring = sas
    },
    setGeneratedAnswerString(state, sas){
      state.test.generated_answerstring = sas
    },
    setQuestions(state, questions){
      state.test.questions = questions
    }
  },
  actions: {

    evaluate(){
      // function to evaluate the test
      return 
    }
  },
  modules: {
  },
  getters: {
    getMarkingSchemes(state){
      return state.global_markingSchemes
    },
    getMarkingScheme(state){
      return state.test.markingscheme
    },
    getTestTime(state){
      return state.test.timealotted
    },
    getQuestionsCount(state){
      return state.test.count_questions
    },
    getQuestions(state){
      return state.test.questions
    },
    getTotalMarks(state){
      return state.test.totalmarks
    },
    getSubmittedAnswerString(state){
      return state.test.submitted_answerstring
    },
    getGeneratedAnswerString(state){
      return state.test.generated_answerstring
    }
  }
})
