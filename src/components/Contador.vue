<template>
  <h1>hola mundo desde vue</h1>
  <p>{{ contador }}</p>
  <button @click="Incrementar">Incrementar</button>
    <button @click="Restar">Restar</button>
</template>

<script setup>
import {ref}  from 'vue';
const contador=ref(0);
const Incrementar=()=>{
  contador.value++;
}
const Restar=()=>{
  contador.value--;
}
</script>

<style scoped>
p{color:red;}
</style>
