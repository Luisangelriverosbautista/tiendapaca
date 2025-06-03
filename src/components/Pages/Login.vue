
<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 sticky-top">
    <div class="container-fluid">
      <router-link class="navbar-brand d-flex align-items-center" to="/login">
        <img :src="iconoNav" width="35" height="35" class="me-2" alt="icono_nav">
        Paca Online
      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/productos">Productos</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="categoriasDropdown" role="button"
              data-bs-toggle="dropdown">
              Categorías
            </a>
            <ul class="dropdown-menu" aria-labelledby="categoriasDropdown">
              <li><router-link class="dropdown-item" to="/categoria/hombre">Hombre</router-link></li>
              <li><router-link class="dropdown-item" to="/categoria/mujer">Mujer</router-link></li>
              <li><router-link class="dropdown-item" to="/categoria/ninos">Niños</router-link></li>
              <li><router-link class="dropdown-item" to="/categoria/accesorios">Accesorios</router-link></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/ofertas">Ofertas</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#footer">Contacto</a>
            
          </li>
        </ul>

        <div class="d-flex align-items-center gap-3">
          <button type="button" class="btn btn-outline-light position-relative">
            🛒
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              1
            </span>
          </button>

          <button type="button" class="btn btn-outline-info">
            <router-link class="nav-link" to="/login">Registrarse</router-link>
          </button>
          <button type="button" class="btn btn-outline-danger">
            <router-link class="nav-link" to="/iniciarS">Iniciar sesión</router-link>
          </button>
        </div>
      </div>
    </div>
  </nav>
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
import iconoNav from '/src/assets/ropa-masculina.png';
import imagenPrincipal from '/src/assets/portada.jpg';

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
