<template>
  <b-container id='testcontainer'>
    <br>
    <div class='container'>
      <test_topbar 
        :startFlag.sync='startTest'
        :time='getTestTime'
        @time-expire='handleEvaluate'
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
          :totalQuestionsCount='getQuestionsCount'
          :showLArrow='showLArrow'
          :showRArrow='showRArrow'
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
      showRArrow: false,
      showLArrow: false,
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


    checkQuestionArrowStatus() {
      if ( Number(this.currentQuestion.id) == Number(this.countQuestions) ){
        // this is last question
        // ddisable right arrow and show left
        this.showRArrow = false
        this.showLArrow = true
      } else if ( Number(this.currentQuestion.id) == 1 ){

        if (  Number(this.currentQuestion.id) == Number(this.countQuestions) ){
          // only one question
          // TODO fix bug - only left arrow still somehow showing up
          this.showLArrow = false
          this.showRArrow = false
        } else {
          // this is first question
          // ddisable left arrow and show left
          this.showLArrow = false
          this.showRArrow = true
        }
      } else {
        // any question that's not any of the first, last or only one
        this.showLArrow = true
        this.showRArrow = true
      }
    },

    setQuestion(qno){
      // set to question 

      if ( this.instartup ){
        // set to question 1 without saving
        console.log("setting to ", qno)
        var newQuestion = this.getQuestionByNumber(qno)
        console.log(newQuestion)
        this.currentQuestion = newQuestion
        this.checkQuestionArrowStatus()
        return newQuestion
      } else {
        this.saveQuestion(this.currentQuestion.id)
        console.log("setting to ", qno)
        var OthernewQuestion = this.getQuestionByNumber(qno)
        console.log(OthernewQuestion)
        this.currentQuestion = OthernewQuestion
        this.checkQuestionArrowStatus()
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
    if ( !this.time || !this.countQuestions ){
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
}

</style>
