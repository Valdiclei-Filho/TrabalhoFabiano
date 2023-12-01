<script setup>
import axios from "axios";
import SearchBar from "../components/Home/searchBar.vue";
import Product from "../components/Home/Product.vue";
import { ref } from "vue";

const resultados = ref([]);

function buscarTodos() {
  axios
    .get("http://localhost:8080/produto/all")
    .then((response) => {
      resultados.value = response.data;
    })
    .catch((error) => {
      console.error("Erro na busca de todos os produtos:", error);
    });
}

function buscarPorNome() {
  axios
    .get(`http://localhost:8080/produto/nome?nome=${this.searchTerm}`)
    .then((response) => {
      resultados.value = response.data;
      console.log(resultados);
    })
    .catch((error) => {
      console.error("Erro na busca do produto:", error);
    });
}

buscarTodos();
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-lg-3 col" v-for="produto in resultados">
        <Product :produto="produto" />
      </div>
    </div>
  </div>
</template>
