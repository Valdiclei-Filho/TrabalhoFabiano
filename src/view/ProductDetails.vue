<script setup>
import axios from "axios";
import images from "../components/Product/images.vue";
import info from "../components/Product/info.vue";
import buttons from "../components/Product/buttons.vue";
import { ref, defineProps } from "vue";

const props = defineProps({
  id: String,
});

var produto = ref({});

axios
  .get(`http://localhost:8080/produto/id?id=${props.id}`)
  .then((response) => {
    produto.value = response.data;
  })
  .catch((error) => {
    console.error("Erro na busca do produto:", error);
  });
</script>

<template>
  <body>
    <div v-if="produto" class="produto">
      <images :imagens="produto.imagens" :nome="produto.nome" />
      <info
        :nome="produto.nome"
        :descricao="produto.descricao"
        :valor="produto.valor"
      />
      <buttons @voltar="voltar" @comprar="comprar" />
    </div>
    <div v-else>
      <p>Carregando detalhes do produto...</p>
    </div>
  </body>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  color: #fff;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  background-color: #003554;
}
.produto .buttons {
  background-color: #006494;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 5px;
  padding: 1%;
  border-radius: 5px;
}
.produto .buttons button {
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  color: #fff;
}
.produto .buttons button:first-child {
  background-color: #007bff;
}
.produto .buttons button:last-child {
  background-color: #007bff;
}

.produto .buttons button:hover {
  background-color: rgb(26, 67, 125);
}

.produto .buttons button:focus {
  outline: 3px solid whitesmoke;
  background-color: rgb(26, 67, 125);
}
.produto .images img {
  border-radius: 8px;
  width: 32.8%;
  height: auto;
  padding-right: 3px;
}
.produto .info {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.produto .info div {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  width: 55%;
}
.produto .info div:last-child {
  align-items: baseline;
}
.produto .info div span {
  margin-bottom: 8px;
}
.produto .info div span:first-child {
  font-weight: bold;
}
.produto {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
</style>
