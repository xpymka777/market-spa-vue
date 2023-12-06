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
    <h1>Order</h1>
    <div class="ordered-products" v-for="item in orderedItems" :key="item.id">
      <h3>Name: {{ item.name }}</h3>
      <p>Description: {{ item.description }}</p>
      <p>Price: {{ item.price }}</p>
    </div>
    <button @click="payForOrder">Pay for the order</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderedItems: [],
      payedItems: [],

    };
  },
  created() {
    const savedItems = localStorage.getItem('order');
    if (savedItems) {
      this.orderedItems = JSON.parse(savedItems);
    }
    const savedCompletedOrders = localStorage.getItem('payedItems');
    if (savedCompletedOrders) {
      this.payedItems = JSON.parse(savedCompletedOrders);
    }
  },
  methods: {
    payForOrder() {
      this.payedItems.push([...this.orderedItems]); // Push a copy of the orderedItems array to payedItems
      this.orderedItems = []; // Clear the orderedItems array
      localStorage.setItem('order', JSON.stringify(this.orderedItems));
      localStorage.setItem('payedItems', JSON.stringify(this.payedItems));
    }
  }
};
</script>

<style scoped>
.ordered-products{
  border: 1px solid black;
  border-radius: 15px;
  margin: 10px;
  padding: 15px;
  width: auto;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
button{
  margin-left: 10px;
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