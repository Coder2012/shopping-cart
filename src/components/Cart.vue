<template>
  <div class="cart">
    <h1>Shopping Cart</h1>
    <div v-if="cart.length">
      <ul>
        <li v-for="product in cart">
          <span>{{ product.name }}</span>
          <span class="price">&pound;{{ product.price }}</span>
          <button @click="remove(product)" class="remove-button">Remove</button>
        </li>
      </ul>
      <div>
        <label for="voucher">voucher:</label>
        <input id="voucher" type="text" v-model="voucher">
        <button @click="apply()">Apply</button>
        <p v-if="voucherValid === false" class="error">{{voucherErrorMsg}}</p>
        <div v-if="voucherValid === true">
          <p class="success">{{voucher.msg}}</p>
          <p class="success">Discount: {{voucherDiscount}}</p>
          <p class="success">{{voucherSuccessMsg}}</p>
        </div>
      </div>
      <dl class="total">
        <dt>Total:</dt>
        <dd>&pound;{{total}}</dd>
      </dl>
    </div>
    <div v-else>
      <p>Your shopping cart is empty</p>
    </div>
    <button @click="home()" class="rounded-button">Continue shopping</button>
  </div>
</template>

<script>
  export default {
    name: 'Cart',
    data () {
      return {
        voucherValid: undefined,
        voucherErrorMsg: 'Invalid voucher code',
        voucherSuccessMsg: 'Voucher code accepted',
        voucher: '',
        voucherDiscount: 0
      }
    },
    computed: {
      cart () {
        return this.$store.state.cart
      },
      total () {
        let arr = this.$store.state.cart
        let total = arr.reduce((price, product, index, arr) => {
          let total = parseFloat(price)
          total += parseFloat(product.price)
          return parseFloat(total).toFixed(2)
        }, 0)

        this.voucherDiscount = parseFloat(this.voucherDiscount).toFixed(2)
        return total - this.voucherDiscount
      }
    },
    methods: {
      remove: function (product) {
        this.$store.state.cart = this.$store.state.cart.filter((item) => product.id !== item.id)
      },
      apply: function () {
        let voucher = this.$store.state.vouchers.filter((item) => this.voucher === item.code)
        console.log(voucher)
        if (voucher.length) {
          this.voucherValid = true
          if (voucher[0].hasOwnProperty('min') && this.total >= voucher[0].min) {
            this.voucherDiscount = voucher[0].value
          } else {
            this.voucherDiscount = voucher[0].value
          }
        } else {
          this.voucherValid = false
          this.voucherDiscount = 0
        }
      },
      home: function () {
        this.$router.push('/')
      }
    }
  }
</script>
