<template>
  <b-container id='testcontainer'>
    <br>
    <div class='container'>
      <test_topbar 
        :startFlag.sync='startTest'
        :time='time'
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
          />
      </b-col>



    </b-row>

  </b-container>
</template>

<script>

import test_topbar from '../components/test_topbar'
import test_questionbox from '../components/test_questionbox'
import test_questionlist from '../components/test_questionlist'


export default {

  name: "Test",

  components: {
    test_topbar,
    test_questionbox,
    test_questionlist
  },

  data: function() {
    return {
      startTest: true,
      questions: [],
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
      }
      else
      {
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

    generateAnswerString(){
      // generate answerstrings in evaluatable format
      var kvp = {}
      this.questions.map( q => {
        kvp.push({
          'id': q.id, 
          'choice': q.choice
        })
      })
      console.log(kvp)
      return kvp
    },

    // evaluator method
    evaluate(){
      console.log("EVALUATION PROCESS BEGINNING")
    }
  },


  mounted() {
    this.questions = this.getTestQuestions(90);
    console.log(this.questions)
    this.instartup = true;
    this.setQuestion(1);
    this.instartup = false;
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
  background-color: black;
}

</style>
