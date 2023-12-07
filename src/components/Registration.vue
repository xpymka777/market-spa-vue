<template>
  <nav>
    <a v-if="!userToken" href="/login">Login</a>
    <a v-if="userToken" href="/logout">Logout</a>
    <a href="/products">Products</a>
    <a href="/order">Order</a>
    <a href="/cart">Cart</a>
    <a v-if="!userToken" href="/registration">Registration</a>
  </nav>
  <br>
  <br>
  <h1>Registration</h1>
  <br>

  <br>
  <div>
    <form @submit.prevent="registerUser">
      <div>
        <label for="fio">Full Name:</label>
        <input type="text" id="fio" v-model="fio" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Register</button>
      <a class="back" href="/products">Don't want to register? You can return to the main page.</a>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fio: '',
      email: '',
      password: '',
      userToken: localStorage.getItem('userToken') || ''
    };
  },
  created() {
    if(this.userToken){
      this.$router.push('/products');
    }
  },
  methods: {
    async registerUser() {
      try {
        const response = await fetch("https://jurapro.bhuser.ru/api-shop/signup", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fio: this.fio,
            email: this.email,
            password: this.password,
          }),
        });

        if (response.status === 201) {
          const data = await response.json();
          console.log('Registration successful. User Token:', data.data.user_token);
        } else {
          console.error('Registration failed:', response.statusText);
        }
      } catch (error) {
        console.error('Error during registration:', error);
      }
    },
    getTokenFromLocalStorage() {
      this.savedToken = localStorage.getItem('userToken');
      console.log(this.savedToken)
    },
  },
};
</script>

<style scoped>
form{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 300px;
  height: 300px;
  border: 1px solid black;
  border-radius: 15px;
  padding: 15px;
  //align-items: center;
}
label{
  margin-right: 5px;
}
input{
  width: 175px;
  border-radius: 15px;
  padding: 8px;
}
button{
  width: 175px;
  height: 40px;
  border-radius: 15px;
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
.back{
  color: black;
  text-decoration: none;
}
.back:hover{
  color: #54f181;
}
</style>