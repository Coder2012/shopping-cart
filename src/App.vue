<template>
  <div id="app">
    <header class="masthead">
      <p class="title">Welcome to my store</p>
      <button @click="cart()" class="cart-button" v-bind:class="{ added: quantity > 0 }">Cart <span>{{quantity}}</span></button>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    quantity () {
      return this.$store.state.cart.length
    }
  },
  methods: {
    cart: function () {
      this.$router.push('/cart')
    }
  }
}
</script>

<style>
* { box-sizing:border-box; }

body {
    padding: 0;
    margin: 0;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

#app {
  color: #2c3e50;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

.masthead {
  background-color: #2D3142;
  color: white;
  display: flex;
  height: 60px;
  min-width: 100%;
  position: fixed;
  top: 0;
  box-shadow: 0px 5px 5px 0px rgba(200,200,200,1);
}

.title {
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
}

.button-container {
  margin-top: auto;
}

.rounded-button,
.cart-button,
.remove-button {
  background-color: #223388;
  border: none;
  border-radius: 50px;
  color: white;
  cursor: pointer;
  font-weight: bold;
  padding: 5px 10px;
}

.rounded-button:hover,
.cart-button:hover,
.remove-button:hover {
  opacity: 0.6;
}

.cart-button {
  background-color: #883322;
  border-radius: 0;
  padding: 5px 20px;
  margin-left: auto;
}

.remove-button {
  background-color: #628297;
}

.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product {
  background: #4F5D75;
  color: white;
  display: flex;
  flex-direction: column;
  flex: 0 0 100%;
  margin: 20px 10px;
  padding: 10px;
}

.price {
  font-weight: bold;
}

.total {
  font-weight: bold;
}

dt,dd {
  display: inline-block;
}

.error,
.success {
  color: red;
  font-weight: bold;
  font-size: 12px;
}

.success {
  color: green;
}

.added {
  background-color: green;
}

@media screen and (min-width: 768px) {
  .product {
    flex: 0 0 20%;
  }
}
</style>
