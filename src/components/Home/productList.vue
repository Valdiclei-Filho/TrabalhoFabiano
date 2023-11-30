<!-- ProductList.vue -->
<template>
  <div class="row">
    <div class="col-lg-3 col" v-for="produto in searchResults">
      <Product :key="produto.id" :produto="produto" />
    </div>
  </div>
</template>

<script>
import Product from "./Product.vue";

export default {
  components: {
    Product,
  },
  props: {
    searchResults: Array, // Receberá a lista de resultados como propriedade
  },
};
</script>

<style scoped>
/* Estilos específicos para ProductList */
</style>
