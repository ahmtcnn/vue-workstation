import Vue from 'vue'
import App from './App.vue'

Vue.directive("color", {
  //binding parametresi : value, arguman ve modifier'ı alır
  bind(el, binding, vnode){

    //array
    if(binding.modifiers['delay']){
      setTimeout(() => {
        if(binding.arg == 'background'){
          el.style.backgroundColor = binding.value;
        }
        else {
          el.style.color = binding.value;
        }

      },2000)
    }
    else{
        if(binding.arg == 'background'){
          el.style.backgroundColor = binding.value;
        }
        else {
          el.style.color = binding.value;
        }

    }

    
  }
});


new Vue({
  el: '#app',
  render: h => h(App)
})
