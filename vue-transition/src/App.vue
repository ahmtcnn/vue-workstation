<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Animation ve Transition</h3>
        <hr>
        <button class="btn btn-primary" @click="show = !show" >Kutuyu Göster/Gizle</button>
        <hr>

        <transition name="fade">
          <div class="alert alert-success"  v-if="show" >Bu bir alert Kutusu</div>
        </transition>
      <hr>

        <!-- vshow display i değiştiriyordu-->
        <!-- appear onload da geleceğini belirtir-->
        <transition name="slide" type="animation" appear>
          <div class="alert alert-warning"  v-show="show" >Bu bir alert Kutusu</div>
        </transition>

        <hr>

        <transition
        enter-class=""
        enter-active-class="animated heartBeat"
        leave-class=""
        leave-active-class="animated rollOut"
        appear>

          <div class="alert alert-warning"  v-show="show" >Bu bir alert Kutusu</div>
        </transition>

        <hr>
        <!-- ilk out gerçekleştsin sonra in-->
        <transition name="fade" mode="out-in">
          <div class="alert alert-success"  v-if="show" key="success">Bu bir alert Kutusu</div>
          <div class="alert alert-danger"  v-else key="danger">Bu bir alert Kutusu</div>
        </transition>
        <!--JS ile (css olmadan) transition -->
        <button class="btn btn-primary" @click="showJs = !showJs" >Kutuyu Göster/Gizle</button>
        <br><br>

        <transition
        :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @after-enter-cancelled="afterEnterCancelled"

        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @after-leave-cancelled="afterLeaveCancelled"
        >
          <div style="width:300px; backgorund-color: #f232de; border: 1px solid #666; height:100px;"  v-if="showJs" >Bu bir alert Kutusu</div>
        </transition>

        <hr>
        <h3> Dinamik Komponentler arasında Geçiş... </h3>
        <button class="btn btn-danger" @click="activeComponent = 'Home'">Home</button>
        <button class="btn btn-primary" @click="activeComponent = 'Post'">Post</button>
        <br><br>
        <transition name="fade" mode="out-in">
        <component :is="activeComponent"></component>
        </transition>

        <hr>
        <hr>
        <button class="btn btn-danger" @click="addNewItem">Add</button>
        <br>
        <br>
        <ul class="list-group">

          <transition-group name="slide">
          
            <li :key="index" v-for="(number, index) in numberList" class="list-group-item" @click="removeItem(index)">{{number}}</li>
            
          </transition-group>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import Post from "./components/Post"
import Home from "./components/Home"

export default {
  components : {
    Home,
    Post,
  },

  data(){
    return {
      show : true,
      showJs : false,
      elementWidth : 100,
      activeComponent : "Post",
      numberList : [1,2,3,4,5],
    }
  },
  methods:{

    addNewItem(){
      const position = Math.floor((Math.random() * this.numberList.length))
      this.numberList.splice(position, 0, this.numberList.length + 1)
    },

    removeItem(index){
      this.numberList.splice(index, 1)
    },



    beforeEnter(el){
      console.log("beforeEnter");
    },
    enter(el, done){
      console.log("enter");
      this.elementWidth = 100;
      el.style.width = this.elementWidth + "px";
      let round = 1
      const interval = setInterval(() =>{
        el.style.width = (this.elementWidth + round * 10) + "px";
        round++;
        if(round > 20){
          clearInterval(interval);
          done();
        }
      },50)

    },
    afterEnter(el){
      console.log("afterEnter");
    },

    afterEnterCancelled(el){
      console.log("afterEnterCancelled");
    },


    beforeLeave(el){
      console.log("beforeLeave");
      this.elementWidth = 300;
      el.style.width = this.elementWidth + "px";
    },

    leave(el,done){
      console.log("leave");
let round = 1
      const interval = setInterval(() =>{
        el.style.width = (this.elementWidth - round * 10) + "px"; // px işareti önemli unutma!
        round++;
        if(round > 20){
          clearInterval(interval);
          done(); // done ile animasyonun bittiğini vue js e söylüyoruz
        }
      },50)
    },

    afterLeave(el){
      console.log("afterLeave");
    },

    afterLeaveCancelled(el){
      console.log("afterLeaveCancelled");
    }
  }


}
</script>

<style>
/*animasyonun ilk karesi*/
.fade-enter{
  opacity: 0;

}
/*daha sonrasında oluşana kadar (1 saniyede gelmesini sağladık)*/
.fade-enter-active{
transition: opacity 1s;

}
.fade-leave{
  /* opacity: 1; */

}
.fade-leave-active{
  transition: opacity 1s;
  opacity: 0;
}

.slide-enter{
  opacity: 0;
}
.slide-enter-active{
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5;
}
.slide-leave{

}
.slide-leave-active{
  animation: slide-out 1s ease-out forwards;
  transition: opacity 3s;
  opacity: 0;
  position: absolute;
}

.slide-move{
  transition: transform 1s;
}

@keyframes slide-in {
  from{
    transform: translateY(20px);
  }
  to
  {
    transform: translateY(0px);
  }
}

@keyframes slide-out {
  from{
    transform: translateY(0px);
  }
  to
  {
    transform: translateY(20px);
  }
}
</style>
