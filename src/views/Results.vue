<template>
  <div>
    <b-container>
      <b-jumbotron
        bg-variant='info'
        header='Your Score'
        >
        <h1> {{ marks }} / {{ totalmarks }} </h1>
      </b-jumbotron>
      <b-card
          v-if='corrected'
          title="REVIEW"
        >
        <!-- What you got wrong -->
        <b-table 
          :items='corrected'
          hover
          />
      </b-card>
      <br>
      <b-btn
        variant='info'
        @click='handleRedirectToHome'
        >
        Try One More!
      </b-btn>
    </b-container>
        <br>
        <br>
        <br>
  </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex'

export default {
  name: "Results",

  data: function() {
    return {
      sub_as: '',
      gen_as: '',
      marks: 0,
      totalmarks: 0,
      corrected: [],
      sub_al: [],
      gen_al: [],
      questions_count: 0,
      markingScheme: {}
    }
  },

  methods: {
    ...mapMutations({

    }),

    handleRedirectToHome(){
      this.$router.push('/')
    },

    genListFromAS(as){
      return as.split(" ").map(e => e.split("-"))
    },

    evaluate( correct, answered ) {

      // force numerical type for markingscheme values
      this.markingScheme.correct = Number(this.markingScheme.correct)
      this.markingScheme.incorrect = Number(this.markingScheme.incorrect)

      console.log("Evaluating.. ")
      for ( var flag = 0; flag < this.questions_count; flag++ ){
        var correct_ans = correct[flag][1]
        var submitted_ans = answered[flag][1]
        if ( submitted_ans.toLowerCase() == 'x' ){
          this.marks += 0
            this.corrected.push({
              'Question #': flag+1,
              'Correct Answer': correct_ans.toUpperCase(),
              'You Answered': "NA",
            })
        } else {
          if ( submitted_ans == correct_ans ){
            this.marks += this.markingScheme.correct
            this.corrected.push({
              'Question #': flag+1,
              'Correct Answer': correct_ans.toUpperCase(),
              'You Answered': submitted_ans.toUpperCase(),
              '_rowVariant': 'success'
            })
          } else {
            this.marks -= this.markingScheme.incorrect
            this.corrected.push({
              'Question #': flag+1,
              'Correct Answer': correct_ans.toUpperCase(),
              'You Answered': submitted_ans.toUpperCase(),
              '_rowVariant': 'danger'
            })
          }
        }
      }
    }

  },

  computed: {
    ...mapGetters({
      get_generated_as: 'getGeneratedAnswerString',
      get_submitted_as: 'getSubmittedAnswerString',
      getQuestions: 'getQuestions',
      getNumberOfQuestions: 'getQuestionsCount',
      getMarkingScheme: 'getMarkingScheme',
      getTotalMarks: 'getTotalMarks'
    })

  },

  mounted() {
    this.sub_as = this.get_submitted_as
    this.gen_as = this.get_generated_as
    this.questions_count = this.getNumberOfQuestions
    this.markingScheme = this.getMarkingScheme
    this.totalmarks = this.getTotalMarks
    if ( this.sub_as && this.gen_as ){
      // this is a valid way to reach this page
      this.sub_al = this.genListFromAS(this.sub_as)
      this.gen_al = this.genListFromAS(this.gen_as)
      this.evaluate(this.sub_al, this.gen_al)
    } else {
      // invalid landing, redirect
      alert("Invalid")
      this.$router.push('/')
    }
  }

}
</script>

<style>

</style>
