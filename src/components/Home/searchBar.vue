<!-- SearchBar.vue -->
<template>
  <div class="search-bar">
    <input
      id="searchInput"
      type="text"
      placeholder="Pesquisar"
      v-model="searchTerm"
    />
    <button type="button" @click="buscarItens">Pesquisar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
    buscarItens() {
      // Emitir um evento para o componente pai quando a pesquisa for acionada
      this.$emit("search", this.searchTerm.trim());
    },
  },
};
</script>

<style>
.search-bar {
  display: flex;
}

.search-bar input {
  padding: 8px;
  border: none;
  border-radius: 4px;
}

.search-bar button {
  padding: 8px 15px;
  margin-left: 5px;
  background-color: #0582ca;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  transition: background-color 0.3s;
}

.search-bar button:hover {
  background-color: rgb(26, 67, 125);
}

.search-bar button:focus {
  outline: 3px solid whitesmoke;
  background-color: rgb(26, 67, 125);
}

.search-bar :focus {
  outline: 3px solid whitesmoke;
}
</style>
