<template>
  <div>

    <b-container>
      <b-jumbotron 
        header='Savaal (Question)'
        lead='Computer Based Test at Home In 3 Easy Steps'
        bg-variant='success'
        >
        <b-card-group deck>
          <b-card header='Step 1'>
            <strong>
              Keep your Question Paper Ready
            </strong>

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
              <b-form-group 
                :label='getMarkingSchemeLabel()'
                label-for='start-cta-button'
                v-if='test.markingScheme.correct && test.markingScheme.incorrect'
                >
                <b-btn id='start-cta-button' @click='submitTest' variant='success'> Let's Go Practice! </b-btn>
              </b-form-group>


          </b-card>
          <b-card>
            <strong>
              2. Write the test!
            </strong>
          </b-card>
          <b-card>
            <strong>
              3. Enter all the Answers per the Answer Key, and Sit Back - we will tell you your score
              immediately!
            </strong>
          </b-card>
        </b-card-group>
      </b-jumbotron>
      <b-row>
        <b-col sm text-center>
          <b-card-body>
            <!--Form Configurator for Marking Scheme -->
            <b-form>
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
              </b-form>

          </b-card-body>
        </b-col>
        <b-col sm>
          <!--Choose Other Details -->
          <b-card-body>
            <b-form class='b-card-body'>
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
              <b-form-group 
                :label='getMarkingSchemeLabel()'
                label-for='start-cta-button'
                v-if='test.markingScheme.correct && test.markingScheme.incorrect'
                >
                <b-btn id='start-cta-button' @click='submitTest' variant='success'> Let's Go Practice! </b-btn>
              </b-form-group>
              </b-form>
          </b-card-body>
        </b-col>
        <br>
      </b-row>
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
</style>
