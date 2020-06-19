<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <br>
        <button @click="selectedComponent = 'appMemory'" class="btn btn-sm btn-primary">Memory</button>
        <button @click="selectedComponent = 'appNewMemory'" class="btn btn-sm btn-primary">NewMemory</button>
        <p>{{selectedComponent}}</p>

        <keep-alive>
        <component
        :is=selectedComponent
        ></component>
        </keep-alive>

      </div>
    </div>
  </div>
</template>

<script>
  import Memory from "./Memory";
  import NewMemory from "./NewMemory";

  export default {

    data(){
      return {
        selectedComponent : "appMemory"
      }
    },
    components : {
      appMemory : Memory,
      appNewMemory : NewMemory,

    }
  }
</script>
