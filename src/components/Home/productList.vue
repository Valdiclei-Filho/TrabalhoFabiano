<script setup>
import Product from "./Product.vue";

</script>

<template>
  <div class="row">
    <div class="col-lg-3 col" v-for="produto in searchResults">
      <Product :key="produto.id" :produto="produto" />
    </div>
  </div>
</template>
