<template>
  <nav>

    <a href="/products">Products</a>
    <a href="#">Orders</a>
    <a href="#">Completed Orders</a>

  </nav>
  <div class="login">
    <h1>Login</h1>
    <input class="email" v-model="email" type="email" placeholder="Email">
    <input class="password" v-model="password" type="password" placeholder="Password">
    <button @click="login">Login</button>
  </div>

</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      userToken: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await fetch('https://jurapro.bhuser.ru/api-shop/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password
          })
        });
        const data = await response.json();
        if (response.ok) {
          this.userToken = data.data.user_token;
          console.log(this.userToken);
          // сохранить токен в localStorage или Vuex store
        } else {
          // обработка ошибки аутентификации
        }
      } catch (error) {
        // обработка ошибки сети
      }
    }
  }
};
</script>

<style scoped>
* {
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
a{

}
.login{
  background-color: #4CAF50;
  color: white;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 400px;
  height: 300px;
  align-items: center;
  margin-left: 500px;
  margin-top: 50px;
  border-radius: 15px;
}
.email{
  width: 250px;
  height: 30px;
  padding: 5px;
  border-radius: 5px;
}
.email:hover{
  cursor: pointer;
}
.password{
  width: 250px;
  height: 30px;
  padding: 5px;
  border-radius: 5px;
}
.password:hover{
  cursor: pointer;
}
button{
  height: 50px;
  width: 150px;
  border-radius: 5px;
}
button:hover{
  cursor: pointer;

}
</style>