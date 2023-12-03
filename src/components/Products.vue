<template>
    <h1>Products</h1>
      <div v-for="product in products" :key="product.id">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
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

</style>