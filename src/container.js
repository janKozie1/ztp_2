const { ProductController } = require('./controllers/ProductController.js');
const { ChangeController } = require('./controllers/ChangeController.js');
const { ChangeService } = require('./services/ChangeService.js');
const { ProductService } = require('./services/ProductService.js');
const { ChangeObserver } = require('./utils/ChangeObserver.js');

class Container {
    constructor() {
        this.productService = new ProductService(this)
        this.changeService = new ChangeService(this)

        this.productController = new ProductController(this)
        this.changeController = new ChangeController(this)
        this.changeObserver = new ChangeObserver(this)
    }

    getService(type) {
        switch (type) {
            case 'product':
                return this.productService;
            case 'change':
                return this.changeService;                
            default:
                throw new Error('Unknown service')
        }
    }

    getController(type) {
        switch (type) {
            case 'product':
                return this.productController;
            case 'change':
                return this.changeController;  
            default:
                throw new Error('Unknown controller')
        }
    }

    getChangeObserver() {
        return this.changeObserver;
    }
}

module.exports = {
    Container
}