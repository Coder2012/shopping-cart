# shopping-cart

> Built with Vue.js using vue-cli and webpack

## summary

This is a single page application, with two routes:

* /
* /cart

Navigating to the root view will show all products, each one that is in stock can be added to the cart. The cart button will update to green and display the total number of products in the cart.

Use the cart button to navigate to the cart view. Here each product can be viewed and removed from the cart if necessary. If there are no products in the cart, it will display a message to that effect.

Voucher codes can be added as follows:

* ABC - £5.00 off your order
* 123 - £10.00 off when you spend over £50
* unknown - invalid or not qualified message

## Build Setup

``` bash
# clone the repository
git clone https://github.com/Coder2012/shopping-cart.git

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

# Running locally

After running **npm run build** step a /dist folder will be created. This should be the root for running a local server, one such server to use is:

**npm install -g http-server** then cd to the /dist folder and just type **http-server**, view the site at **localhost:8080/**
