<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Vue-Resource</h3>
        <div class="form-group">
          <input type="text" class="form-control" v-model="userName">
        </div>
        <button class="btn btn-primary" @click="saveUser">Kaydet</button>
        <button class="btn btn-success" @click="getUsers">Verileri Getir</button>
        <hr>

        <ul class="list-group">
          <li class="list-group-item" v-for="user in userList" :key="user.userName">
            <span>{{user.data.userName}}</span>
            <button class="btn btn-danger" @click="deleteUser(user.key)">Sil</button>
            
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data(){
    return{
      userName : null,
      userList : [],
      resource : {},
    }
  },

  methods : {
    deleteUser(userKey){
        this.$http.delete("users/"+userKey +".json")
        .then((response ) => {
            console.log(response)
        })

    },
    saveUser(){
      // $http vue resource a erişim // post(url,data)
      // this.$http.post('users.json', {userName : this.userName})
      // .then((response) => {
      //   console.log(response)
      // })
      // this.$resource('users.json').save({}, { userName : this.userName})
      // github da resource da anlatıyor. api gibi
      this.resource.kaydet({}, {userName : this.userName})
    },
    getUsers(){
      //this.$http.get("/parametreorurl")
      this.$http.get("users.json")
      .then((response) => {
        //console.log(response.body)//.body diyerek de alabiliriz
        console.log(response.data)
        let data = response.data;
        for(let key in data){
          console.log(data[key]);
          this.userList.push(
            {
              key : key,
              data : data[key],
            }
          )
        }

      })
    }
  },
  created(){
    const customActions = {
      kaydet : {method : "POST", url : "users.json"}

    };
    this.resource = this.$resource("", {}, customActions);

  }
}
</script>

<style>
</style>
