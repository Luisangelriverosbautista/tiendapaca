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
                  src="https://www.aktitud.co/wp-content/uploads/2022/11/Panther-1-scaled.jpg" 
                  class="img-fluid rounded-start product-image" 
                  alt="Gorra Panther Edition"
                >
                <!-- Badge de oferta -->
                <span class="position-absolute top-0 start-0 bg-danger text-white px-3 py-2 rounded-end fw-bold">
                  ¡15% OFF!
                </span>
                <!-- Badge de edición limitada -->
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
                      <i class="bi bi-star-fill"></i>
                    </span>
                    <span class="small">5.0 (68 reseñas)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Contenido del producto -->
            <div class="col-md-6">
              <div class="card-body h-100 d-flex flex-column">
                <h2 class="card-title fw-bold mb-3">Gorra Panther Edition</h2>
                
                <!-- Precios -->
                <div class="mb-3">
                  <span class="text-danger fs-4 fw-bold">$75.00</span>
                  <span class="text-decoration-line-through text-muted ms-2">$89.00</span>
                  <span class="badge bg-success ms-2">Ahorras $14</span>
                </div>
                
                <!-- Descripción -->
                <p class="card-text mb-4">Gorra de edición limitada con diseño premium. Protege del sol con estilo y comodidad. Ideal para uso diario o actividades al aire libre.</p>
                
                <!-- Características -->
                <ul class="list-group list-group-flush mb-4">
                  <li class="list-group-item d-flex align-items-center">
                    <i class="bi bi-patch-check-fill text-primary me-2"></i>
                    Material: 100% algodón
                  </li>
                  <li class="list-group-item d-flex align-items-center">
                    <i class="bi bi-patch-check-fill text-primary me-2"></i>
                    Ajuste regulable con broche metálico
                  </li>
                  <li class="list-group-item d-flex align-items-center">
                    <i class="bi bi-patch-check-fill text-primary me-2"></i>
                    Visera curva para mejor protección solar
                  </li>
                  <li class="list-group-item d-flex align-items-center">
                    <i class="bi bi-patch-check-fill text-primary me-2"></i>
                    Logotipo bordado a mano
                  </li>
                  <li class="list-group-item d-flex align-items-center">
                    <i class="bi bi-patch-check-fill text-primary me-2"></i>
                    Disponible en 5 colores
                  </li>
                </ul>
                
                <!-- Selector de color -->
                <div class="mb-4">
                  <label class="form-label fw-bold">Color:</label>
                  <div class="d-flex gap-2">
                    <button class="btn btn-color p-3 rounded-circle" style="background-color: #000000;"></button>
                    <button class="btn btn-color p-3 rounded-circle" style="background-color: #2B2D42;"></button>
                    <button class="btn btn-color p-3 rounded-circle" style="background-color: #8D99AE;"></button>
                    <button class="btn btn-color p-3 rounded-circle" style="background-color: #EF233C;"></button>
                    <button class="btn btn-color p-3 rounded-circle" style="background-color: #2B9348;"></button>
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
  name: 'ProductoGorra'
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

.btn-color {
  border: 2px solid #dee2e6;
  transition: all 0.3s ease;
}

.btn-color:hover, .btn-color.active {
  border-color: #0d6efd;
  transform: scale(1.1);
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
  
  .btn-color {
    padding: 2rem !important;
  }
}
</style>