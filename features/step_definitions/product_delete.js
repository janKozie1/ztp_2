const { Given, When } = require('@cucumber/cucumber');

Given(`an user wants to delete {int}nth product`, async function (index) {
  const response = await fetch('http://localhost:3000/products');
  const products = await response.json()

  this.product = products[index];
});

When('they send a request to delete the product', async function () {
  const response = await fetch(`http://localhost:3000/products/${this.product.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  })

  this.receivedCode = response.status;
  this.receivedBody = await response.json() 
});
