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
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="card product-card shadow-lg">
          <div class="row g-0">
            <!-- Imagen del producto -->
            <div class="col-md-6">
              <div class="position-relative h-100">
                <img 
                  src="https://www.mexicodesconocido.com.mx/wp-content/uploads/2020/06/mochila-viajero.jpg" 
                  class="img-fluid rounded-start product-image" 
                  alt="Mochila Explorer"
                >
                <!-- Badge de descuento -->
                <span class="position-absolute top-0 start-0 bg-danger text-white px-3 py-2 rounded-end fw-bold">
                  ¡18% OFF!
                </span>
                <!-- Badge de temporada -->
                <span class="position-absolute top-0 end-0 bg-dark text-white px-3 py-2 rounded-start fw-bold">
                  EDICIÓN LIMITADA
                </span>
                <!-- Rating -->
                <div class="position-absolute bottom-0 start-0 w-100 bg-white bg-opacity-75 p-2">
                  <div class="d-flex justify-content-center align-items-center">
                    <span class="text-warning me-2">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-half"></i>
                    </span>
                    <span class="small">4.6 (74 reseñas)</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Contenido del producto -->
            <div class="col-md-6">
              <div class="card-body h-100 d-flex flex-column">
                <h2 class="card-title fw-bold mb-3">Mochila Explorer</h2>
                
                <!-- Precios -->
                <div class="mb-3">
                  <span class="text-danger fs-4 fw-bold">$680.00</span>
                  <span class="text-decoration-line-through text-muted ms-2">$830.00</span>
                  <span class="badge bg-success ms-2">Ahorras $150</span>
                </div>
                
                <!-- Descripción -->
                <p class="card-text mb-4">
                  Mochila resistente y espaciosa ideal para estudiantes, viajeros o aventureros urbanos. Diseño ergonómico con múltiples compartimentos y materiales impermeables.
                </p>
                
                <!-- Características -->
                <ul class="list-group list-group-flush mb-4">
                  <li class="list-group-item d-flex align-items-center">
                    <i class="bi bi-patch-check-fill text-primary me-2"></i>
                    Capacidad de 25 litros
                  </li>
                  <li class="list-group-item d-flex align-items-center">
                    <i class="bi bi-patch-check-fill text-primary me-2"></i>
                    Material resistente al agua
                  </li>
                  <li class="list-group-item d-flex align-items-center">
                    <i class="bi bi-patch-check-fill text-primary me-2"></i>
                    Bolsillo especial para laptop de 15.6”
                  </li>
                  <li class="list-group-item d-flex align-items-center">
                    <i class="bi bi-patch-check-fill text-primary me-2"></i>
                    Tirantes acolchados ajustables
                  </li>
                  <li class="list-group-item d-flex align-items-center">
                    <i class="bi bi-patch-check-fill text-primary me-2"></i>
                    Disponible en colores negro, gris y verde oliva
                  </li>
                </ul>
                
                <!-- Selector de color -->
                <div class="mb-4">
                  <label class="form-label fw-bold">Color:</label>
                  <div class="d-flex gap-2">
                    <button class="btn btn-outline-secondary">Negro</button>
                    <button class="btn btn-outline-secondary">Gris</button>
                    <button class="btn btn-outline-secondary">Verde Oliva</button>
                  </div>
                </div>
                
                <!-- Botones -->
                <div class="mt-auto d-flex flex-wrap gap-2">
                  <button class="btn btn-primary flex-grow-1 py-2">
                    <i class="bi bi-cart-plus me-2"></i>Añadir al carrito
                  </button>
                  <button class="btn btn-outline-dark flex-grow-1 py-2">
                    <i class="bi bi-heart me-2"></i>Guardar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  </div>
  <footer id="footer" class="bg-dark text-white  mt-3 py-5">
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

<script>
export default {
  name: 'MochilaExplorer'
}
</script>

<style scoped>
.product-card {
  border: none;
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15) !important;
}

.product-image {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.list-group-item {
  padding: 0.75rem 1.25rem;
  border-left: none;
  border-right: none;
}

.btn {
  transition: all 0.3s ease;
}

.btn:hover {
  transform: scale(1.05);
}

@media (max-width: 767.98px) {
  .product-image {
    height: 300px;
  }

  .card-body {
    padding: 1.25rem;
  }
}
</style>
