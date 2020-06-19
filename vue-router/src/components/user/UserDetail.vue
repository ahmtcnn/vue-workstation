<template>
  <div class="container">
    <h3>User Detail Component</h3>
    <hr>
    <p>Kullancı ID bilgisi : {{ $route.params.id}} </p>
    <router-link
    tag="button"
    class="btn btn-primary"
    :to="{name : 'userEdit' ,params : { id : $route.params.id }, query : {name : 'Gokhan', lastname : 'Kandemir'}}">
    Kullanıcıyı Düzenle

    </router-link>
    <hr>
  </div>
</template>
<script>
  export default {
    //:to="'/user/'+ $route.params.id +'/edit'"
    //beforeEnter router için burada da yazılabilir!
  }
</script>
