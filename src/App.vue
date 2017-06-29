<template>
  <div id="app">
    <score @toscore="setscore"></score>
  </div>
</template>

<script>
import score from './components/score'
export default {
  name: 'app',
  data(){
    return{
      parameter:{}
    }
  },
  methods:{
    setscore(arr){
      this.parameter[arr[0]] = arr[1]
    }
  },
  components: {
    score
  }
}
</script>

<style>

</style>
