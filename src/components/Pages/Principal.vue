<script>
import iconoNav from '/src/assets/ropa-masculina.png';
import imagenPrincipal from '/src/assets/portada.jpg';

export default {
  data() {
    return {
      iconoNav,
      imagenPrincipal,
      carouselItems: [
        {
          id: 1,
          image: 'https://blog.voxfeed.com/wp-content/uploads/2019/03/disen%CC%83o-mexicano-1.jpg ',
          title: 'Ofertas de Invierno',
          description: 'Hasta 50% de descuento en abrigos y suéteres',
          focus: 'center center'

        },
        {
          id: 2,
          image: 'https://d1ih8jugeo2m5m.cloudfront.net/2024/08/ideas_para_tienda_de_ropa_infantil.jpg',
          title: 'Ropa Nueva',
          description: 'Descubre las últimas tendencias en moda masculina',
          focus: 'center 30%'
        },
        {
          id: 3,
          image: 'https://static.vecteezy.com/system/resources/previews/015/413/505/large_2x/lorry-and-pile-of-boxes-transportation-of-goods-and-construction-materials-heavy-volume-and-weight-delivery-when-ordering-goods-movement-cargo-truck-illustration-vector.jpg',

          description: 'En compras mayores a $500,00',
          focus: 'center 70%'
        }
      ],
      productos: [
        {
          id: 1,
          nombre: 'Abrigo de Invierno',
          precio: '$900',
          imagen: 'https://i5.walmartimages.com/seo/Chaqueta-acolchada-de-algod-n-con-capucha-para-mujer-abrigo-c-lido-longitud-media-forro-polar-Parkas-delgadas-Chaquetas-ajustadas-cremallera-gruesa-I_df321387-0812-49f6-ba52-44eaefb51c8b.7dee4db5b487fa75f82c9ac673949e4a.jpeg',
          descripcion: 'Abrigo cálido para el invierno con capucha desmontable',
          routerLink: '/abrigo'
        },
        {
          id: 2,
          nombre: 'Jeans Slim Fit',
          precio: '$585',
          imagen: 'https://image.made-in-china.com/2f0j10kZFEYpRqJrGS/-Skinny-Jeans-apretados-de-alta-calidad-para-la-.jpg',
          descripcion: 'Jeans ajustados de alta calidad en varios colores',
          routerLink: '/jeans'
        },
        {
          id: 3,
          nombre: 'Camisa Formal',
          precio: '$450',
          imagen: 'https://i.etsystatic.com/23197211/r/il/85976e/2431817137/il_fullxfull.2431817137_iztl.jpg',
          descripcion: 'Camisa de vestir 100% algodón para ocasiones especiales',
          routerLink: '/camisa'
        },
        {
          id: 4,
          nombre: 'Zapatos Casuales',
          precio: '$1200',
          imagen: 'https://resources.claroshop.com/medios-plazavip/s2/15066/1980885/5fd7d6e98ada3-c408001-2_1_grd-1600x1600.jpg',
          descripcion: 'Zapatos cómodos para uso diario',
          routerLink: '/zapatosC'
        },
        {
          id: 5,
          nombre: 'Chaqueta de Cuero',
          precio: '$850',
          imagen: 'https://www.bolf.es/spa_pl_Chaqueta-de-cuero-biker-para-hombre-marron-Bolf-2008-79556_1.jpg',
          descripcion: 'Chaqueta de cuero genuino con forro interior',
          routerLink: '/chaqueta'
        },
        {
          id: 6,
          nombre: 'Suéter Navideño',
          precio: '$220',
          imagen: 'https://images-na.ssl-images-amazon.com/images/I/819WOrkMLEL._AC_SL1424_.jpg',
          descripcion: 'Suéter divertido para fiestas de fin de año',
          routerLink: '/sueter'
        }

      ]
    }
  },
}
</script>

<template>
  <!-- NAVBAR -->
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


  <!-- PORTADA PRINCIPAL -->
  <div class="position-relative mt-3" style="height: 640px; overflow: hidden;">
    <img :src="imagenPrincipal" class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
      style="z-index: -1;" alt="Imagen principal">

    <div class="position-absolute top-50 start-50 translate-middle text-white px-3 py-4 bg-dark rounded text-center "
      style="max-width: 90%; max-height: 90%; overflow-y: auto; scrollbar-width: none; -ms-overflow-style: none;">
      <h1 class="fw-bold fs-1">Bienvenido a Paca Online</h1>
      <p>La mejor tienda de ropa online Con los mejores precios y calidad Puedes comprar desde la comodidad de tu casa Y
        recibirlo en la puerta de tu casa</p>

      <router-link to="/todoslosproductos" class="btn btn-primary mt-3">Explorar Productos</router-link>
    </div>
  </div>
  <!-- CARRUSEL OPTIMIZADO -->
<div id="mainCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000" style="position: relative; height: 100vh; overflow: hidden;">
  <!-- Indicadores -->
  <div class="carousel-indicators">
    <button v-for="(item, index) in carouselItems"
      :key="'indicator-' + item.id"
      type="button"
      data-bs-target="#mainCarousel"
      :data-bs-slide-to="index"
      :class="{ active: index === 0 }"
      :aria-label="'Slide ' + (index + 1)">
    </button>
  </div>

  <!-- Slides -->
  <div class="carousel-inner h-100">
    <div v-for="(item, index) in carouselItems"
      :key="'slide-' + item.id"
      :class="['carousel-item', { active: index === 0 }]"
      style="height: 100%; position: relative;">
      
      <!-- Imagen de fondo -->
      <div class="carousel-img-wrapper w-100 h-100"
        :style="{
          'background-image': `url(${item.image})`,
          'background-position': item.focus || 'center',
          'background-size': 'cover',
          'background-repeat': 'no-repeat'
        }">
      </div>

      <!-- Contenido centrado -->
      <div class="d-flex flex-column justify-content-center align-items-center text-white  text-center position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-25">
        <div class="p-4 rounded bg-dark">
          <h3 class="display-6 fw-bold mb-3">{{ item.title }}</h3>
          <p class="lead mb-4">{{ item.description }}</p>
          <router-link to="/ofertas" class="btn btn-primary btn-lg">Ver Ofertas</router-link>
        </div>
      </div>
    </div>
  </div>

  <!-- Controles -->
  <button class="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Anterior</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Siguiente</span>
  </button>
</div>


  <!-- SECCIÓN DESTACADOS -->
  <div class="container my-5 py-5">
    <h2 class="text-center fw-bold mb-4 display-4">Productos Destacados</h2>
    <div class="row g-4">
      <div class="col-md-4 col-lg-4" v-for="producto in productos" :key="producto.id">
        <div class="card h-100 shadow-sm border-0">
          <img :src="producto.imagen" class="card-img-top product-image" :alt="producto.nombre">
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ producto.nombre }}</h5>
            <p class="card-text text-muted">{{ producto.descripcion }}</p>
            <div class="d-flex justify-content-between align-items-center mt-3">
              <span class="fw-bold text-primary">{{ producto.precio }}</span>
              <router-link :to="producto.routerLink || `/producto/${producto.id}`">
    <button class="boton-comprar">¡Lo quiero!</button>
  </router-link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center mt-5">
      <router-link to="/Todoslosproductos" class="btn btn-outline-primary btn-lg">Ver todos los productos</router-link>
    </div>
  </div>

  <!-- SECCIÓN OFERTAS -->
  <div class="bg-light py-5">
    <div class="container">
      <h2 class="text-center fw-bold mb-4 display-4">Ofertas Especiales</h2>
      <div class="row g-4">
        <div class="col-md-6">
          <div class="p-5 bg-white rounded shadow-sm text-center h-100">
            <h3 class="fw-bold mb-3">Hasta 40% OFF</h3>
            <p class="mb-4">En toda la colección de invierno</p>
            <router-link to="/ofertas" class="btn btn-danger">Ver Ofertas</router-link>
          </div>
        </div>
        <div class="col-md-6">
          <div class="p-5 bg-white rounded shadow-sm text-center h-100">
            <h3 class="fw-bold mb-3">2x1 en Accesorios</h3>
            <p class="mb-4">En gorras, bufandas y guantes</p>
            <router-link to="/Accesorios" class="btn btn-success">Aprovechar</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- FOOTER -->
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

<style scoped>
.boton-comprar:hover {
  background: #333333; /* Negro más claro al hover */
  border-color: #333333;
}
/* Estilos generales */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Navbar */
.navbar {
  box-shadow: 0 5px 10px rgba(104, 131, 228, 0.863);
}

.navbar-brand {
  font-weight: 700;
  font-size: 1.5rem;
}

/* Carrusel optimizado */
.carousel {
  height: 70vh;
  min-height: 600px;
  max-height: 800px;
  overflow: hidden;
}

.carousel-inner,
.carousel-item {
  height: 80%;
}

.carousel-img-wrapper {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  transition: transform 0.5s ease;
}

.carousel-item.active .carousel-img-wrapper {
  transform: scale(1);
}

.carousel-caption {
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 400px;
  padding: 0 2rem;
  text-align: center;
}

.caption-content {
  background-color: rgb(22, 22, 22);
  padding: 20px;
  border-radius: 10%;
  max-width: 300px;

}

.carousel-item:not(.active) .carousel-img-wrapper {
  transform: scale(1.05);
}

.carousel-caption h3 {
  font-size: 35px;
}


.carousel-caption p {
  font-size: 17px;
}


.carousel-caption .btn {
  font-size: 17px;
}

#mainCarousel {
  margin-top: 50px;

}

.container.my-5 {
  margin-top: 1px !important;
}



/* Productos */
.product-image {
  height: 300px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card:hover .product-image {
  transform: scale(1.03);
}

.card {
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* Footer */
.social-icons i {
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.social-icons a:hover i {
  color: #0d6efd !important;
}


@media (max-width: 992px) {
  .carousel {
    height: 60vh;
    min-height: 400px;
  }

  .carousel-caption {
    bottom: 10%;
    padding: 0 1.5rem;
  }

  .caption-content {
    padding: 1.5rem;
  }
}

@media (max-width: 768px) {
  .carousel {
    height: 50vh;
    min-height: 350px;
  }

  .carousel-caption {
    bottom: 5%;
    text-align: center;
  }

  .caption-content {
    max-width: 100%;
    padding: 1rem;
    background-color: rgba(206, 0, 0, 0.904);
  }

  .carousel-caption h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .carousel-caption p {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .carousel-caption button {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }

  .product-image {
    height: 200px;
  }
}

@media (min-width: 1600px) {
  .carousel {
    max-height: 900px;
  }
}

/* Animaciones */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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
</style>
