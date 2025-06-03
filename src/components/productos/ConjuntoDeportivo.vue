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
                  src="https://i.pinimg.com/736x/ff/cf/00/ffcf00e4e0acfe0447f4e1b7c9d548ef.jpg" 
                  class="img-fluid rounded-start product-image" 
                  alt="Conjunto Deportivo"
                >
                <!-- Badge de descuento -->
                <span class="position-absolute top-0 start-0 bg-danger text-white px-3 py-2 rounded-end fw-bold">
                  ¡25% OFF!
                </span>
                <!-- Badge de temporada -->
                <span class="position-absolute top-0 end-0 bg-dark text-white px-3 py-2 rounded-start fw-bold">
                  COLECCIÓN 2025
                </span>
                <!-- Rating -->
                <div class="position-absolute bottom-0 start-0 w-100 bg-white bg-opacity-75 p-2">
                  <div class="d-flex justify-content-center align-items-center">
                    <span class="text-warning me-2">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star"></i>
                    </span>
                    <span class="small">4.0 (98 reseñas)</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Contenido del producto -->
            <div class="col-md-6">
              <div class="card-body h-100 d-flex flex-column">
                <h2 class="card-title fw-bold mb-3">Conjunto Deportivo</h2>
                
                <!-- Precios -->
                <div class="mb-3">
                  <span class="text-danger fs-4 fw-bold">$750.00</span>
                  <span class="text-decoration-line-through text-muted ms-2">$1000.00</span>
                  <span class="badge bg-success ms-2">Ahorras $250</span>
                </div>
                
                <!-- Descripción -->
                <p class="card-text mb-4">
                  Conjunto deportivo cómodo y moderno para entrenamientos o uso casual. Fabricado con materiales transpirables y corte ajustado que brinda libertad de movimiento.
                </p>
                
                <!-- Características -->
                <ul class="list-group list-group-flush mb-4">
                  <li class="list-group-item d-flex align-items-center">
                    <i class="bi bi-patch-check-fill text-primary me-2"></i>
                    Conjunto de dos piezas: sudadera y pantalón
                  </li>
                  <li class="list-group-item d-flex align-items-center">
                    <i class="bi bi-patch-check-fill text-primary me-2"></i>
                    Tela ligera y transpirable
                  </li>
                  <li class="list-group-item d-flex align-items-center">
                    <i class="bi bi-patch-check-fill text-primary me-2"></i>
                    Costuras reforzadas para mayor durabilidad
                  </li>
                  <li class="list-group-item d-flex align-items-center">
                    <i class="bi bi-patch-check-fill text-primary me-2"></i>
                    Disponible en color negro, gris y azul marino
                  </li>
                  <li class="list-group-item d-flex align-items-center">
                    <i class="bi bi-patch-check-fill text-primary me-2"></i>
                    Tallas: S, M, L, XL
                  </li>
                </ul>
                
                <!-- Selector de talla -->
                <div class="mb-4">
                  <label class="form-label fw-bold">Talla:</label>
                  <div class="d-flex gap-2">
                    <button class="btn btn-outline-secondary">S</button>
                    <button class="btn btn-outline-secondary">M</button>
                    <button class="btn btn-outline-secondary">L</button>
                    <button class="btn btn-outline-secondary">XL</button>
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
</template>

<script>
export default {
  name: 'ConjuntoDeportivo'
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
