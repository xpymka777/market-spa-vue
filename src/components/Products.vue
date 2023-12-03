<template >
  <nav>

    <a href="/products">Products</a>
    <a href="#">Orders</a>
    <a href="#">Completed Orders</a>
    <a href="#">Logout</a>
  </nav>

    <h1>Products</h1>

    <div class='products' v-for="product in products" :key="product.id">
      <h3>Name: {{ product.name }}</h3>
      <p>Description: {{ product.description }}</p>
      <p>Price: {{ product.price }}</p>
    </div>

</template>

<script>
export default {
  data() {
    return {
      products: []
    };
  },
  created() {
    this.fetchProductList();
  },
  methods: {
    async fetchProductList() {
      try {
        const response = await fetch('https://jurapro.bhuser.ru/api-shop/products', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        if (response.ok) {
          this.products = data.data;
        } else {
          // обработка ошибки получения списка товаров
        }
      } catch (error) {
        // обработка ошибки сети
      }
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
nav{
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.products{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  width: 100%;
  border: 1px solid black;
  border-radius: 15px;
  padding: 35px;
  margin-top: 50px;
}
</style>