import Vue from 'vue'
import App from './App.vue'


Vue.filter("toLowerCase", (value) => {
  return value.toLowerCase();
})


// Mixin'i global olarak tanımlamak tavsiye edilmez
Vue.mixin({
  created(){
    console.log("global")
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
