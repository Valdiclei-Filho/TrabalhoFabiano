<script setup>
import axios from "axios";
import SearchBar from "../components/Home/searchBar.vue";
import ProductList from "../components/Home/productList.vue";
import {ref} from 'vue'

const resultados = ref([])

 function buscarTodos(){
  axios
  .get("http://localhost:8080/produto/all")
  .then((response) => {
    resultados.value = response.data;
  })
  .catch((error) => {
    console.error("Erro na busca de todos os produtos:", error);
  });
}

function buscarPorNome(){
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
  <div id="app">
    <div class="pesquisa">
      <SearchBar @search="onSearch" />
      <div class="cart-button">
        <button class="btn btn-dark" type="button">Carrinho</button>
      </div>
    </div>
    <ProductList :searchResults="resultados" />
  </div>
</template>