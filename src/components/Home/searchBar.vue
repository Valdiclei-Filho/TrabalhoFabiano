<script setup></script>

<template>
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="Pesquisar"
      v-model="searchTerm"
      aria-label="Recipient's username"
      aria-describedby="button-addon2"
    />
    <button
      class="btn btn-outline-secondary btn-primary text-light"
      type="button"
      id="button-addon2"
    >
      Pesquisar
    </button>
  </div>
</template>

<style scoped>
.input-group {
  width: 20%;
}
</style>
