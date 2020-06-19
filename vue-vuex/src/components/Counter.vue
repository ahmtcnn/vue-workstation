<template>
  <div>
    <button class="btn btn-success" @click="increaseCounter">+ Arttır</button>
    <button class="btn btn-danger" @click="decreaseCounter">- Azalt</button>
    <hr>
    <button class="btn btn-success" @click="increment">+ Arttır</button>
    <button class="btn btn-danger" @click="decrement">- Azalt</button>
    <hr>
    <button class="btn btn-success" @click="incrementAsync">+ Arttır</button>
    <button class="btn btn-danger" @click="decrementAsync">- Azalt</button>
  </div>
</template>

<script>
import {mapMutations, mapActions} from "vuex"
export default {

  methods : {
    ...mapMutations([
      'increaseCounter',
      'decreaseCounter',
    ]),
    ...mapActions([
      'increment',
      'decrement',
      'incrementAsync',
      'decrementAsync',

    ])
    // increment(){
    //   this.$store.dispatch("increment")
    // },
    // decrement(){
    //   this.$store.dispatch("decrement")
    // },
    // incrementasync(){
    //   this.$store.dispatch("incrementAsync")
    // },
    // decrementasync(){
    //   this.$store.dispatch("decrement")
    // }
  }
  // methods : {
  //   incrementCounter(){
  //     // this.$emit("counterEvent", 1);
  //     this.$store.commit("increaseCounter", 1)
  //   },
  //   decrementCounter(){
  //     // this.$emit("counterEvent", -1);
  //     this.$store.commit("decreaseCounter", 1)
  //   }
  // }
}
</script>

<style>
</style>
