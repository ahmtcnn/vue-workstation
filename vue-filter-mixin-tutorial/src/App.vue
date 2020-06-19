<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Filter ve Mixins</h3>
          <p>{{message | toUpperCase | toLowerCase}}</p>
          <button class="btn btn-primary" @click="add_product">Ürün Ekle </button>
          <input type="text" v-model="searchText">
          <ul>
            <li v-for="product in filtered">{{product}}</li>
          </ul>
          <FilterList></FilterList>
      </div>
    </div>
  </div>
</template>

<script>

import FilterList from "./FilterList";

import {productMixin } from "./productMixin";

// Eğer diğer komponentlerin yapılan değişiklikten etkilenmesini istiyorsak
// mixin olarak değil değişken olarak davrancaz. Mixin olarak eklemeden
// data içerisinde productMixin.created = asdfasd gibi..
export default {
  components : {
    FilterList,
  },
  // burada productMixin içerisindeki datanın bir kopyasını verir
  // Dolayısıyla burda yapılan değişiklik diğerlerini etkilemez
  mixins: [productMixin],

  data(){
    return {
      message : 'Selamlar bu filter bölümü tutorial',
      searchText : "",
    }
  },
  filters : {
    toUpperCase(value){
      return value.toUpperCase();
    }
  },
  methods : {
    add_product(){
      this.products.push("Kamyon")
    }
  }
  // computed sadece bir değişiklik olursa çalışıyor o yüzden daha performanslı
  // Öbür türlü dom sürekli  manipüle edilmeye çalışıyor
}
</script>

<style>

</style>
