<template>
  <nav>
    <a href="/login">Login</a>
    <a href="#">Logout</a>
    <a href="/products">Products</a>
    <a href="/order">Order</a>
    <a href="/cart">Cart</a>
    <a href="/registration">Registration</a>
  </nav>
  <div>
    <h1>Completed Orders</h1>
    <div class="completed-order" v-for="(order, index) in payedItems" :key="index">
      <div class="ordered-products" v-for="(item, itemIndex) in order" :key="itemIndex">
        <h3>Name: {{ item.name }}</h3>
        <p>Description: {{ item.description }}</p>
        <p>Price: {{ item.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      payedItems: []
    };
  },
  created() {
    const savedCompletedOrders = localStorage.getItem('payedItems');
    if (savedCompletedOrders) {
      this.payedItems = JSON.parse(savedCompletedOrders);
    }
  }
};
</script>

<style scoped>
.completed-order{
  border: 5px solid red;
  border-radius: 15px;
}
.ordered-products{
  border: 1px solid black;
  border-radius: 15px;
}
</style>