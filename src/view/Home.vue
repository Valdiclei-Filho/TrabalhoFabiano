<template>
  <div id="app">
    <div class="pesquisa">
      <SearchBar @search="onSearch" />
      <div class="cart-button">
        <button type="button"></button>
      </div>
    </div>
    <ProductList :searchResults="searchResults" />
  </div>
</template>

<script>
import axios from "axios";
import SearchBar from "../components/Home/searchBar.vue";
import ProductList from "../components/Home/productList.vue";

export default {
  components: {
    SearchBar,
    ProductList,
  },
  data() {
    return {
      searchTerm: "",
      searchResults: [],
    };
  },
  mounted() {
    this.buscarItens(); // Inicia a busca ao montar o componente
  },
  methods: {
    buscarItens() {
      if (this.searchTerm.trim() !== "") {
        axios
          .get(`http://localhost:8080/produto/nome?nome=${this.searchTerm}`)
          .then((response) => {
            this.searchResults = response.data;
          })
          .catch((error) => {
            console.error("Erro na busca do produto:", error);
          });
      } else {
        axios
          .get("http://localhost:8080/produto/all")
          .then((response) => {
            this.searchResults = response.data;
          })
          .catch((error) => {
            console.error("Erro na busca de todos os produtos:", error);
          });
      }
    },
    onSearch(term) {
      this.searchTerm = term;
      this.buscarItens();
    },
  },
};
</script>