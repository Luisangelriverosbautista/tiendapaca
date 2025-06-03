<template>
  <div class="producto-card card">
    <div class="badge-oferta">-{{ discountPercentage }}%</div>
    <img :src="image" :alt="name" class="producto-imagen">
    <div class="producto-info">
      <h3>{{ name }}</h3>
      <p class="producto-descripcion">{{ description }}</p>
      
      <div class="caracteristicas">
        <h4>Características:</h4>
        <ul>
          <li v-for="(feature, index) in features" :key="index">
            {{ feature }}
          </li>
        </ul>
      </div>
      
      <div class="precios">
        <span class="precio-anterior">${{ originalPrice }}</span>
        <span class="precio-oferta">${{ salePrice }}</span>
      </div>
      <button class="boton-comprar">¡Lo quiero!</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    description: String,
    features: Array,
    originalPrice: Number,
    salePrice: Number,
    image: String
  },
  computed: {
    discountPercentage() {
      return Math.round((1 - this.salePrice / this.originalPrice) * 100);
    }
  }
}
</script>

<style scoped>
.producto-descripcion {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 15px;
  line-height: 1.4;
}

.caracteristicas {
  margin: 15px 0;
}

.caracteristicas h4 {
  font-size: 0.95rem;
  margin-bottom: 8px;
  color: #444;
}

.caracteristicas ul {
  padding-left: 20px;
  margin: 0;
}

.caracteristicas li {
  font-size: 0.85rem;
  color: #555;
  margin-bottom: 5px;
  line-height: 1.3;
}
</style>