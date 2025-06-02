<template>
  <div class="container mt-5">
    <div class="card p-4 mx-auto" style="max-width: 500px;">
      <h2 class="text-center mb-4">Registro de Vendedor</h2>

      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <input v-model="form.name" type="text" placeholder="Nombre completo" class="form-control" required />
        </div>

        <div class="mb-3">
          <input v-model="form.email" type="email" placeholder="Correo electrónico" class="form-control" required />
        </div>

        <div class="mb-3">
          <input v-model="form.password" type="password" placeholder="Contraseña" class="form-control" required />
        </div>

        <div class="mb-3">
          <input v-model="form.confirmPassword" type="password" placeholder="Confirmar contraseña" class="form-control" required />
        </div>

        <div class="mb-3">
          <input v-model="form.phone" type="tel" placeholder="Teléfono de contacto" class="form-control" />
        </div>

        <div class="mb-3">
          <input v-model="form.storeName" type="text" placeholder="Nombre de la tienda" class="form-control" />
        </div>

        <div class="mb-3">
          <input v-model="form.city" type="text" placeholder="Ciudad/Estado" class="form-control" />
        </div>

        <div class="mb-3">
          <input v-model="form.paymentInfo" type="text" placeholder="Datos de cuenta para pagos" class="form-control" />
        </div>

        <button type="submit" class="btn btn-primary w-100">Registrarse</button>
      </form>

      <div class="text-center mt-3">
        ¿Ya tienes cuenta?
        <button class="btn btn-link p-0" @click="$emit('switchToLogin')">Inicia sesión</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const form = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  phone: '',
  storeName: '',
  city: '',
  paymentInfo: ''
});

function handleSubmit() {
  if (form.password !== form.confirmPassword) {
    alert('Las contraseñas no coinciden');
    return;
  }
  console.log('Registro vendedor:', form);
}
</script>
