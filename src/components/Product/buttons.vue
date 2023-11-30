<template>
  <div class="buttons">
    <button @click="voltar">Voltar</button>
    <button @click="comprar">Comprar</button>
  </div>
</template>

<script>
export default {
  methods: {
    voltar() {
      this.$emit("voltar");
    },
    comprar() {
      this.$emit("comprar");
    },
  },
};
</script>

<style>
.buttons {
  background-color: #006494;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 5px;
  padding: 1%;
  border-radius: 5px;
}
.buttons button {
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  color: #fff;
}
.buttons button:first-child {
  background-color: #007bff;
}
.buttons button:last-child {
  background-color: #007bff;
}

.buttons button:hover {
  background-color: rgb(26, 67, 125);
}

.buttons button:focus {
  outline: 3px solid whitesmoke;
  background-color: rgb(26, 67, 125);
}
</style>
