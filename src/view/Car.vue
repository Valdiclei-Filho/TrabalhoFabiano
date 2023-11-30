<template>
  <section class="container normal-section">
    <h2 class="section-title">Carrinho</h2>

    <table class="cart-table">
      <thead>
        <tr>
          <th class="table-head-item first-col">Item</th>
          <th class="table-head-item second-col">Preço</th>
          <th class="table-head-item third-col">Quantidade</th>
        </tr>
      </thead>

      <tbody>
        <tr class="cart-product">
          <td class="product-identification">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-finish-unselect-gallery-2-202207?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1655249916900"
              alt="Miniatura"
              class="cart-product-image"
            />
            <strong class="cart-product-title">Miniatura</strong>
          </td>
          <td>
            <span class="cart-product-price">R$69,90</span>
          </td>
          <td>
            <input type="number" value="2" min="0" class="product-qtd-input" />
            <button type="button" class="remove-product-button">Remover</button>
          </td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td colspan="3" class="cart-total-container">
            <strong>Total</strong>
            <span>R$89,89</span>
          </td>
        </tr>
      </tfoot>
    </table>
  </section>
</template>

<script></script>

<style>
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  background-color: #003554;
  color: #fff;
}

/* Carrinho */
.container {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}

.section-title {
  font-size: 28px;
  color: #fff;
  margin-bottom: 20px;
}

.cart-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 5px;
}

.table-head-item {
  font-size: 16px;
  color: black;
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #9c9a9a;
}

.first-col {
  width: 60%;
}

.second-col {
  width: 20%;
}

.third-col {
  width: 20%;
}

.cart-product {
  border-bottom: 1px solid #9c9a9a;
}

.product-identification {
  display: flex;
  align-items: center;
}

.cart-product-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 10px;
}

.cart-product-title {
  font-size: 16px;
  color: black;
}

.cart-product-price {
  font-size: 16px;
  color: black;
}

.product-qtd-input {
  width: 60px;
  text-align: center;
  margin-right: 10px;
}

.remove-product-button {
  padding: 8px 10px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  color: #fff;
  outline-offset: -2px;
}

.remove-product-button:first-child {
  background-color: #007bff;
}

.remove-product-button:last-child {
  background-color: #007bff;
}

.remove-product-button:hover {
  background-color: rgb(26, 67, 125);
}

.remove-product-button:focus {
  outline: 3px solid whitesmoke;
  background-color: rgb(26, 67, 125);
}

.cart-total-container {
  text-align: right;
  padding: 10px 15px;
  border-top: 1px solid #ddd;
  color: black;
}
</style>
