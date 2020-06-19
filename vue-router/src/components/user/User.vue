<template>
  <div class="container">

    <router-view></router-view>
    <button class="btn btn-success" @click="navigateToHome">Home Component</button>
    <hr>
  </div>
</template>
<script>
  export default {
    data (){
      return {
        id : this.$route.params.id
      }
    },
    methods : {
      navigateToHome(){
        //vue router a erişim
        // push ile routes.js deki tanımlardan birine gitmemizi sağlar
        // farklı yol var
        //this.$router.push("/")
        //this.$router.push({ path : '/'})
        // isimlendirilmis routelar
        this.$router.push({ name : 'indexPage'})

      }
    },
    watch : {
      "$route"(to, from){ //yeni route eski route gibi
        this.id = to.params.id
      }
    }
  }
</script>
