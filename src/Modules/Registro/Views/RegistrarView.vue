<template>
    <div>
        <h2>formulario de registro</h2>
        <Form :validation-schema="schema" @submit="onSubbmit">
            <div class="form">
        <label for="nombre">Nombre:</label>
        <Field v-model="nombre" type="text" name="nombre" id="nombre" placeholder="Ingrese nombre"/>
        <ErrorMessage name="nombre"></ErrorMessage>
        </div>
        <div class="form">
        <label for="correo">Correo:</label>
        <Field v-model="email" type="email" name="email" id="correo" placeholder="Ingrese su email"/>
        <ErrorMessage name="email"></ErrorMessage>
        </div>
         <div class="form">
        <button type="submit" >Registrar</button>
        </div>
        </Form>
    </div>
</template>
<script setup>
    import { Form,Field, ErrorMessage } from 'vee-validate';
    import { schema } from '../Schemas/ValidationSchema';
    import { useRegistrarStore } from '../stores/registrarStore';
 import { ref } from 'vue';
    const registrarStore=useRegistrarStore();

    const nombre=ref('');
    const email=ref('');

    const onSubbmit=()=>{
registrarStore.guardarRegistro(nombre.value,email.value)
        console.log('Se  ha enviado el form');
    }
</script>
<style scoped>
    .form{
        margin-bottom: 10px;
    }
</style>