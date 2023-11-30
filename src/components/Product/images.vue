<template>
  <div class="images">
    <img
      v-for="(imagem, index) in imagens"
      :key="index"
      :src="imagem"
      :alt="nome"
    />
  </div>
</template>

<script>
export default {
  props: {
    imagens: Array,
    nome: String,
  },
};
</script>

<style>
.images img{
  border-radius: 8px;
  width: 32.8%;
  height: auto;
  padding-right: 3px;
}

</style>
