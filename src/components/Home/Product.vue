<script setup>
import { defineProps } from "vue";

const props = defineProps({
  produto: Object,
});
</script>

<template>
  <div class="card" style="width: 18rem">
    <img
      :src="props.produto.img1"
      class="card-img-top"
      :alt="props.produto.nome"
    />
    <div class="card-body">
      <h5 class="card-title">{{ props.produto.nome }}</h5>
      <p class="card-text">R$ {{ props.produto.valor }}</p>
      <router-link :to="'/detalhes/' + props.produto.id">
        <button class="btn btn-primary">Comprar Agora</button>
      </router-link>
    </div>
  </div>
</template>
