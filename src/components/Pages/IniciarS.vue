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

          <router-link class="btn btn-outline-info" to="/login">Registrarse</router-link>
          <router-link class="btn btn-outline-danger" to="/iniciarS">Iniciar sesión</router-link>
        </div>
      </div>
    </div>
  </nav>

  <div class="container mt-5">
    <div class="card p-4 mx-auto" style="max-width: 500px;">
      <h2 class="text-center mb-4">Iniciar Sesión</h2>

      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <input v-model="form.email" type="email" placeholder="Correo electrónico" class="form-control" required />
        </div>

        <div class="mb-3">
          <input v-model="form.password" type="password" placeholder="Contraseña" class="form-control" required />
        </div>

        <button type="submit" class="btn btn-primary w-100">Entrar</button>
      </form>

      <div class="text-center mt-3">
        ¿No tienes cuenta?
        <button class="btn btn-link p-0" @click="$emit('switchToRegister')">Regístrate</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import iconoNav from '/src/assets/ropa-masculina.png';

const form = reactive({
  email: '',
  password: ''
});

function handleLogin() {
  console.log('Intentando iniciar sesión con:', form);
  // Aquí puedes hacer la lógica de autenticación
}
</script>
