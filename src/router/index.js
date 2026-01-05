import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /* {
       path: '/',
       name: 'home',
       component: HomeView,
     },*/
     {
       path: '/contador',
       name: 'contador',   
       component: () => import('../Modules/Contador/Components/Contador.vue'),
     },
      {
       path: '/Lista-de-tareas',
       name: 'ListaDeTareas',   
       component: () => import('../Modules/listaDeTareas/Components/ListaDeTareas.vue'),
     },
      {
       path: '/Registrar',
       name: 'Registrar',   
       component: () => import('../Modules/Registro/Views/RegistrarView.vue'),
     }
  ],
})

export default router
