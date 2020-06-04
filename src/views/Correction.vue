<template>
  <div>
    <b-container>
      <b-jumbotron 
        bg-variant='warning' 
        header='Correction'
        lead='Please Provide the answers as per the Answer Key!'
        >
        <b-form-group
          label='Please Enter the Codex'
          label-for='codex-input'
          >
          <b-input-group>
            <b-form-input
              placeholder='1-a 2-b 3-c 4-d 5-a 6-b .......'
              v-model='submitted_codex'
              />
              <b-input-group-append v-if='submitted_codex'>

                <b-btn 
                  variant='success'
                  @click='handleCodexSubmit'
                  >
                  Correct My Test!
                </b-btn>
              </b-input-group-append>
          </b-input-group>
        </b-form-group>

      </b-jumbotron>
      <b-card-group deck>
        <b-card title='What is Codex?'>
          Codex is the list of CORRECT answers to your questions in the test. Once you give us
          the codex, then we can evaluate your questions with your Marking Scheme of choice.
        </b-card>
        <b-card title='How do I make it?'>
          Take the Question Number and the Letter of the Correct Option and separate them with a
          dash. Then, for each question, separate it by a space.

          For Example, if your answer key is
          <pre>
1. A)
2. B)
3. C)
4. D)
5. A)
6. B)
          </pre>
          then the CODEX is 
          <code>1-a 2-b 3-c 4-d 5-a 6-b</code>.
        </b-card>
      </b-card-group>
    </b-container>
  </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Correction',
  data: function (){
    return {
      submitted_codex: '',
      generated_codex: '',
      score: '',
    }
  },
  methods: {
    ...mapMutations({
    setTotalMarks: 'setTotalMarks',
    setSubmittedAnswerString: 'setSubmittedAnswerString',
    setGeneratedAnswerString: 'setGeneratedAnswerString',
    }),

    sanitizeCodexString(codex){
      var newCodex = codex
        .trim()
        .split(' ')
        .map( x => x.toLowerCase().trim())
        .join(" ")
      return newCodex
    },

    validateCodex(codex){
      // sanitize and validate the codex
      var sanitized = this.sanitizeCodexString(codex)
      console.log("Sanitized ", sanitized)
      let re_validator = /([\d][-][a-dA-D])/g;

      var validatorArray = 
        sanitized
        .split(' ')
        .map(piece => {
            return piece.match(re_validator) || false
        })
        .map(e =>  !!e)
      return validatorArray.every(per => per == true) && validatorArray.length ==
        this.getQuestionsCount
    },

    getCodexFromQuestions(){
      var codexList = this.questions.map(q => {
        return `${q.id}-${q.selectedOption.toLowerCase()}`
      }).join(" ")
      console.log("Codex From List")
      console.log(codexList)
      return codexList
    },

    handleCodexSubmit(){
      console.log("Sanitizing Codex")
      this.submitted_codex = this.sanitizeCodexString(this.submitted_codex)
      console.log("Validating codex...")
      var validcodex = this.validateCodex(this.submitted_codex)
      if ( validcodex ){
        console.log("generated ", this.generated_codex)
        this.setSubmittedAnswerString(this.submitted_codex)
        this.setGeneratedAnswerString(this.generated_codex)
        this.$router.push('/results')
      } else {
        alert("Invalid Codex! Please Check Format and Question Numbers/Options")
      }
    }

  },
  computed: {
    ...mapGetters({
      getQuestions: 'getQuestions',
      getQuestionsCount: 'getQuestionsCount',
    })
  },

  mounted() {
    this.questions = this.getQuestions
    if ( this.questions && this.getQuestionsCount){
      console.log(this.questions)
      this.generated_codex = this.getCodexFromQuestions()
    } else {
      alert("Please Create A Test First!")
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
