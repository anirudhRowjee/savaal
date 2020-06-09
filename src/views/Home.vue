<template>
  <div class='parent'>

    <b-container>
      <b-jumbotron 
        header='Savaal'
        bg-variant='white'
        >
        <template slot:lead>
          <h3> Free Computer Based Test Experience at Home In <b><i> 3 easy steps </i></b></h3>
          <br>
        </template>
        <b-card-group deck>
          <b-card 
            header-text-variant='white'
            header-bg-variant='primary'
            header='Step 1'
            class='shadow-lg'
            >
            <strong>
              Keep your Question Paper and Answer Key Ready
            </strong>
            <br>
            <font-awesome-icon icon='book' />
            <hr>

              <b-form-group
                label='Select a Marking Scheme'
                label-for='markingschemeselector'
                >
                <b-form-select @change='handleSelect' id='markingschemeselector' v-if='globalmarkingschemes' v-model='test.getMarkingScheme' >
                  <b-form-select-option 
                    v-for='ms in globalmarkingschemes'
                    :key='ms.name'
                    :value='ms.name'
                    >
                    {{ ms.name }}
                  </b-form-select-option>
                    <b-form-select-option value='custom' @select='changeReadonlyStatus(false)'
                                          @click ='changeReadonlyStatus(false)' selected>
                      Custom
                    </b-form-select-option>
                </b-form-select>
              </b-form-group>

              <b-form-group
                label='Marks for Correct Answer'
                label-for='correctmarks_input'
                v-if='msSelected'
                >
                <b-input-group id='correctmarks_input' prepend='Add' append='Marks'>
                  <b-form-input 
                    required 
                    placeholder='Marks for Correct Answer ( Eg 1, 4 )' 
                    type='number'
                    min=0
                    :readonly='msEditable'
                    v-model=test.markingScheme.correct
                    />
                </b-input-group>
              </b-form-group>
              <b-form-group label='Marks Deducted for incorrect answer'
                            label-for='incorrectmarks_input'
                            v-if='msSelected'
                            >
                <b-input-group d='incorrectmarks_input' prepend='Remove' append='Marks'>
                  <b-form-input 
                    required 
                    placeholder='Marks for incorrect Answer ( Eg 1, 4 )' 
                    type='number'
                    min=0
                    :readonly='msEditable'
                    v-model='test.markingScheme.incorrect'
                    />
                </b-input-group>
              </b-form-group>

          </b-card>
          <b-card
            header='Step 2'
            v-if='msSelected'
            header-text-variant='white'
            header-bg-variant='primary'
            class='shadow-lg'
            >
            <strong>
              Add Some more Details about the test
            </strong>
            <br>
            <font-awesome-icon icon='pencil-alt' />
            <hr>
              <b-form-group label='Number of Quesitons to Ace' label-for='nq-input'>
                <b-form-input 
                  required 
                  type='number' 
                  min=0
                  id='nq-input' 
                  placeholder="How Many Questions?" 
                  v-model='test.n_questions'
                  />
              </b-form-group>
              <b-form-group label='How Many Minutes for the Test?' label-for='tq-input'>
                <b-form-input 
                  required  
                  type='number' 
                  id='tq-input' 
                  placeholder="How Many Minutes?" 
                  min=0
                  v-model='test.time'
                  />
              </b-form-group>
          </b-card>

          <b-card
            header='Step 3'
            header-text-variant='white'
            v-if='test.time && test.n_questions'
            header-bg-variant='primary'
            class='shadow-lg'
            >
            <strong>
              You can now write the test. All the best!
            </strong>
            <br>
            <font-awesome-icon icon='trophy' />
            <br>
            <span style='background-color: pink'> Savaal does not provide any questions. </span>
            <br>
            <hr>

              <b-form-group 
                :label='getMarkingSchemeLabel()'
                label-for='start-cta-button'
                v-if='test.markingScheme.correct >= 0 && test.markingScheme.incorrect >= 0'
                >
                <b-btn id='start-cta-button' @click='submitTest' variant='success'> Let's Go
                  Practice <font-awesome-icon icon='arrow-right' /> </b-btn>
              </b-form-group>


          </b-card>
        </b-card-group>
      </b-jumbotron>
    </b-container>
  </div>
</template>


<script>

import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Home',

  components: {
  },

  data: function() {
    return {
      test: {
        time: null,
        n_questions: null,
        markingScheme: {
          correct: null,
          incorrect: null
        }
      },
      globalmarkingschemes: [],
      msEditable: true,
      msSelected: false,
    }
  },

  methods: {
    // TODO add method to set all data to store
    ...mapMutations({
      setMarkingScheme: 'setMarkingScheme',
      setAlottedTime: 'setAlottedTime',
      setCountQuestions: 'setCountQuestions',
    }),
    submitTest(){
      console.log(
        this.test.time, this.test.n_questions, this.test.markingScheme
      )
      this.setMarkingScheme(this.test.markingScheme)
      this.setAlottedTime(this.test.time)
      this.setCountQuestions(this.test.n_questions)
      this.$router.push('/test')
    },

    changeReadonlyStatus(status){
      this.msEditable = status
    },

    getMarkingSchemeLabel(){
      return `Marking Scheme (+${this.test.markingScheme.correct},
      -${this.test.markingScheme.incorrect})`
    },

    getMarkingSchemeByLabel(label){
      return this.globalmarkingschemes.filter(ms => ms.name == label)[0]
    },

    handleSelect(id){
      console.log(id)
      if (id == 'custom' ){
        // custom - allow editable field
        this.msSelected = true
        this.test.markingScheme.correct = 0
        this.test.markingScheme.incorrect = 0
        this.changeReadonlyStatus(false)
      } else {
        var localMSCopy = this.getMarkingSchemeByLabel(id)
        // console.log(localMSCopy)
        this.msSelected = true
        this.test.markingScheme.correct = localMSCopy.correct
        this.test.markingScheme.incorrect = localMSCopy.incorrect
        this.changeReadonlyStatus(true)
      }
    },

    throwToEval(){

    }

  },

  computed: {
    ...mapGetters([
      'getMarkingSchemes'
    ])
  },

  mounted() {
    // set marking scheme options from persistent state
    this.globalmarkingschemes = this.getMarkingSchemes.markingschemes
    window.scrollTo(0, 0)
    this.$ua.trackView('/')
  },
  created(){
    document.title = this.$route.meta.title;
  }
}
</script>

<style>
.cta-header {
  text-align: center;
}

b-col {
  padding: 2vw;
}

#start-cta-button {
  width: 100%;
}
.footer {
  flex-shrink: 0;
  text-align: center;
}
</style>
