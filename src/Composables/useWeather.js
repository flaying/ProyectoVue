import { useWeatherStore } from "@/stores/WeatherStore";
import { getTemperatura } from "@/helpers/getWeather";


export const useWeather=async ()=>{
  const temperatura=await getTemperatura();

  const weatherStore=useWeatherStore();


  weatherStore.temperatura=temperatura;

}