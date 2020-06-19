<template>
  <div>
    <p class="counter-container"> Sayaç : {{ getDoubleCounter }}</p>
    <p class="counter-container"> Tık : {{ stringCounter }}</p>
    <input type="text" v-model="value">
    <p> {{value}}</p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

  export default {
    // props : ["counter"],
    // methods : {
    //   counters(){
    //    return this.$store.state.counter
    //   }
    // },
    computed : {
    ...mapGetters([
      'getDoubleCounter',
      'stringCounter'
    ]),
    //computed un böyle bir özelliği var. Object oluşturarak yaptık.
      value : {
        get(){
            return this.$store.getters.getValue
        },
        set(){
            this.$store.dispatch("setValueData", event.target.value)
        }
    }
  },
  methods : {
    setValue(event){
      this.$store.dispatch("setValueData", event.target.value)
    }
  }    // {
    //   counter(){
    //     return this.$store.getters.getDoubleCounter
    //   },
    //   stringCounter(){
    //     return this.$store.getters.stringCounter
    //   }
    // }

  }

</script>
<style scoped>
  .counter-container{
    border: 1px solid #aa7f08;
    padding: 10px 5px;
    background-color: #fbbd08;
    font-size: 20px;
    color: #000;
  }
</style>
