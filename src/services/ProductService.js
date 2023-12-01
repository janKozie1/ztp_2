const { ProductModel } = require('../models/ProductModel.js')
const { WithContainer } = require('../utils/WithContainer.js')
const pick = require('lodash/pick');

class ProductService extends WithContainer {
    constructor(container) { super(container) }

    index = async () => {
        return ProductModel.find({})
    }

    details = async (id) => {
        return ProductModel.findById(id)
    }

    create = async (data) => {
        return this.container.getChangeObserver()
            .recordCreation('product', () => new ProductModel(data).save());
    }

    update = async (id, data) => {
        const product = await ProductModel.findById(id);
        if (!product) { return null; }

        const preUpdateValue = pick(product.toObject(), Object.keys(data));

        return this.container.getChangeObserver()
            .recordUpdate('product', preUpdateValue, async () => {
                Object.entries(data).forEach(([key, value]) => {
                    product[key] = value;
                })

                await product.save()
                return product;
            })
    }

    delete = async (id) => {
        return await (this.container.getChangeObserver()
            .recordDeletion('product', () => ProductModel.findByIdAndDelete(id))) !== null
    }
}

module.exports = {
    ProductService
}