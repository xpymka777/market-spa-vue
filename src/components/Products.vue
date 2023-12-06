<template>
  <nav>
    <a href="/login" v-if="!savedToken">Login</a>
    <a href="/logout" v-if="savedToken">Logout</a>
    <a href="/products">Products</a>
    <a href="/order">Order</a>
    <a href="/cart">Cart</a>
    <a href="/registration" v-if="!savedToken">Registration</a>
  </nav>
  <div>
    <h1>Products</h1>

    <div class="products" v-for="product in products" :key="product.id">
      <h3>Name: {{ product.name }}</h3>
      <p>Description: {{ product.description }}</p>
      <p>Price: {{ product.price }}</p>
      <button @click="addToCart(product)">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      // savedToken: null,
    };
  },
  created() {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      this.products = JSON.parse(savedProducts);
    } else {
      this.fetchProductList();
    }
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
          localStorage.setItem('products', JSON.stringify(data.data)); // сохраняем данные в localStorage
        } else {
          // обработка ошибки получения списка товаров
        }
      } catch (error) {
        // обработка ошибки сети
      }
    },
    // getTokenFromLocalStorage() {
    //   this.savedToken = localStorage.getItem('userToken');
    //   console.log(this.savedToken)
    // },
    addToCart(product) {
      let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      cartItems.push(product);
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }
};
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
nav{
  width: 100%;
  background-color: orange;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-radius: 0 0 5px 5px;
  padding: 15px;
}
nav>a{
  color: black;
  text-decoration: none;
}
nav>a:hover{
  color:white;
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
button{
  width: 175px;
  height: 40px;
  border-radius: 15px;
  background-color: #4CAF50
}
button:hover{
  cursor: pointer;
}
</style>