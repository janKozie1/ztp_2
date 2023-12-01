const { Given, When } = require('@cucumber/cucumber');

Given(`an user wants to edit {int}nth product and set its price to {float}`, async function (index, price) {
  const response = await fetch('http://localhost:3000/products');
  const products = await response.json()

  this.product = products[index];
  this.price = price;
});

When('they send a request to set the price to {float}', async function (newPrice) {
  const response = await fetch(`http://localhost:3000/products/${this.product.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        ...this.product,
        price: newPrice,
    })
  })

  this.receivedCode = response.status;
  this.receivedBody = await response.json() 
});
