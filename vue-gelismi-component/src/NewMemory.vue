<template>
  <div>
      <p> Bu component NewMemory{{counter}}</p>
      <button @click="counter++" class="btn btn-primary">Artır</button>
      
  </div>
</template>
<script>

export default {
  // props : ['content'],

  data(){
      return {
          counter : 0,
      }
  },
  destroyed(){
      
  },
  activated(){
      console.log("activated");
  },
  deactivated(){
      console.log("deactivated")
  },
}
</script>
<style scoped>
  div {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px #666;
    padding: 20px 20px;
    margin-top: 20px;
  }
</style>
