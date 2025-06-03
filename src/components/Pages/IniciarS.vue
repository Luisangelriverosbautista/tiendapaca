<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 sticky-top">
    <div class="container-fluid">
      <router-link class="navbar-brand d-flex align-items-center" to="/">
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
            <router-link class="nav-link" to="/todoslosproductos">Productos</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="categoriasDropdown" role="button"
              data-bs-toggle="dropdown">
              Categorías
            </a>
            <ul class="dropdown-menu" aria-labelledby="categoriasDropdown">
              <li><router-link class="dropdown-item" to="/Hombre">Hombre</router-link></li>
              <li><router-link class="dropdown-item" to="/Mujer">Mujer</router-link></li>
              <li><router-link class="dropdown-item" to="/Ninos">Niños</router-link></li>
              <li><router-link class="dropdown-item" to="/Accesorios">Accesorios</router-link></li>
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
   <footer id="footer" class="bg-dark text-white mt-3 py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-4">
          <h5 class="fw-bold mb-3">Paca Online</h5>
          <p>La mejor tienda de ropa online con las últimas tendencias y los mejores precios.</p>
          <div class="social-icons mt-3">
            <a href="#" class="text-white me-3"><i class="bi bi-facebook"></i></a>
            <a href="#" class="text-white me-3"><i class="bi bi-instagram"></i></a>
            <a href="#" class="text-white me-3"><i class="bi bi-twitter"></i></a>
            <a href="#" class="text-white"><i class="bi bi-tiktok"></i></a>
          </div>
        </div>
        
        <div class="col-md-3 mb-4">
          <h5 class="fw-bold mb-3">Información</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><router-link to="/preguntas-frecuentes" class="text-white text-decoration-none">Preguntas
                Frecuentes</router-link></li>
            <li><router-link to="/terminos" class="text-white text-decoration-none">Términos y Condiciones</router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-3 mb-4">
          <h5 class="fw-bold mb-3">Contacto</h5>
          <p><i class="bi bi-geo-alt-fill me-2"></i> Calle Madero 123, Oaxaca</p>
          <p><i class="bi bi-telephone-fill me-2"></i> +57 934 456 7890</p>
          <p><i class="bi bi-envelope-fill me-2"></i> serasPaca12_p@gmail.com</p>
        </div>
      </div>
      <hr class="my-4 bg-secondary">
      <div class="text-center">
        <p class="mb-0">&copy; 2025 Paca Online - Todos los derechos reservados</p>
      </div>
    </div>
  </footer>
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
