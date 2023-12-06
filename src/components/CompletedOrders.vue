<template>
  <h1>Completed Orders</h1>

</template>

<script>
  export default {
    data(){
      return{
        //массив для отобпражения выполненных заказов
        payedItems:[],
      };
    },
    //метод которыйс будет загружать мне массив из localstorage с выполненными заказами

    created() {
      const savedItems = localStorage.getItem('');
      if (savedItems) {
        this.orderedItems = JSON.parse(payedItems);
      }
    }
  }
</script>

<style scoped>

</style>