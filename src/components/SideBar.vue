<template>
    <div class="sidebar">
       <h2>Barra lateral</h2>
       <ul>
        <li><router-link to="/contador">Contador</router-link></li>
        <li><router-link to="/Lista-de-tareas">Lista de Tareas</router-link></li>
        <li><router-link to="/Registrar">Registrar</router-link></li>
       </ul>
       
       
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';


</script>

<style>
.sidebar{
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
}


</style>