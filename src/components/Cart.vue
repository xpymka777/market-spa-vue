<template>
  <nav>
    <a href="/login">Login</a>
    <a href="/logout">Logout</a>
    <a href="/products">Products</a>
    <a href="/order">Order</a>
    <a href="/cart">Cart</a>
    <a href="/registration">Registration</a>
  </nav>
  <div>
    <h1>Cart</h1>
    <div class="products" v-for="item in cartItems" :key="item.id">
      <h3>Name: {{ item.name }}</h3>
      <p>Description: {{ item.description }}</p>
      <p>Price: {{ item.price }}</p>
      <button @click="removeFromCart(item)">Remove from Cart</button>
      <button @click="moveToOrder(item)">Move to Order</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: [],
      orderItems:[],
    };
  },
  created() {
    const savedItems = localStorage.getItem('cart');
    if (savedItems) {
      this.cartItems = JSON.parse(savedItems);
    }
    const savedCartItems = localStorage.getItem('cart');
    if(savedCartItems){
      this.cartItems = JSON.parse(savedCartItems)
    }
  },
  methods: {
    removeFromCart(item) {
      this.cartItems = this.cartItems.filter(product => product.id !== item.id);
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    },
    moveToOrder(item){
      this.orderItems.push(item);
      console.log(this.orderItems);
      this.cartItems = this.cartItems.filter(product => product.id !== item.id);
      localStorage.setItem('order', JSON.stringify(this.orderItems));
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }
  }
};
</script>


<style>
*{
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
button{
  width: 175px;
  height: 40px;
  border-radius: 15px;
  background-color: #4CAF50
}
button:hover{
  cursor: pointer;
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
</style>
