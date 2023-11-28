const { ProductModel } = require('../models/ProductModel.js')

class ProductService {
    index = async () => {
        return ProductModel.find({})
    }

    details = async (id) => {
        return ProductModel.findById(id)
    }

    create = async (data) => {
        return (new ProductModel(data)).save()
    }

    update = async (id, data) => {
        return ProductModel.findByIdAndUpdate(id, data, { new: true })
    }

    delete = async (id) => {
        return (await ProductModel.findByIdAndDelete(id)) !== null
    }
}

module.exports = {
    ProductService
}