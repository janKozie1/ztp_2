const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Product name is required'
  },
  description: {
    type: String,
    required: 'Product description is required'
  },
  price: {
    type: Number,
    required: 'Product price is required'
  },
}, {
  strict: false,
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: function (doc, resultObject, options) {
      delete resultObject._id
      delete resultObject.__v
      return resultObject
    }
  }
})

const ProductModel = mongoose.model('Product', ProductSchema, 'products')

module.exports = {
    ProductModel,
}