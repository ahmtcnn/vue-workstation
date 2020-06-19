import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import { routes } from "./routes";
import store from "./store"

Vue.use(VueRouter);

const router = new VueRouter({
  routes : routes, //key ve value birbirine eşit isi direk birini  yazabilirsin
  mode : 'history', //hash default
  scrollBehavior(to, from, savedPosition){
    return { x : 0, y : 800}
  }
});
// bütün routeların girişine erişiyoruz.
router.beforeEach( (to, form, next) => {
  
  next(); //  bunun ile izin veriliyor. ancak içerisinde başka route da verebiliriz

})

new Vue({
  el: '#app',
  router : router,
  store : store,
  render: h => h(App)
})
