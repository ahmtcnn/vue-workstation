<template>
  <div class="container">
    <h3>User Edit Component</h3>
    <hr>
    <p>
      Ad : {{$route.query.name}}
    </p>
    <p>
      Soyad : {{$route.query.lastname}}
    </p>
    <div style="height: 800px;"></div>
    <p id="myid">this is my paragrapgh</p>
  </div>
</template>
<script>
  export default {}
</script>
