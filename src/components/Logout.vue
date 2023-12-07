<template>

  <h1>Are you sure you want to go out?</h1>
  <div>
    <button @click="logout">Yes</button>
    <a href="/products">No</a>
  </div>
</template>

<script>
export default {
  data(){
    return{
      userToken: localStorage.getItem('userToken') || ''
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('userToken'); // Remove the userToken from localStorage
      window.location.href = '/products'; // Redirect to the products page
    }
  },
  created() {
    if(!this.userToken){
      this.$router.push('/products');
    }
  },
};
</script>

<style scoped>
div{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 500px;
  margin-top: 25px;
}
</style>