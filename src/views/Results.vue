<template>
  <div>
    <b-container>
      <b-jumbotron
        bg-variant='white'
        >
        <b-card
          class='shadow-lg'
          header='Your Score'
          header-bg-variant="primary"
          header-text-variant='white'
          >
        <h1> {{ marks }} / {{ totalmarks }} </h1>
        </b-card>
        <br>
      <b-card
          v-if='corrected'
          header="REVIEW"
          class='shadow-lg'
          header-bg-variant="primary"
          header-text-variant="white"
        >
        <!-- What you got wrong -->
        <b-table 
          :items='corrected'
          hover
          responsive="true"
          sticky-header="true"
          />
      <b-btn
        variant='success'
        @click='handleRedirectToHome'
        class='again_cta'
        >
        Try One More!
      </b-btn>

      </b-card>
      </b-jumbotron>
    </b-container>
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
              'Your Answer': "NA",
            })
        } else {
          if ( submitted_ans == correct_ans ){
            this.marks += this.markingScheme.correct
            this.corrected.push({
              'Question #': flag+1,
              'Correct Answer': correct_ans.toUpperCase(),
              'Your Answer': submitted_ans.toUpperCase(),
              '_rowVariant': 'success'
            })
          } else {
            this.marks -= this.markingScheme.incorrect
            this.corrected.push({
              'Question #': flag+1,
              'Correct Answer': correct_ans.toUpperCase(),
              'Your Answer': submitted_ans.toUpperCase(),
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
  },
  created() {
    document.title = this.$route.meta.title;
  }

}
</script>

<style>
.again_cta{
  width: 100%;
}

</style>
