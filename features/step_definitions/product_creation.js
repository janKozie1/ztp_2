const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

const isObject = require('lodash/isObject');

Given(`an user wants to create a product with name = {string}, description = {string} price = {float}`, function (name, description, price) {
  this.name = name;
  this.description = description;
  this.price = price;
});

When('they send a request to create it', async function () {
  const response = await fetch('http://localhost:3000/products/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: this.name, description: this.description, price: this.price})
  })

  this.receivedCode = response.status;
  this.receivedBody = await response.json() 
});

Then('they should receive a response with code {int} and body', function (code, unparsedBody) {
  assert.strictEqual(this.receivedCode, code);

  const body = JSON.parse(unparsedBody);

  if (body === null) {
    assert.equal(this.receivedBody.errors.length, 1)
  } else {
    if (isObject(body)) {
      Object.entries(body).forEach(([key, value]) => {
        assert.strictEqual(this.receivedBody[key], value);
      })
    } else {
      assert.strictEqual(this.receivedBody, body)
    }
  }
});