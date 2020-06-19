import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource";

Vue.use(VueResource);

//component içerisinde $ ile bağlanıyoruz ama burada direk bağlanabiliriz instance a

Vue.http.options.root = "https://vuejs-vueresource-806c0.firebaseio.com"

//interceptors bir array
Vue.http.interceptors.push((request, next) => {
  // if(request.method == "POST"){
  //   request.method = "PUT"
  // }
  // next();

  //reponse interceptor
  next(response => {
    console.log(response);
  });

});

new Vue({
  el: '#app',
  render: h => h(App)
})
