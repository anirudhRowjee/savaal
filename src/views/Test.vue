<template>
  <b-container id='testcontainer'>
    <br>
    <div class='container'>
      <test_topbar 
        :startFlag.sync='startTest'
        :time='getTestTime'
        @complete='handleEvaluate'
        @evaluate-test='handleEvaluate' 
        @exit-test='handleExit'
        />
    </div>

    <br> 
    <b-row fluid class='question_row'>

      <b-col sm   id='questionbox_parent'>
        <test_questionbox
          :currentQuestion.sync='currentQuestion'
          @change-question='setQuestion'
          @update-question='handleUpdateQuestion'
          />
      </b-col>

      <br>

      <b-col sm id='questionlist_parent'>
        <test_questionlist 
          :questions.sync='questions'
          @change-question='setQuestion'
          :currentQuestion.sync='currentQuestion'
          @evaluate-test='handleEvaluate'
          />
      </b-col>



    </b-row>

  </b-container>
</template>

<script>

import test_topbar from '../components/test_topbar'
import test_questionbox from '../components/test_questionbox'
import test_questionlist from '../components/test_questionlist'

import { mapGetters, mapMutations } from 'vuex'


export default {

  name: "Test",

  components: {
    test_topbar,
    test_questionbox,
    test_questionlist
  },

  data: function() {
    return {
      startTest: false,
      questions: [],
      countQuestions: 90,
      toggleTestVisibility: false,
      time: 180,
      currentQuestion: {
        id: '',
        selectedOption: '',
        eval: ''
      },
      instartup: false,

    }
  },

  methods: {

    ...mapMutations({
      setQuestions: 'setQuestions',
      setTotalMarks: 'setTotalMarks',
    }),

    getTestQuestions(limit) {
      var flag = 1;
      var questions  = [];

      while ( flag < (limit + 1)){
        questions.push({
          'id': flag, 
          'selectedOption':'X',
          'eval': false,
        })
        flag = flag + 1
      }

      console.log("genereated Questions")
      return questions;
    },

    getQuestionByNumber(number){
      var question = this.questions.filter( q => q.id == number)[0]
      console.log(question)
      return question
    },

    saveQuestion(qno){
      // save the current question to the list
      console.log("saving ", qno)
    },

    setQuestion(qno){
      // set to question 

      if ( this.instartup ){
        // set to question 1 without saving
        console.log("setting to ", qno)
        var newQuestion = this.getQuestionByNumber(qno)
        console.log(newQuestion)
        this.currentQuestion = newQuestion
        return newQuestion
      } else {
        this.saveQuestion(this.currentQuestion.id)
        console.log("setting to ", qno)
        var OthernewQuestion = this.getQuestionByNumber(qno)
        console.log(OthernewQuestion)
        this.currentQuestion = OthernewQuestion
        return OthernewQuestion
      }
    },

    handleUpdateQuestion( e ){
      console.log("updating question ", e)
      this.questions[e].selectedOption = this.currentQuestion.selectedOption
      this.questions[e].eval = this.currentQuestion.eval

    },

    // evaluator method
    handleEvaluate(){
      console.log("EVALUATION PROCESS BEGINNING")
      console.log("saving questions to state")
      this.setQuestions(this.questions)
      console.log("reading questions from state")
      console.log(this.getQuestions)
      this.$router.push('/correction')
    },

    handleExit(){
      var c = confirm("Do You Really Want to Exit?")
      if ( c == true ){
        console.log("Exiting ...")
        this.$router.push('/')
      } else {
        alert("get back!")
      }
    },

    startTestLoop(){
      var choice = confirm("Do You Want to Start the Test?")
      if ( choice ){
        this.toggleTestVisibility = true
        this.startTest = true
      } else {
        alert("Exiting..")
        this.handleExit()
      }
    },
  },

  computed: {
    ...mapGetters({
      getTestTime: 'getTestTime',
      getQuestionsCount: 'getQuestionsCount',
      getMarkingScheme: 'getMarkingScheme',
      getQuestions: 'getQuestions',
    }),
  },

  mounted() {
    // first check if the page has been accessed only after making the test (route guard)
    this.countQuestions = this.getQuestionsCount
    this.time = this.getTestTime
    if ( this.time == null || this.countQuestions == null ){
      alert("Please Create a Test First")
      this.$router.push('/')
    } else {
      this.questions = this.getTestQuestions(Number(this.countQuestions));
      console.log(this.questions)
      this.startTestLoop()
      this.instartup = true;
      this.setQuestion(1);
      this.instartup = false;
      this.setTotalMarks()
    }
  }

}
</script>

<style>

.question_row {
  font-size: 5vh;
}

b-col {
  padding: 3vw;
}

#testcontainer{
  background-color: white;
}

</style>
