<template>
    <div class="container">
        <h1>Tebrikler Bildiniz</h1>
        <button @click="newGame"> Yeni Oyun</button>
    </div>
</template>


<script>
export default {
    methods : {
        newGame() {
            this.$emit("activeComponentEvent", "app-game-cards");
        }
    }
}
</script>

<style scoped>

.container {
    position: absoulute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.container h1{
    text-align: center;
    font-size: 333%;
    color: darkgreen;
    opacity: 0.5;
}
.container button{
    cursor: pointer;
    width: 200px;
    background-color: #fff;
    color: darkred;
    border: 1px solid darkgreen;
    font-size: 15px;
    border-radius: 5px;
    outline: none;

}

.container button:hover {
    background-color: darkgreen;
    color:#fff;
    transition: all .5s;
}

</style>