<template>
    <div class="sidebar">
       <h2>Bienvenido</h2>
       <h3>Nombre:{{ registrarStore.nombre }}</h3>
       <h3>Email:{{ registrarStore.email }}</h3>
       <ul>
        <li><router-link to="/contador">Contador</router-link></li>
        <li><router-link to="/Lista-de-tareas">Lista de Tareas</router-link></li>
        <li><router-link to="/Registrar">Registrar</router-link></li>
        <li><router-link to="/Calcular">Calcular</router-link></li>
       </ul>
       
       
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useRegistrarStore } from '@/Modules/Registro/stores/registrarStore';

const registrarStore=useRegistrarStore();

// const nombre=ref(registrarStore.nombre.value);
// const email=ref(registrarStore.email.value);

// watch(()=>registrarStore.nombre,(newValue)=>{nombre.value=newValue})
// watch(()=>registrarStore.email,(newValue)=>{email.value=newValue})

</script>

<style>
.sidebar{
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
}


</style>