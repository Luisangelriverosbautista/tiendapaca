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
                  src="https://i5.walmartimages.com/seo/Chaqueta-acolchada-de-algod-n-con-capucha-para-mujer-abrigo-c-lido-longitud-media-forro-polar-Parkas-delgadas-Chaquetas-ajustadas-cremallera-gruesa-I_df321387-0812-49f6-ba52-44eaefb51c8b.7dee4db5b487fa75f82c9ac673949e4a.jpeg" 
                  class="img-fluid rounded-start product-image" 
                  alt="Zapatos Deportivos AlphaRun"
                >
                <!-- Badge de oferta -->

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
                    <span class="small">4.8 (124 reseñas)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Contenido del producto -->
            <div class="col-md-6">
              <div class="card-body h-100 d-flex flex-column">
                <h2 class="card-title fw-bold mb-3">Abrigo de Invierno</h2>
                
                <!-- Precios -->
                <div class="mb-3">
                  <span class="text-danger fs-4 fw-bold">$900.00</span>

                </div>
                
                <!-- Descripción -->
                <p class="card-text mb-4">Los zapatos deportivos AlphaRun ofrecen máximo rendimiento con tecnología de amortiguación avanzada para corredores y atletas. Diseño ergonómico que se adapta a tu pie.</p>
                
                <!-- Características -->
                <ul class="list-group list-group-flush mb-4">
                  <li class="list-group-item d-flex align-items-center">
                    <i class="bi bi-check-circle-fill text-success me-2"></i>
                    Material: Malla transpirable con suela de goma
                  </li>
                  <li class="list-group-item d-flex align-items-center">
                    <i class="bi bi-check-circle-fill text-success me-2"></i>
                    Amortiguación: Tecnología AirFlex para mayor comodidad
                  </li>
                  <li class="list-group-item d-flex align-items-center">
                    <i class="bi bi-check-circle-fill text-success me-2"></i>
                    Disponible en tallas: 24 a 30
                  </li>
                  <li class="list-group-item d-flex align-items-center">
                    <i class="bi bi-check-circle-fill text-success me-2"></i>
                    Colores: Negro, Azul, Rojo, Blanco
                  </li>
                  <li class="list-group-item d-flex align-items-center">
                    <i class="bi bi-check-circle-fill text-success me-2"></i>
                    Peso ligero: 280g por zapato
                  </li>
                </ul>
                
                <!-- Botones -->
                <div class="mt-auto d-flex flex-wrap gap-2">
                  <button class="btn btn-primary flex-grow-1 py-2">
                    <i class="bi bi-cart-plus me-2"></i>Añadir al carrito
                  </button>
                  <button class="btn btn-outline-secondary flex-grow-1 py-2">
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
  name: 'ProductoDetail'
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

@media (max-width: 767.98px) {
  .product-image {
    height: 300px;
  }
  
  .card-body {
    padding: 1.25rem;
  }
}
</style>