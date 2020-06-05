<template>
  <div >
    <b-card no-body class='shadow-lg' id="topbar_container">
      <b-row>


        <b-col cols='12' id='timerbox' class='my-auto'>
          <b-card-body>
            <vue-countdown 
              @time-expire='handleExpire'
              :seconds='time'
              :start='startFlag'
              />
          </b-card-body>
        </b-col>


      </b-row>
    </b-card>

  </div>
</template>

<script>

/*

        <b-col cols='3' id='topbar_exit'  class='my-auto'>
            <b-btn variant='outline-danger' @click='emitExitFromTest'> Exit </b-btn>
        </b-col>
        <b-col cols='3'  id='topbar_submit'   class='my-auto'>
            <b-btn variant='outline-success' @click='emitEvaluateTest'> Done </b-btn>
        </b-col>

*/

import VueCountdown from '@dmaksimovic/vue-countdown'

export default {
  name: "test_topbar",

  props: [ 'startFlag', 'time' ],

  components: {
    'vue-countdown': VueCountdown,
  },

  data: function(){
    return {
      started: false,

    }
  },

  methods: {
    toggleTimer() {
      this.started = !this.started
    },
    handleExpire() {
      alert("Complete")
      this.$emit('time-expire')
    },
    emitEvaluateTest() {
      this.$emit('evaluate-test')
    },
    emitExitFromTest() {
        this.$emit('exit-test')
    }
  },
  // TODO add method to get time from the timer

}
</script>

<style>

#timerbox {
  font-size: 4vh;
  border: 0px solid black;
  border-radius: 1vw;
}


#topbar_submit{
}

#topbar_container{
  border: none;
  background-color: white;
}

</style>
