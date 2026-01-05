<template>

 <h3>La temperatura actual es:{{ WeatherStore.temperatura }} °C</h3>   


</template>
<script setup>
    import { useWeather } from '@/Composables/useWeather';
   import { onMounted } from 'vue';
import { useWeatherStore } from '@/stores/WeatherStore';

const WeatherStore=useWeatherStore();

onMounted(()=>{
    useWeather();
})
</script>
<style  scoped>
  
</style>