<template>
  <div>
    <p class="counter-container"> Sayaç : {{ counter }}</p>
  </div>
</template>
<script>
  export default {
    // props : ["counter"],
    // methods : {
    //   counters(){
    //    return this.$store.state.counter
    //   }
    // },
    computed :{
      counter(){
        return this.$store.getters.getDoubleCounter
      }
    }

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
