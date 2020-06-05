<template>
  <div>
    <b-container>
      <b-jumbotron 
        bg-variant='white' 
        header='Answers'
        >
        <b-card
          header='Please Provide the answers as per the Answer Key!'
          header-bg-variant='primary'
          header-text-variant='white'
          class='shadow-lg'
          >
          <b-card-text class='list-staggered' >
            <!-- Updated UI for answer selection  -->
            <b-row
              :key='q.id' 
              v-for='q in qlist'
              :id=' "choice_parent_" + q.id '
              :label='q.id'
              :label-for='"choice_" + q.id'
              class='grid-item ansbox'
              >
              <b-form-radio-group 
                buttons
                button-variant='outline-primary'
                size='md'
                v-model='qlist[q.id - 1].selectedOption'
                :id='"choice_"+q.id'
                :options='options'
                required
                @input='allAnswersMarked()'
                >
                <template v-slot:first>
                  <b-button
                    variant='primary'
                    > 
                    {{ q.id }} 
                  </b-button>
                </template>
              </b-form-radio-group>
            </b-row>
          </b-card-text>
          <b-btn variant='success' @click='handleCodexSubmit'  block v-if="allAnswersMarkedFlag"> Correct My Test </b-btn>
        </b-card>
      </b-jumbotron>
    </b-container>
  </div>
</template>

<script>
/*
        <b-form-group
          label='Please Enter the Codex'
          label-for='codex-input'
          >
          <b-input-group>
            <b-form-input
              placeholder='1-a 2-b 3-c 4-d 5-a 6-b .......'
              v-model='submitted_codex'
              class='shadow-lg'
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



      <b-card-group deck>
        <b-card 
          header='What is Codex?' 
          header-bg-variant='primary'
          header-text-variant='white'

          class='shadow-lg'>
          Codex is the list of CORRECT answers to your questions in the test. Once you give us
          the codex, then we can evaluate your questions with your Marking Scheme of choice.
        </b-card>
        <b-card header='How do I make it?'
          header-bg-variant='primary'
          header-text-variant='white'
                class='shadow-lg'>
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
*/
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Correction',
  data: function (){
    return {
      submitted_codex: '',
      generated_codex: '',
      score: '',
      qlist: '',
      options: ['A', 'B', 'C', 'D'],
      allAnswersMarkedFlag: false,
    }
  },
  methods: {
    ...mapMutations({
    setTotalMarks: 'setTotalMarks',
    setSubmittedAnswerString: 'setSubmittedAnswerString',
    setGeneratedAnswerString: 'setGeneratedAnswerString',
    }),

    allAnswersMarked(){
      this.allAnswersMarkedFlag =  this.qlist.every(record => {
        return !(record.selectedOption == 'X')
      })
    },

    sanitizeCodexString(codex){
      var newCodex = codex
        .trim()
        .split(' ')
        .map( x => x.toLowerCase().trim())
        .join(" ")
      return newCodex
    },

    generaterAnswerList(length){
      var finalist = []
      for ( var i = 1; i < length+1; i++ ){
        finalist.push({
          'id': i,
          'selectedOption': "X",
        })
      }
      return finalist
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

    getCodexFromList(list){
      var codexList = list.map(q => {
        return `${q.id}-${q.selectedOption.toLowerCase()}`
      }).join(" ")
      console.log("Codex From List")
      console.log(codexList)
      return codexList
    },

    handleCodexSubmit(){
      console.log("Sanitizing Codex")
      this.submitted_codex = this.getCodexFromList(this.qlist)
      console.log("generated ", this.generated_codex)
      this.setSubmittedAnswerString(this.submitted_codex)
      this.setGeneratedAnswerString(this.generated_codex)
      this.$router.push('/results')
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
      this.qlist = this.generaterAnswerList(Number(this.getQuestionsCount))
      console.log(this.qlist)
    } else {
      alert("Please Create A Test First!")
      this.$router.push('/')
    }
  },
  created(){
    document.title = this.$route.meta.title;
  }
}
</script>

<style>

.grid-container{
    display: grid;
    grid-gap: 2vw;
}

.list-staggered{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(29vh, 5fr));
  grid-gap: 1vh;
}

.ansbox{
  padding: 2vh;
  width: fixed;
}

</style>
