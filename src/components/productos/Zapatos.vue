<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="card product-card shadow-lg">
          <div class="row g-0">
            <!-- Imagen del producto -->
            <div class="col-md-6">
              <div class="position-relative h-100">
                <img 
                  src="https://soyhombrealfa.com/wp-content/uploads/2017/03/Los-zapatos-deportivos-para-hombres-mas-vendidos-en-el-mundo.png" 
                  class="img-fluid rounded-start product-image" 
                  alt="Zapatos Deportivos AlphaRun"
                >
                <!-- Badge de oferta -->
                <span class="position-absolute top-0 start-0 bg-danger text-white px-3 py-2 rounded-end fw-bold">
                  ¡30% OFF!
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
                    <span class="small">4.8 (124 reseñas)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Contenido del producto -->
            <div class="col-md-6">
              <div class="card-body h-100 d-flex flex-column">
                <h2 class="card-title fw-bold mb-3">Zapatos Deportivos AlphaRun</h2>
                
                <!-- Precios -->
                <div class="mb-3">
                  <span class="text-danger fs-4 fw-bold">$350.00</span>
                  <span class="text-decoration-line-through text-muted ms-2">$500.00</span>
                  <span class="badge bg-success ms-2">Ahorras $150</span>
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