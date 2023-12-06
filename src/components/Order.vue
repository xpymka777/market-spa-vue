<template>
  <div>
    <h1>Order</h1>
    <div class="ordered-products" v-for="item in orderedItems" :key="item.id">
      <h3>Name: {{ item.name }}</h3>
      <p>Description: {{ item.description }}</p>
      <p>Price: {{ item.price }}</p>
    </div>
    <button>Pay for the order</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderedItems: [],
      payedItems:[],
    };
  },
  created() {
    const savedItems = localStorage.getItem('order');
    if (savedItems) {
      this.orderedItems = JSON.parse(savedItems);
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
</style>