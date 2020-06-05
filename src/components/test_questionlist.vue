<template>
  <div class="questionlist_container">
    <b-card :title=' "Question Overview - " + currentQuestion.id'
      class='shadow-lg'
      >

      <b-card-text v-if='questions' class='grid-container' >
          

        <b-btn
          v-for='question in questions'
          :key='question.id'
          class='btn grid-item question_jumpbutton'
          :variant='getColorFromQuestion(question)'
          text-variant='dark'
          :pill='getActiveStatus(question)'
          size="sm"
          @click='changeToQuestion(question.id)'
          color='black'
          > {{ question.id }}</b-btn>
          <br>

      </b-card-text>


      <b-btn class='eval_cta' @click='emitEvaluateTest()' variant='outline-success'> Submit Test </b-btn>
      <br>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "test_questionlist",

  data: function () {
    return {
    }
  },

  props: {
    questions: Array,
    currentQuestion: Object,
  },

  methods: {

    changeToQuestion(qno){
      // save current question state
      this.$emit('update-question', this.currentQuestion.id)
      this.$emit('change-question', qno)
    },

    getActiveStatus( question ){
      // see if current question is active one
      if ( question.id == this.currentQuestion.id ){
        return true
      } else {
        return false
      }

    },

    emitEvaluateTest() {
      this.$emit('evaluate-test')
    },

    getColorFromQuestion(question){
      if ( question.eval ){
        // overrides everything else
        if ( question.selectedOption == 'X'){
          return "danger"
        } else {
          return "warning"
        }
      }
      else {
        // if answered, return success, else return dark
        if ( question.selectedOption == 'X' ){
          return "primary"
        }
        else if ( (question.selectedOption.charCodeAt(0)  >= 65)  && (question.selectedOption.charCodeAt(0)  <= 68)) 
        {
          return "success"
        }

      }
    }

  },

  mounted() {
    // this.questions = this.getTestQuestions(91)
  }
}
</script>

<style>


.grid-container{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(6vh, 2fr));
    grid-gap: 2px;
    padding: 1vw;
    font-size: 1vh;
}

.questionlist_container {
  padding: 3vh;
}

.question_jumpbutton{
    color: black;
    height:  fixed;
    font-size: 2vh;

}

.question_overview{
  padding: 3%;
  font-size: 1vw;
}

.eval_cta{
  width: 100%;
}

</style>
