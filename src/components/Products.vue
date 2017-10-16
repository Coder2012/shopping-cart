<template>
  <div class="hello">
    <ul class="products">
      <li v-for="product in ProductData" class="product">
        <h3>{{ product.name }}</h3>
        <p>{{ product.category }}</p>
        <p class="price">&pound;{{ product.price }}</p>
        <div v-if="parseInt(product.stock)" class="button-container">
          <button @click="add(product)" class="rounded-button">Add to cart</button>
        </div>
        <p v-else class="error">{{stockMsg}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data () {
    return {
      stockMsg: 'Sorry item is out of stock',
      addedMsg: 'Item added to cart'
    }
  },
  computed: {
    ProductData () {
      return this.$store.state.ProductData
    }
  },
  methods: {
    add: function (product) {
      if (product.stock) {
        this.$store.state.cart.push(product)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
