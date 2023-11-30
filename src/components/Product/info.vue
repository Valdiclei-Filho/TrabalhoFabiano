<template>
  <div class="info">
    <div>
      <span>Nome do Produto: {{ nome }}</span>
      <span>Descrição: {{ descricao }}</span>
      <span>Preço: R$ {{ valor }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nome: String,
    descricao: String,
    valor: Number,
  },
};
</script>

<style>
.info {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.info div {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  width: 55%;
}
.info div:last-child {
  align-items: baseline;
}
.info div span {
  margin-bottom: 8px;
}
.info div span:first-child {
  font-weight: bold;
}
</style>
