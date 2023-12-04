<template>
  <div>
    <h1>Cart</h1>

    <div class="cart-item" v-for="item in cartItems" :key="item.id">
      <h3>Name: {{ item.name }}</h3>
      <p>Description: {{ item.description }}</p>
      <p>Price: {{ item.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: []
    };
  },
  created() {
    const savedItems = localStorage.getItem('cart');
    if (savedItems) {
      this.cartItems = JSON.parse(savedItems);
    }
  }
};
</script>

<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      cartItems: [],-->
<!--    };-->
<!--  },-->
<!--  mounted() {-->
<!--    this.fetchCartItems();-->
<!--  },-->
<!--  methods: {-->
<!--    async fetchCartItems() {-->
<!--      try {-->
<!--        const response = await fetch("https://jurapro.bhuser.ru/api-shop/cart");-->
<!--        const data = await response.json();-->

<!--        this.cartItems = data.data;-->
<!--      } catch (error) {-->
<!--        console.error("Error fetching cart items:", error);-->
<!--      }-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->

<style scoped>

</style>
<!--    <ul>-->
<!--      <li v-for="item in cartItems" :key="item.id">-->
<!--        <h2>{{ item.name }}</h2>-->
<!--        <p>{{ item.description }}</p>-->
<!--        <p>Price: ${{ item.price }}</p>-->
<!--      </li>-->
<!--    </ul>-->