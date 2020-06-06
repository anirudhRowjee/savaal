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
          text-variant='white'
          :pill='getActiveStatus(question)'
          size="sm"
          @click='changeToQuestion(question.id)'
          color='white'
          > {{ question.id }}</b-btn>
          <br>

      </b-card-text>


      <b-btn class='eval_cta' @click='emitEvaluateTest()' variant='success'> 
        Finish Test <font-awesome-icon icon='paper-plane' />
      </b-btn>
      <br>
      <b-dropdown style='width:100%' text='What Are The Colors?' size='sm' variant='outline-dark'>
        <b-dropdown-item variant='success'> Answered </b-dropdown-item>
        <b-dropdown-item variant='primary'> Not Answered </b-dropdown-item>
        <b-dropdown-item variant='warning'> Answered and Marked for Evaluation</b-dropdown-item>
        <b-dropdown-item variant='danger'> Not Answered and Marked for Evaluation</b-dropdown-item>
      </b-dropdown>
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
      var answer = confirm("Send for Evaluation?")
      if( answer ){
        this.$emit('evaluate-test')
      } else {
        // 
      }
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
