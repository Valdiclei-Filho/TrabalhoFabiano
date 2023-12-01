<script setup>
import axios from "axios";
import images from "../components/Product/images.vue";
import info from "../components/product/info.vue";
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
    </div>
    <div v-else>
      <p>Carregando detalhes do produto...</p>
    </div>
  </body>
</template>
