<template>
    <div>
        <h2>formulario de registro</h2>
        <Form :validation-schema="schema" @submit="onSubbmit">
            <div class="form">
        <label for="nombre">Nombre:</label>
        <Field type="text" name="nombre" id="nombre" placeholder="Ingrese nombre"/>
        <ErrorMessage name="nombre"></ErrorMessage>
        </div>
        <div class="form">
        <label for="correo">Correo:</label>
        <Field type="email" name="email" id="correo" placeholder="Ingrese su email"/>
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

    const onSubbmit=()=>{
        console.log('Se  ha enviado el form');
    }
</script>
<style scoped>
    .form{
        margin-bottom: 10px;
    }
</style>