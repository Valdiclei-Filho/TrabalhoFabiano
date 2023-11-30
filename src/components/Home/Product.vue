<script setup></script>

<template>
  <div class="product-item">
    <div class="image-and-details">
      <div class="product-image">
        <img :src="produto.imagem1" :alt="produto.nome" />
      </div>
      <div class="product-details" :key="produto.id">
        <h2 class="name">{{ produto.nome }}</h2>
        <p class="price">R$ {{ produto.valor }}</p>
        <router-link :to="'/detalhes/' + produto.id">
          <button class="buy-now">Comprar Agora</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
