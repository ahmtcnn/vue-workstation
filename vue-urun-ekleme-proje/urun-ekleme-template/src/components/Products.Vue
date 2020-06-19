<template>
    <div class="row product-container">
        <appProduct v-for="product in productList">
            <img class="card-img-top" :src="product.selectedImage" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">{{product.title}}</h5>
            <small>
                <strong>Adet : </strong> {{product.count}}
            </small>
            <br>
            <small>
                <strong>Fiyat : </strong> {{product.price}}
            </small>
            <br>
            <small>
                <strong>Tutar : </strong> {{product.totalPrice}}
            </small>    
            </div>
        </appProduct>


    </div>
</template>


<script>
//const ile isim yollandıysa süslü parantezler arasında almak lazım
import { eventBus } from "../main.js"
import Product from "./Product.vue"

export default {
    components : {
        appProduct : Product,
    },
    data() {
        return {
            productList : [],
        }
    },
    created(){
        eventBus.$on("productAdded", (product) => {
            if(this.productList.length <3){
            this.productList.push(product);
            eventBus.$emit("progressbarUpdate", this.productList.length);
            
            }
            else {
                alert("daha fazla ekleyemezsin")
            }
            
        });
    }
}
</script>