<!-- ProductItem.vue -->
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

<script>
export default {
  props: {
    produto: Object, // Receberá o objeto do produto como propriedade
  },
};
</script>

<style scoped>
.product-item {
  position: relative;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  margin: 10px;
  background-color: aliceblue;
  display: inline-block;
  top: 8%;
  left: 8%;
}

.image-and-details {
  display: flex;
  flex-direction: column;
}

.product-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 12px;
}

.product-image img {
  width: 50%;
  height: 150px;
  background-image: none;
}

.product-details {
  flex: 1;
  box-sizing: border-box;
  padding: 10px;
}

.product-details .name {
  margin: 5px 0;
  color: black;
}

.product-details .desc {
  margin: 5px 0;
  color: black;
}

.product-details .price {
  margin: 5px 0;
  color: #09bd1b;
  font-style: italic;
}
.buy-now {
  width: 100%;
  display: block;
  background-color: #0582ca;
  color: #fff;
  border: none;
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 0 0 5px 5px;

  transition: background-color 0.2s;
}

.product-details button:hover {
  background-color: rgb(26, 67, 125);
}

.product-details button:focus {
  outline: 2px solid rgb(40, 39, 39);
  background-color: rgb(26, 67, 125);
}
</style>
