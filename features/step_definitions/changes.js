const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

Given(`an user wants to view changes for {int}nth product`, async function (index) {
    const response = await fetch('http://localhost:3000/products');
    const products = await response.json()
  
    this.product = products[index];
});

When('they send a request to view the changes', async function () {
  const response = await fetch(`http://localhost:3000/changes/${this.product.id}`)

  this.receivedCode = response.status;
  this.receivedBody = await response.json() 
});

Then('they should receive at least one change', function () {
  assert.strictEqual(this.receivedCode, 200);
  assert.notEqual(this.receivedBody.length, 0)
  assert.equal(this.receivedBody[0].changeType, "add")
});