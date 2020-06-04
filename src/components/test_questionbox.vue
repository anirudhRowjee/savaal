<template>
  <div class="questionbox_container">
    <b-card title='Question' >
      {{ currentQuestion.id }}
      <b-card-text>
        Choose The Correct Option
      </b-card-text>

      <b-card-text>
        <b-form-radio-group 
          buttons
          button-variant='outline-danger'
          size='lg'
          v-model='currentQuestion.selectedOption'
          :options='options'
          ></b-form-radio-group>
      </b-card-text>


        <b-btn-group >
          <b-btn v-show='showLArrow' @click='updateQuestion("p")' variant='outline-primary'> <font-awesome-icon icon='arrow-left' />  </b-btn>
          <b-btn v-if='isQuestionChecked()' @click='clearChoices()' variant='outline-primary'> Clear </b-btn>
          <b-btn @click='markForEvaluation()' :variant='evalButtonStatus()'> Mark For Evaluation </b-btn>
          <b-btn v-show='showRArrow' @click='updateQuestion("f")' variant='outline-primary'> <font-awesome-icon icon='arrow-right' /> </b-btn>
        </b-btn-group>

      <br>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "test_questionbox",

  props: [
    'currentQuestion',
    'totalQuestionsCount',
    'showLArrow',
    'showRArrow'
  ],

  data: function () {
    return {
      options: ['A', 'B', 'C', 'D'],
    }
  },

  methods: {


    isQuestionChecked(){
      return this.currentQuestion.selectedOption != 'X'
    },

    evalButtonStatus(){
      if ( this.currentQuestion.eval ){
        return "primary"
      } else {
        return "outline-primary"
      }
    },

    clearChoices(){
      this.currentQuestion.selectedOption = 'X'
    },

    markForEvaluation(){
      this.currentQuestion.eval = !this.currentQuestion.eval
    },

    updateQuestion(way){
      this.$emit('update-question', this.currentQuestion)
      var newid = 0;
      if ( way == 'f'){
        // go forward
        newid = this.currentQuestion.id + 1
      } else {
        // go backward
        newid = this.currentQuestion.id - 1
      }
      this.$emit('change-question', newid)
    }

  },
}
</script>

<style>
.questionbox_container {
  padding: 3vh;
}

</style>
