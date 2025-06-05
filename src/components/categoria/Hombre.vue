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
              <li><router-link class="dropdown-item" to="/Deportivo">Deportivo</router-link></li>
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

  <div class="ofertas-page">
    <h1>Hombre</h1>
    
    <div class="productos-grid">
      <!-- Producto 1 -->
      <div class="producto-card card">
        <div class="badge-oferta">-34%</div>
        <img src="https://soyhombrealfa.com/wp-content/uploads/2017/03/Los-zapatos-deportivos-para-hombres-mas-vendidos-en-el-mundo.png" 
             alt="Zapatos Deportivos" 
             class="producto-imagen product-image">
        <div class="producto-info">
          <h3>Zapatos Deportivos</h3>
          <div class="precios">
            <span class="precio-anterior">$500</span>
            <span class="precio-oferta">$350</span>
          </div>
          <router-link to="/zapatos"> <button class="boton-comprar">¡Lo quiero!</button></router-link>
         
        </div>
      </div>

      <!-- Producto 2 -->
      <div class="producto-card card">
        <div class="badge-oferta">-22%</div>
        <img src="https://tecalzoshoes.com/wp-content/uploads/2022/12/5edceb95-207c-4393-8bf7-7a0ecfde854f.jpg" 
             alt="Chaleco" 
             class="producto-imagen product-image">
        <div class="producto-info">
          <h3>Chaleco</h3>
          <div class="precios">
            <span class="precio-anterior">$350</span>
            <span class="precio-oferta">$220</span>
          </div>
          <router-link to="/chaleco"> <button class="boton-comprar">¡Lo quiero!</button></router-link>
        </div>
      </div>

      <!-- Producto 3 -->
      <div class="producto-card card">
        <img src="https://i.etsystatic.com/23197211/r/il/85976e/2431817137/il_fullxfull.2431817137_iztl.jpg" 
             alt="camisa" 
             class="producto-imagen product-image">
        <div class="producto-info">
          <h3>Camisa Formal</h3>
          <div class="precios">
            <span class="precio-oferta">$450</span>
          </div>
          <router-link to="/camisa"> <button class="boton-comprar">¡Lo quiero!</button></router-link>
        </div>
      </div>

      <!-- Producto 4 -->
      <div class="producto-card card">
        <img src="https://www.bolf.es/spa_pl_Chaqueta-de-cuero-biker-para-hombre-marron-Bolf-2008-79556_1.jpg" 
             alt="Chaqueta" 
             class="producto-imagen product-image">
        <div class="producto-info">
          <h3>Chaqueta de Cuero</h3>
          <div class="precios"> 
            <span class="precio-oferta">$850</span>
          </div>
          <router-link to="/chaqueta"> <button class="boton-comprar">¡Lo quiero!</button></router-link>
        </div>
      </div>

      
      
    </div>
  </div>
  <footer id="footer" class="bg-dark mt-3 text-white py-5">
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

<style scoped>
.ofertas-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

.ofertas-page h1 {
  text-align: center;
  color: #ff5722;
  margin-bottom: 40px;
  font-size: 2.2rem;
}

.productos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  padding: 15px;
}

/* Estilos combinados */
.producto-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
}



.product-image {
  height: 300px;
  width: 100%;
  object-fit: cover;
  border-bottom: 1px solid #eee;
}


.badge-oferta {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #ff5722;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.9rem;
  z-index: 1;
}

.producto-info {
  padding: 20px;
}

.producto-info h3 {
  margin: 0 0 12px 0;
  font-size: 1.25rem;
  color: #333;
}

.precios {
  margin: 18px 0;
  display: flex;
  align-items: center;
  gap: 10px;
}

.precio-anterior {
  text-decoration: line-through;
  color: #999;
  font-size: 0.95rem;
}

.precio-oferta {
  font-weight: bold;
  color: #ff5722;
  font-size: 1.4rem;
}

.boton-comprar {
  width: 100%;
  padding: 12px;
  background: #000000; /* Fondo negro */
  color: #ffffff; /* Texto blanco */
  border: 1px solid #000000; /* Borde negro */
  border-radius: 0; /* Esquinas rectas */
  cursor: pointer;
  font-weight: normal;
  font-size: 1rem;
  transition: all 0.2s ease;
  margin-top: 10px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  text-align: center;
  text-transform: none; /* Mantiene "¡Lo quiero!" */
}

.boton-comprar:hover {
  background: #333333; /* Negro más claro al hover */
  border-color: #333333;
}
</style>

<script>
import iconoNav from '/src/assets/ropa-masculina.png';
import imagenPrincipal from '/src/assets/portada.jpg';
export default {
  data() {
    return {
      iconoNav,
      imagenPrincipal,}}}

</Script>