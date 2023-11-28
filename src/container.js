const { ProductController } = require('./controllers/ProductController.js')
const { ProductService } = require('./services/ProductService.js')

class Container {
    constructor() {
        this.productService = new ProductService(this);
        this.productController = new ProductController(this)
    }

    getService(type) {
        switch (type) {
            case 'product':
                return this.productService;
            default:
                throw new Error('Unknown service')
        }
    }

    getController(type) {
        switch (type) {
            case 'product':
                return this.productController;
            default:
                throw new Error('Unknown controller')
        }
    }
}

module.exports = {
    Container
}