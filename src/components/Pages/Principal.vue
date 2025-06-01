<script>
import iconoNav from '/src/assets/ropa-masculina.png';
import imagenPrincipal from '/src/assets/portada.jpg';

export default {
  data() {
    return {
      iconoNav,
      imagenPrincipal,
    }
  },
}
</script>

<template>
  <!-- NAVBAR -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4">
    <div class="container-fluid">
      <!-- Logo y nombre -->
      <router-link class="navbar-brand d-flex align-items-center" to="/login"><img :src="iconoNav" width="35"
          height="35" class="me-2" alt="icono_nav">
        Paca Online</router-link>


      <!-- Botón hamburguesa en móvil -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Contenido del navbar -->
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- Secciones del sitio -->
          <li class="nav-item">
            <router-link class="nav-link" to="/">inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="">Productos</router-link>
            
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="categoriasDropdown" role="button"
              data-bs-toggle="dropdown">
              Categorías
            </a>
            <ul class="dropdown-menu" aria-labelledby="categoriasDropdown">
             
              <li><router-link class="dropdown-item" to="">Hombre</router-link></li>
              <li><router-link class="dropdown-item" to="">Mujer</router-link></li>
              <li><router-link class="dropdown-item" to="">Niños</router-link></li>
              <li><router-link class="dropdown-item" to="">Accesorios</router-link></li>
              
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="">Ofertas</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="">Contacto</router-link>
          </li>
        </ul>

        <!-- Botones a la derecha -->
        <div class="d-flex align-items-center gap-3">
          <!-- Carrito -->
          <button type="button" class="btn btn-outline-light position-relative">
            🛒
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              1
            </span>
          </button>

          <!-- Sign up -->
          <button type="button" class="btn btn-outline-info">
            <router-link class="nav-link" to="/registro">Registrarse</router-link></button>
          <button type="button" class="btn btn-outline-danger">Iniciar sesion</button>
        </div>
      </div>
    </div>
  </nav>

  <!-- PORTADA PRINCIPAL -->
  <div class="position-relative mt-3" style="height: 640px; overflow: hidden;">
    <img :src="imagenPrincipal" class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
      style="z-index: -1;" alt="Imagen principal">

    <div
      class="position-absolute top-50 start-50 translate-middle text-white text-center px-3 py-4 bg-dark bg-opacity-50 rounded"
      style="max-width: 90%; max-height: 90%; overflow-y: auto; scrollbar-width: none; -ms-overflow-style: none;">
      <h1 class="fw-bold fs-1">Bienvenido a paca online</h1>
      <p>La mejor tienda de ropa online</p>
      <p>Con los mejores precios y calidad</p>
      <p>Puedes comprar desde la comodidad de tu casa</p>
      <p>Y recibirlo en la puerta de tu casa</p>
      <p>No esperes más y empieza a comprar</p>
      <p>La mejor ropa para ti y tu familia</p>
      <p>Síguenos en nuestras redes sociales</p>
      <p>Para estar al tanto de nuestras promociones y ofertas</p>
      <p>Y no olvides visitar nuestra página web</p>
      <p>Encuentra la mejor ropa</p>
    </div>
  </div>

  <!-- SECCIÓN DESTACADOS -->
  <div class="container my-5">
    <h2 class="text-center fw-bold mb-4">Productos Destacados</h2>
    <div class="row g-4">
      <div class="col-md-4" v-for="i in 6" :key="i">
        <div class="card h-100 shadow-sm">
          <img
            src="https://imgs.search.brave.com/XXy-rXwE-CNtEgMWKDhOsGe9CZ37hFnbOYsV6WZHYiI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjF2akpVLWQwM0wu/anBn"
            class="card-img-top" alt="Producto">
          <div class="card-body">
            <h5 class="card-title">Producto {{ i }}</h5>
            <p class="card-text">Descripción breve del producto {{ i }}.</p>
            <button class="btn btn-dark w-100">Ver más</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- FOOTER -->
  <footer class="bg-dark text-white text-center py-4">
    <p class="mb-0">&copy; 2025 Paca Online - Todos los derechos reservados</p>
  </footer>
</template>

<style scoped>
.object-fit-cover {
  object-fit: cover;
}

/* Oculta el scroll en navegadores Webkit (Chrome, Safari) */
div::-webkit-scrollbar {
  display: none;
}
</style>
