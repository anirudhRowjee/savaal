<template>
  <div>
    <b-container>
      <b-jumbotron
        bg-variant='white'
        header='Results'
        >
        <br>
        <b-card
          class='shadow-lg'
          header='Your Score'
          header-bg-variant="primary"
          header-text-variant='white'
          >
          <h1><b> {{ marks }} / {{ totalmarks }} </b></h1>
        <br>
        <b-card-group deck>
          <b-card 
            title='Correct'>
            <h1><b>{{ correct_questions_count }} / {{ questions_count }}</b></h1>
          </b-card>
          <b-card 
            title='Attempted'>
            <h1><b>{{ attemped_questions_count }} / {{ questions_count }}</b></h1>
          </b-card>
          <b-card 
            title='Accuracy'>
            <h1><b>{{ accuracy_percentage }}%</b></h1>
          </b-card>
          <b-card 
            title='Avgerage Time per Question'>
            <h1><b>{{ avg_time_per_question }}s</b></h1>
          </b-card>
        </b-card-group>
        </b-card>
        <br>
      <b-card
          v-if='corrected'
          header="Review"
          class='shadow-lg'
          header-bg-variant="primary"
          header-text-variant="white"
        >
        <!-- What you got wrong -->
        <b-table 
          :items='corrected'
          :fields='table_fields'
          hover
          responsive="true"
          sticky-header="true"
          />
      <b-btn
        variant='success'
        @click='handleRedirectToHome'
        class='again_cta'
        >
        Try One More <font-awesome-icon icon='arrow-right' />
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
      totalTime: 0,
      corrected: [],
      sub_al: [],
      gen_al: [],
      questions_count: 0,
      attemped_questions_count: 0,
      correct_questions_count: 0,
      markingScheme: {},
      accuracy_percentage: '',
      avg_time_per_question: 0,
      log: [],
      log_compiled: {}, // log indexed by question number
      qrec: [],
      table_fields: [
        {
          key: 'Question #',
          sortable: true,
        },
        {
          key: 'Correct Answer',
          sortable: false,
        },
        {
          key: 'Your Answer',
          sortable: false,
        },
        {
          key: 'Time (seconds)',
          sortable: true,
        },

      ]
    }
  },

  methods: {
    ...mapMutations({

    }),

    setQuestionTimingRecords(log) {
      /* Accept a list of events identified primarily by question id, having 
       * timestamps for when the event happened. index events by question number
       */
      console.log("processing log", log)
      for(var i = 0; i < this.log.length; i++){

        var event = this.log[i]

        // check if the question number is in the compiled log
        console.log("setting timing record for event ", event)
        var index = String(event.id)
        console.log("index is ", index)

        if ( Object.keys(this.log_compiled).includes(index) ){
          console.log("event already in compiled log")
          // question already present in the compiled log
          this.log_compiled[index].eventList.push(event)
        } else {
          // add new object to compiled logs
          console.log("event not in compiled log")
          var tempEL = [event, ]
          this.log_compiled[index]= {
            'eventList': tempEL,
            'time': 0,
          }
        }

      }
    },

    getSecondsfromVector(vector){
      return 3600*parseInt(vector[0]) + 60*parseInt(vector[1]) + 1*parseInt(vector[2])
    },

    getSecondsDiff(timestamp1, timestamp2){
      var timeArray1 = timestamp1.split(':')
      var timeArray2 = timestamp2.split(':')
      var seconds1 = 0
      var seconds2 = 0
      if ( timeArray1.length == 3 && timeArray2.length == 3){
        seconds1 = this.getSecondsfromVector(timeArray1)
        seconds2 = this.getSecondsfromVector(timeArray2)

      } else {
        if ( timeArray1.length == 1){
          // timearray1 has only one element in raw seconds
          seconds1 = parseInt(timeArray1[0])
          seconds2 = this.getSecondsfromVector(timeArray2)
        } else {
          // timearray1 has only one element in raw seconds
          seconds2 = parseInt(timeArray2[0])
          seconds1 = this.getSecondsfromVector(timeArray1)
        }
      }
      return Math.abs(seconds1 - seconds2)
    },

    setTimeFromCompiledLog(){
      console.log("compiling time from logs")
      for( var i = 0; i < Object.keys(this.log_compiled).length+1; i++ ){
        // iterate through the compiled log
        console.log(i)
        var item = this.log_compiled[i+1] || null
        if ( item == null ){
          // question hasn't been visited at all so do nothing
        } else {
          console.log("consolidating time logs for ", item)
          var eventList = item.eventList
          for(var j = 0; j < eventList.length - 1; j += 2){
            var vectors = [eventList[j].time, eventList[j+1].time]
            console.log("gettings diffs for ", vectors)
            var diff = this.getSecondsDiff(vectors[0], vectors[1])
            this.log_compiled[i+1].time += diff
            console.log("adding time diff ", diff)
          }
        }
      }
      console.log("finished compiling time log")
    },

    getTimeForQuestion(q_no){
      var q_event = this.log_compiled[q_no] || null
      if ( q_event == null ){
        return 0
      } else {
        return q_event.time
      }
    },

    handleRedirectToHome(){
      this.$router.push('/')
    },

    getQuestionTableObject(q_no, correct_answer, user_answer, row_variant){
        var temp =  {
            'Question #': q_no,
            'Correct Answer': correct_answer,
            'Your Answer': user_answer,
            '_rowVariant': row_variant,
            'Time (seconds)': this.getTimeForQuestion(String(q_no))
        }
        this.qrec.push(temp)
        return temp
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
        
        // conditional eval loop

        if ( submitted_ans.toLowerCase() == 'x' ){
          this.marks += 0
          this.corrected.push(this.getQuestionTableObject(
            flag+1,
            correct_ans.toUpperCase(),
            "NA",
            'white',
          ))
        } else {
          // question has been attempted
          this.attemped_questions_count += 1
          if ( submitted_ans == correct_ans ){
            // question is correctly answered
            this.correct_questions_count += 1
            this.marks += this.markingScheme.correct
            this.corrected.push(this.getQuestionTableObject(
              flag+1,
              correct_ans.toUpperCase(),
              submitted_ans.toUpperCase(),
              'success',
            ))
          } else {
            // question is incorrectly answered
            this.marks -= this.markingScheme.incorrect
            this.corrected.push(this.getQuestionTableObject(
              flag+1,
              correct_ans.toUpperCase(),
              submitted_ans.toUpperCase(),
              'danger',
            ))
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
      getTotalMarks: 'getTotalMarks',
      getLog: 'getLog',
    }),

    accuracyPercentage(){
      return (this.correct_questions_count / this.attemped_questions_count ) * 100 || 0
    },

    avgTimePerQuestion(){
      console.log("calculating average time per question")
      var total = 0
      console.log(total)
      for ( var index in this.log_compiled ){
        var record = this.log_compiled[index]
        console.log(record)
        total += parseInt(record.time)
        console.log(total)
      }
      return (total / this.getNumberOfQuestions)
    }

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
      this.log = this.getLog
      this.setQuestionTimingRecords(this.log)
      this.setTimeFromCompiledLog()
      this.evaluate(this.sub_al, this.gen_al)
      this.accuracy_percentage = this.accuracyPercentage
      this.avg_time_per_question = this.avgTimePerQuestion
      window.scrollTo(0, 0)
      this.$ua.trackView('/results')
    } else {
      // invalid landing, redirect
      alert("Please Create a Test First!")
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
